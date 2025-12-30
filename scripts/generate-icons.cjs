/**
 * Script to convert SVGs in cooliocns SVG directory
 * into Vue components under src/icons/.
 *
 * Reads recursively from all subdirectories.
 */
const fs = require('fs')
const path = require('path')
const { optimize } = require('svgo')

const svgsDir = path.join(__dirname, '..', 'cooliocns SVG')
const outDir = path.join(__dirname, '..', 'src', 'icons')

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

function pascalCase(name) {
  // Remove file extension
  name = name.replace(/\..+$/, '')
  
  // Split by underscores and hyphens, then capitalize each word
  return name
    .split(/[_-]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '')
}

function getAllSvgFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir)
  
  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    
    if (stat.isDirectory()) {
      getAllSvgFiles(filePath, fileList)
    } else if (file.endsWith('.svg')) {
      fileList.push(filePath)
    }
  })
  
  return fileList
}

const svgFiles = fs.existsSync(svgsDir) ? getAllSvgFiles(svgsDir) : []
const generatedIcons = []

svgFiles.forEach((filePath) => {
  const fileName = path.basename(filePath)
  const raw = fs.readFileSync(filePath, 'utf8')
  const svgoRes = optimize(raw, { path: fileName })
  let svg = svgoRes.data

  // Remove outer <svg> wrapper; the IconBase controls size/viewBox
  svg = svg.replace(/<svg[^>]*>/i, '').replace(/<\/svg>/i, '')

  const name = pascalCase(fileName)
  const componentName = `Icon${name}`
  
  const component = `<template>
  <IconBase>
    ${svg}
  </IconBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '../components/IconBase.vue'

export default defineComponent({
  name: '${componentName}',
  components: { IconBase }
})
</script>
`
  
  const outputPath = path.join(outDir, `${componentName}.vue`)
  fs.writeFileSync(outputPath, component, 'utf8')
  generatedIcons.push({ name: componentName, fileName: fileName })
  console.log(`Generated ${componentName} from ${fileName}`)
})

// Generate index file with all exports
const imports = generatedIcons.map(icon => `import ${icon.name} from './icons/${icon.name}.vue'`).join('\n')
const exportsList = generatedIcons.map(icon => `export { default as ${icon.name} } from './icons/${icon.name}.vue'`).join('\n')

const indexContent = `// Auto-generated file - do not edit manually
// Run 'npm run generate:icons' to regenerate

import { App } from 'vue'

${imports}

${exportsList}

// Install function to register all components globally
export function install(app: App) {
${generatedIcons.map(icon => `  app.component('${icon.name}', ${icon.name})`).join('\n')}
}

export default { install }
`

const indexPath = path.join(__dirname, '..', 'src', 'index.ts')
fs.writeFileSync(indexPath, indexContent, 'utf8')
console.log(`\n✅ Generated index.ts with ${generatedIcons.length} exports`)
console.log(`\n✅ Total: Generated ${generatedIcons.length} icon components`)
