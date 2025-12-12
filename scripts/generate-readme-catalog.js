/**
 * Script to generate a catalog section for README.md with compact icons
 * Icons are displayed horizontally (icon + name in a row) with smaller size
 */
const fs = require('fs')
const path = require('path')

const svgsDir = path.join(__dirname, '..', 'cooliocns SVG')
const readmeFile = path.join(__dirname, '..', 'README.md')

function pascalCase(name) {
  name = name.replace(/\..+$/, '')
  return name
    .split(/[_-]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '')
}

function getSvgContent(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8')
    return raw.replace(/<svg[^>]*>/i, '').replace(/<\/svg>/i, '').trim()
  } catch (error) {
    return ''
  }
}

function getAllCategories() {
  const categories = []
  const items = fs.readdirSync(svgsDir, { withFileTypes: true })
  
  items.forEach(item => {
    if (item.isDirectory()) {
      categories.push(item.name)
    }
  })
  
  return categories.sort()
}

function getIconsInCategory(categoryName) {
  const categoryPath = path.join(svgsDir, categoryName)
  const files = fs.readdirSync(categoryPath)
  const icons = []
  
  files.forEach(file => {
    if (file.endsWith('.svg')) {
      const filePath = path.join(categoryPath, file)
      const name = pascalCase(file)
      const componentName = `Icon${name}`
      const svgContent = getSvgContent(filePath)
      
      icons.push({
        componentName: componentName,
        svgContent: svgContent
      })
    }
  })
  
  return icons.sort((a, b) => a.componentName.localeCompare(b.componentName))
}

// Generate catalog section
let catalogSection = `\n## 📋 Catálogo Visual de Iconos\n\n`

const categories = getAllCategories()
let totalIcons = 0

categories.forEach(category => {
  const icons = getIconsInCategory(category)
  totalIcons += icons.length
  
  // Convert category name to lowercase for anchor ID
  const anchorId = category.toLowerCase()
  catalogSection += `<h3 id="${anchorId}">${category} (${icons.length} iconos)</h3>\n\n`
  
  // Use HTML table for GitHub compatibility (3 columns)
  catalogSection += `<table>\n<tbody>\n`
  
  // Process icons in rows of 3
  for (let i = 0; i < icons.length; i += 3) {
    catalogSection += `<tr>\n`
    
    // Add up to 3 icons per row
    for (let j = 0; j < 3 && (i + j) < icons.length; j++) {
      const icon = icons[i + j]
      catalogSection += `<td style="padding: 8px; vertical-align: middle;">\n`
      catalogSection += `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; margin-right: 8px;" stroke="currentColor" stroke-width="2">\n`
      catalogSection += `${icon.svgContent}\n`
      catalogSection += `</svg>\n`
      catalogSection += `<code style="font-size: 0.85em;">${icon.componentName}</code>\n`
      catalogSection += `</td>\n`
    }
    
    // Fill empty cells if row is incomplete
    const remaining = 3 - (icons.length - i)
    if (remaining > 0 && remaining < 3) {
      for (let k = 0; k < remaining; k++) {
        catalogSection += `<td></td>\n`
      }
    }
    
    catalogSection += `</tr>\n`
  }
  
  catalogSection += `</tbody>\n</table>\n\n`
})

catalogSection += `**Total: ${totalIcons} iconos**\n\n`

// Read current README
const readmeContent = fs.readFileSync(readmeFile, 'utf8')

// Find the position to replace the catalog section
const catalogStartIndex = readmeContent.indexOf('## 📋 Catálogo Visual de Iconos')
const ejemploCompletoIndex = readmeContent.indexOf('## 📖 Ejemplo completo')

if (catalogStartIndex !== -1 && ejemploCompletoIndex !== -1) {
  // Find the end of the catalog section (before "Ejemplo completo")
  let catalogEnd = readmeContent.indexOf('\n## 📖 Ejemplo completo', catalogStartIndex)
  
  if (catalogEnd === -1) {
    // Try without the newline
    catalogEnd = readmeContent.indexOf('## 📖 Ejemplo completo', catalogStartIndex)
  }
  
  // Replace the entire catalog section
  const newReadme = 
    readmeContent.substring(0, catalogStartIndex) + 
    catalogSection + 
    readmeContent.substring(catalogEnd)
  
  fs.writeFileSync(readmeFile, newReadme, 'utf8')
  console.log(`✅ Catálogo agregado al README`)
  console.log(`📊 Total de iconos: ${totalIcons}`)
  console.log(`📁 Categorías: ${categories.length}`)
} else {
  console.error('❌ No se encontró la sección "Iconos disponibles" en el README')
  process.exit(1)
}

