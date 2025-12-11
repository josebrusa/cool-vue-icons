# icons-cool-vue

Biblioteca de iconos como componentes Vue (Vue 3 + TypeScript). Incluye más de 440 iconos listos para usar.

## 📦 Instalación

```bash
npm install icons-cool-vue
```

## 🚀 Uso

### Opción 1: Registro global (todos los iconos)

Registra todos los iconos globalmente en tu aplicación Vue:

```ts
// main.ts o main.js
import { createApp } from 'vue'
import App from './App.vue'
import IconLibrary from 'icons-cool-vue'

const app = createApp(App)
app.use(IconLibrary)
app.mount('#app')
```

Ahora puedes usar cualquier icono en tus componentes sin importarlos:

```vue
<template>
  <div>
    <IconArrowDown />
    <IconCalendar />
    <IconBell />
    <IconUser />
  </div>
</template>
```

### Opción 2: Import individual (recomendado para tree-shaking)

Importa solo los iconos que necesites:

```vue
<script setup>
import { IconArrowDown, IconCalendar, IconBell, IconUser } from 'icons-cool-vue'
</script>

<template>
  <div>
    <IconArrowDown />
    <IconCalendar />
    <IconBell />
    <IconUser />
  </div>
</template>
```

### Opción 3: Import directo de componente

```vue
<script setup>
import IconArrowDown from 'icons-cool-vue/src/icons/IconArrowDown.vue'
</script>

<template>
  <IconArrowDown />
</template>
```

## 🎨 Personalización

Todos los iconos aceptan las props de `IconBase`:

```vue
<template>
  <!-- Tamaño personalizado -->
  <IconArrowDown :size="32" />
  
  <!-- Color personalizado con clases -->
  <IconCalendar customClass="text-blue-500" />
  
  <!-- ViewBox personalizado -->
  <IconBell viewBox="0 0 24 24" />
  
  <!-- Accesibilidad -->
  <IconUser :ariaHidden="false" aria-label="Usuario" />
</template>
```

### Props disponibles:

- `size`: Tamaño del icono (número o string, default: 24)
- `viewBox`: ViewBox del SVG (string, default: '0 0 24 24')
- `customClass`: Clases CSS personalizadas (string, objeto o array)
- `ariaHidden`: Ocultar del lector de pantalla (boolean, default: true)

## 📚 Iconos disponibles

La librería incluye más de 440 iconos organizados en categorías:

- **Arrow** (70+): Flechas y direcciones
- **Calendar** (14): Calendarios y relojes
- **Communication** (25): Campanas, chat, correo
- **Edit** (72): Herramientas de edición
- **Environment** (13): Elementos del entorno
- **File** (39): Archivos y carpetas
- **Interface** (73): Elementos de interfaz
- **Media** (22): Controles multimedia
- **Menu** (16): Menús y navegación
- **Navigation** (18): Navegación
- **Shape** (6): Formas geométricas
- **System** (37): Sistema y dispositivos
- **User** (13): Usuarios
- **Warning** (20): Alertas y advertencias

## 📖 Ejemplo completo

```vue
<script setup>
import { IconArrowDown, IconCalendar, IconBell } from 'icons-cool-vue'
</script>

<template>
  <div class="flex gap-4">
    <IconArrowDown :size="24" customClass="text-gray-600" />
    <IconCalendar :size="32" customClass="text-blue-500" />
    <IconBell :size="20" customClass="text-red-500" />
  </div>
</template>
```

## 🔧 Requisitos

- Vue 3.2.0 o superior
- TypeScript (opcional, pero recomendado)

## 📝 Licencia

MIT

### Atribución de Iconos

Los iconos SVG utilizados en esta librería son de [coolicons](https://github.com/krystonschwarze/coolicons) creados por [Kryston Schwarze](https://github.com/krystonschwarze).

Los iconos originales están licenciados bajo [Creative Commons 4.0](https://creativecommons.org/licenses/by/4.0/) y pueden usarse en proyectos personales y comerciales.

- **Repositorio original**: https://github.com/krystonschwarze/coolicons
- **Sitio web**: https://coolicons.cool
- **Creador**: [Kryston Schwarze](https://github.com/krystonschwarze)

Esta librería Vue es una adaptación de los iconos SVG originales como componentes Vue 3. El código de la librería (componentes Vue, build, etc.) está licenciado bajo MIT.

Ver [ATTRIBUTION.md](./ATTRIBUTION.md) para más detalles.

---

## 👨‍💻 Desarrollo

Si quieres contribuir o desarrollar la librería:

### Scripts disponibles

- `npm run generate:icons` - Regenera componentes desde `cooliocns SVG/**/*.svg`
- `npm run build` - Construye la librería para producción
- `npm run dev` - Modo desarrollo (si tienes una app de ejemplo)
- `npm run test` - Ejecuta tests

### Publicar en NPM

Esta repo incluye un workflow de GitHub Actions que publica en npm cuando se crea una Release en GitHub.

1. Añade el secreto `NPM_TOKEN` en Settings > Secrets del repositorio
2. Crea una Release en GitHub
3. El workflow publicará automáticamente la versión en NPM

O manualmente:

```bash
npm login
npm publish
```
