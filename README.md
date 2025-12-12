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

- **[Arrow](#arrow)** (70+): Flechas y direcciones
- **[Calendar](#calendar)** (14): Calendarios y relojes
- **[Communication](#communication)** (25): Campanas, chat, correo
- **[Edit](#edit)** (72): Herramientas de edición
- **[Environment](#environment)** (13): Elementos del entorno
- **[File](#file)** (39): Archivos y carpetas
- **[Interface](#interface)** (73): Elementos de interfaz
- **[Media](#media)** (22): Controles multimedia
- **[Menu](#menu)** (16): Menús y navegación
- **[Navigation](#navigation)** (18): Navegación
- **[Shape](#shape)** (6): Formas geométricas
- **[System](#system)** (37): Sistema y dispositivos
- **[User](#user)** (13): Usuarios
- **[Warning](#warning)** (20): Alertas y advertencias




## 📋 Catálogo Visual de Iconos

<h3 id="arrow">Arrow (72 iconos)</h3>

<table>
<tbody>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Circle_Down.svg" width="20" height="20" alt="IconArrowCircleDown" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowCircleDown</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Circle_Down_Left.svg" width="20" height="20" alt="IconArrowCircleDownLeft" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowCircleDownLeft</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Circle_Down_Right.svg" width="20" height="20" alt="IconArrowCircleDownRight" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowCircleDownRight</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Circle_Left.svg" width="20" height="20" alt="IconArrowCircleLeft" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowCircleLeft</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Circle_Right.svg" width="20" height="20" alt="IconArrowCircleRight" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowCircleRight</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Circle_Up.svg" width="20" height="20" alt="IconArrowCircleUp" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowCircleUp</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Circle_Up_Left.svg" width="20" height="20" alt="IconArrowCircleUpLeft" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowCircleUpLeft</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Circle_Up_Right.svg" width="20" height="20" alt="IconArrowCircleUpRight" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowCircleUpRight</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Down_Left_LG.svg" width="20" height="20" alt="IconArrowDownLeftLg" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowDownLeftLg</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Down_Left_MD.svg" width="20" height="20" alt="IconArrowDownLeftMd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowDownLeftMd</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Down_Left_SM.svg" width="20" height="20" alt="IconArrowDownLeftSm" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowDownLeftSm</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Down_LG.svg" width="20" height="20" alt="IconArrowDownLg" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowDownLg</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Down_MD.svg" width="20" height="20" alt="IconArrowDownMd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowDownMd</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Down_Right_LG.svg" width="20" height="20" alt="IconArrowDownRightLg" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowDownRightLg</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Down_Right_MD.svg" width="20" height="20" alt="IconArrowDownRightMd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowDownRightMd</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Down_Right_SM.svg" width="20" height="20" alt="IconArrowDownRightSm" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowDownRightSm</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Down_SM.svg" width="20" height="20" alt="IconArrowDownSm" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowDownSm</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Down_Up.svg" width="20" height="20" alt="IconArrowDownUp" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowDownUp</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Left_LG.svg" width="20" height="20" alt="IconArrowLeftLg" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowLeftLg</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Left_MD.svg" width="20" height="20" alt="IconArrowLeftMd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowLeftMd</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Left_Right.svg" width="20" height="20" alt="IconArrowLeftRight" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowLeftRight</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Left_SM.svg" width="20" height="20" alt="IconArrowLeftSm" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowLeftSm</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Reload_02.svg" width="20" height="20" alt="IconArrowReload02" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowReload02</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Right_LG.svg" width="20" height="20" alt="IconArrowRightLg" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowRightLg</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Right_MD.svg" width="20" height="20" alt="IconArrowRightMd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowRightMd</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Right_SM.svg" width="20" height="20" alt="IconArrowRightSm" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowRightSm</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrows_Reload_01.svg" width="20" height="20" alt="IconArrowsReload01" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowsReload01</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Sub_Down_Left.svg" width="20" height="20" alt="IconArrowSubDownLeft" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowSubDownLeft</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Sub_Down_Right.svg" width="20" height="20" alt="IconArrowSubDownRight" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowSubDownRight</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Sub_Left_Down.svg" width="20" height="20" alt="IconArrowSubLeftDown" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowSubLeftDown</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Sub_Left_Up.svg" width="20" height="20" alt="IconArrowSubLeftUp" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowSubLeftUp</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Sub_Right_Down.svg" width="20" height="20" alt="IconArrowSubRightDown" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowSubRightDown</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Sub_Right_Up.svg" width="20" height="20" alt="IconArrowSubRightUp" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowSubRightUp</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Sub_Up_Left.svg" width="20" height="20" alt="IconArrowSubUpLeft" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowSubUpLeft</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Sub_Up_Right.svg" width="20" height="20" alt="IconArrowSubUpRight" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowSubUpRight</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Undo_Down_Left.svg" width="20" height="20" alt="IconArrowUndoDownLeft" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowUndoDownLeft</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Undo_Down_Right.svg" width="20" height="20" alt="IconArrowUndoDownRight" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowUndoDownRight</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Undo_Up_Left.svg" width="20" height="20" alt="IconArrowUndoUpLeft" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowUndoUpLeft</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Undo_Up_Right.svg" width="20" height="20" alt="IconArrowUndoUpRight" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowUndoUpRight</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Up_Left_LG.svg" width="20" height="20" alt="IconArrowUpLeftLg" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowUpLeftLg</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Up_Left_MD.svg" width="20" height="20" alt="IconArrowUpLeftMd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowUpLeftMd</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Up_Left_SM.svg" width="20" height="20" alt="IconArrowUpLeftSm" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowUpLeftSm</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Up_LG.svg" width="20" height="20" alt="IconArrowUpLg" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowUpLg</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Up_MD.svg" width="20" height="20" alt="IconArrowUpMd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowUpMd</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Up_Right_LG.svg" width="20" height="20" alt="IconArrowUpRightLg" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowUpRightLg</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Up_Right_MD.svg" width="20" height="20" alt="IconArrowUpRightMd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowUpRightMd</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Up_Right_SM.svg" width="20" height="20" alt="IconArrowUpRightSm" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowUpRightSm</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Arrow_Up_SM.svg" width="20" height="20" alt="IconArrowUpSm" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArrowUpSm</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Caret_Circle_Down.svg" width="20" height="20" alt="IconCaretCircleDown" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCaretCircleDown</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Caret_Circle_Left.svg" width="20" height="20" alt="IconCaretCircleLeft" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCaretCircleLeft</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Caret_Circle_Right.svg" width="20" height="20" alt="IconCaretCircleRight" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCaretCircleRight</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Caret_Circle_Up.svg" width="20" height="20" alt="IconCaretCircleUp" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCaretCircleUp</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Caret_Down_MD.svg" width="20" height="20" alt="IconCaretDownMd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCaretDownMd</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Caret_Down_SM.svg" width="20" height="20" alt="IconCaretDownSm" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCaretDownSm</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Caret_Left_SM.svg" width="20" height="20" alt="IconCaretLeftSm" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCaretLeftSm</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Caret_Right_SM.svg" width="20" height="20" alt="IconCaretRightSm" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCaretRightSm</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Caret_Up_MD.svg" width="20" height="20" alt="IconCaretUpMd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCaretUpMd</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Caret_Up_SM.svg" width="20" height="20" alt="IconCaretUpSm" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCaretUpSm</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Chevron_Down.svg" width="20" height="20" alt="IconChevronDown" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChevronDown</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Chevron_Down_Duo.svg" width="20" height="20" alt="IconChevronDownDuo" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChevronDownDuo</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Chevron_Left.svg" width="20" height="20" alt="IconChevronLeft" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChevronLeft</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Chevron_Left_Duo.svg" width="20" height="20" alt="IconChevronLeftDuo" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChevronLeftDuo</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Chevron_Left_MD.svg" width="20" height="20" alt="IconChevronLeftMd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChevronLeftMd</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Chevron_Right.svg" width="20" height="20" alt="IconChevronRight" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChevronRight</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Chevron_Right_Duo.svg" width="20" height="20" alt="IconChevronRightDuo" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChevronRightDuo</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Chevron_Right_MD.svg" width="20" height="20" alt="IconChevronRightMd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChevronRightMd</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Chevron_Up.svg" width="20" height="20" alt="IconChevronUp" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChevronUp</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Chevron_Up_Duo.svg" width="20" height="20" alt="IconChevronUpDuo" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChevronUpDuo</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Expand.svg" width="20" height="20" alt="IconExpand" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconExpand</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Shrink.svg" width="20" height="20" alt="IconShrink" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconShrink</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Unfold_Less.svg" width="20" height="20" alt="IconUnfoldLess" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconUnfoldLess</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Arrow/Unfold_More.svg" width="20" height="20" alt="IconUnfoldMore" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconUnfoldMore</code>
</td>
</tr>
</tbody>
</table>

<h3 id="calendar">Calendar (14 iconos)</h3>

<table>
<tbody>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Calendar/Alarm.svg" width="20" height="20" alt="IconAlarm" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconAlarm</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Calendar/Calendar.svg" width="20" height="20" alt="IconCalendar" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCalendar</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Calendar/Calendar_Add.svg" width="20" height="20" alt="IconCalendarAdd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCalendarAdd</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Calendar/Calendar_Check.svg" width="20" height="20" alt="IconCalendarCheck" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCalendarCheck</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Calendar/Calendar_Close.svg" width="20" height="20" alt="IconCalendarClose" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCalendarClose</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Calendar/Calendar_Days.svg" width="20" height="20" alt="IconCalendarDays" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCalendarDays</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Calendar/Calendar_Event.svg" width="20" height="20" alt="IconCalendarEvent" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCalendarEvent</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Calendar/Calendar_Remove.svg" width="20" height="20" alt="IconCalendarRemove" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCalendarRemove</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Calendar/Calendar_Week.svg" width="20" height="20" alt="IconCalendarWeek" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCalendarWeek</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Calendar/Clock.svg" width="20" height="20" alt="IconClock" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconClock</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Calendar/Timer.svg" width="20" height="20" alt="IconTimer" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTimer</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Calendar/Timer_Add.svg" width="20" height="20" alt="IconTimerAdd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTimerAdd</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Calendar/Timer_Close.svg" width="20" height="20" alt="IconTimerClose" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTimerClose</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Calendar/Timer_Remove.svg" width="20" height="20" alt="IconTimerRemove" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTimerRemove</code>
</td>
<td></td>
</tr>
</tbody>
</table>

<h3 id="communication">Communication (27 iconos)</h3>

<table>
<tbody>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Bell.svg" width="20" height="20" alt="IconBell" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconBell</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Bell_Add.svg" width="20" height="20" alt="IconBellAdd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconBellAdd</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Bell_Close.svg" width="20" height="20" alt="IconBellClose" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconBellClose</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Bell_Notification.svg" width="20" height="20" alt="IconBellNotification" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconBellNotification</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Bell_Off.svg" width="20" height="20" alt="IconBellOff" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconBellOff</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Bell_Remove.svg" width="20" height="20" alt="IconBellRemove" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconBellRemove</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Bell_Ring.svg" width="20" height="20" alt="IconBellRing" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconBellRing</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Chat.svg" width="20" height="20" alt="IconChat" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChat</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Chat_Add.svg" width="20" height="20" alt="IconChatAdd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChatAdd</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Chat_Check.svg" width="20" height="20" alt="IconChatCheck" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChatCheck</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Chat_Circle.svg" width="20" height="20" alt="IconChatCircle" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChatCircle</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Chat_Circle_Add.svg" width="20" height="20" alt="IconChatCircleAdd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChatCircleAdd</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Chat_Circle_Check.svg" width="20" height="20" alt="IconChatCircleCheck" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChatCircleCheck</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Chat_Circle_Close.svg" width="20" height="20" alt="IconChatCircleClose" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChatCircleClose</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Chat_Circle_Dots.svg" width="20" height="20" alt="IconChatCircleDots" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChatCircleDots</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Chat_Circle_Remove.svg" width="20" height="20" alt="IconChatCircleRemove" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChatCircleRemove</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Chat_Close.svg" width="20" height="20" alt="IconChatClose" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChatClose</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Chat_Conversation.svg" width="20" height="20" alt="IconChatConversation" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChatConversation</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Chat_Conversation_Circle.svg" width="20" height="20" alt="IconChatConversationCircle" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChatConversationCircle</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Chat_Dots.svg" width="20" height="20" alt="IconChatDots" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChatDots</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Chat_Remove.svg" width="20" height="20" alt="IconChatRemove" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChatRemove</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Mail.svg" width="20" height="20" alt="IconMail" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMail</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Mail_Open.svg" width="20" height="20" alt="IconMailOpen" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMailOpen</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Paper_Plane.svg" width="20" height="20" alt="IconPaperPlane" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconPaperPlane</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Phone.svg" width="20" height="20" alt="IconPhone" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconPhone</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Share_Android.svg" width="20" height="20" alt="IconShareAndroid" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconShareAndroid</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Communication/Share_iOS_Export.svg" width="20" height="20" alt="IconShareIosExport" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconShareIosExport</code>
</td>
</tr>
</tbody>
</table>

<h3 id="edit">Edit (72 iconos)</h3>

<table>
<tbody>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Add_Column.svg" width="20" height="20" alt="IconAddColumn" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconAddColumn</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Add_Minus_Square.svg" width="20" height="20" alt="IconAddMinusSquare" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconAddMinusSquare</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Add_Plus.svg" width="20" height="20" alt="IconAddPlus" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconAddPlus</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Add_Plus_Circle.svg" width="20" height="20" alt="IconAddPlusCircle" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconAddPlusCircle</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Add_Plus_Square.svg" width="20" height="20" alt="IconAddPlusSquare" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconAddPlusSquare</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Add_Row.svg" width="20" height="20" alt="IconAddRow" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconAddRow</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Add_To_Queue.svg" width="20" height="20" alt="IconAddToQueue" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconAddToQueue</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Bold.svg" width="20" height="20" alt="IconBold" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconBold</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Close_Circle.svg" width="20" height="20" alt="IconCloseCircle" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCloseCircle</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Close_Square.svg" width="20" height="20" alt="IconCloseSquare" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCloseSquare</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Columns.svg" width="20" height="20" alt="IconColumns" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconColumns</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Combine_Cells.svg" width="20" height="20" alt="IconCombineCells" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCombineCells</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Copy.svg" width="20" height="20" alt="IconCopy" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCopy</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Crop.svg" width="20" height="20" alt="IconCrop" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCrop</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Delete_Column.svg" width="20" height="20" alt="IconDeleteColumn" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconDeleteColumn</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Delete_Row.svg" width="20" height="20" alt="IconDeleteRow" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconDeleteRow</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Double_Quotes_L.svg" width="20" height="20" alt="IconDoubleQuotesL" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconDoubleQuotesL</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Double_Quotes_R.svg" width="20" height="20" alt="IconDoubleQuotesR" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconDoubleQuotesR</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Edit_Pencil_01.svg" width="20" height="20" alt="IconEditPencil01" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconEditPencil01</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Edit_Pencil_02.svg" width="20" height="20" alt="IconEditPencil02" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconEditPencil02</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Edit_Pencil_Line_01.svg" width="20" height="20" alt="IconEditPencilLine01" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconEditPencilLine01</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Edit_Pencil_Line_02.svg" width="20" height="20" alt="IconEditPencilLine02" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconEditPencilLine02</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Figma.svg" width="20" height="20" alt="IconFigma" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFigma</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Font.svg" width="20" height="20" alt="IconFont" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFont</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Heading.svg" width="20" height="20" alt="IconHeading" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHeading</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Heading_H1.svg" width="20" height="20" alt="IconHeadingH1" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHeadingH1</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Heading_H2.svg" width="20" height="20" alt="IconHeadingH2" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHeadingH2</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Heading_H3.svg" width="20" height="20" alt="IconHeadingH3" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHeadingH3</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Heading_H4.svg" width="20" height="20" alt="IconHeadingH4" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHeadingH4</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Heading_H5.svg" width="20" height="20" alt="IconHeadingH5" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHeadingH5</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Heading_H6.svg" width="20" height="20" alt="IconHeadingH6" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHeadingH6</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Hide.svg" width="20" height="20" alt="IconHide" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHide</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Italic.svg" width="20" height="20" alt="IconItalic" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconItalic</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Layer.svg" width="20" height="20" alt="IconLayer" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconLayer</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Layers.svg" width="20" height="20" alt="IconLayers" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconLayers</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/List_Add.svg" width="20" height="20" alt="IconListAdd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconListAdd</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/List_Check.svg" width="20" height="20" alt="IconListCheck" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconListCheck</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/List_Checklist.svg" width="20" height="20" alt="IconListChecklist" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconListChecklist</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/List_Ordered.svg" width="20" height="20" alt="IconListOrdered" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconListOrdered</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/List_Remove.svg" width="20" height="20" alt="IconListRemove" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconListRemove</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/List_Unordered.svg" width="20" height="20" alt="IconListUnordered" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconListUnordered</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Mention.svg" width="20" height="20" alt="IconMention" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMention</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Move.svg" width="20" height="20" alt="IconMove" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMove</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Move_Horizontal.svg" width="20" height="20" alt="IconMoveHorizontal" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMoveHorizontal</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Move_Vertical.svg" width="20" height="20" alt="IconMoveVertical" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMoveVertical</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Paperclip_Attechment_Horizontal.svg" width="20" height="20" alt="IconPaperclipAttechmentHorizontal" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconPaperclipAttechmentHorizontal</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Paperclip_Attechment_Tilt.svg" width="20" height="20" alt="IconPaperclipAttechmentTilt" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconPaperclipAttechmentTilt</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Paragraph.svg" width="20" height="20" alt="IconParagraph" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconParagraph</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Path.svg" width="20" height="20" alt="IconPath" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconPath</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Redo.svg" width="20" height="20" alt="IconRedo" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconRedo</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Remove_Minus.svg" width="20" height="20" alt="IconRemoveMinus" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconRemoveMinus</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Remove_Minus_Circle.svg" width="20" height="20" alt="IconRemoveMinusCircle" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconRemoveMinusCircle</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Rows.svg" width="20" height="20" alt="IconRows" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconRows</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Ruler.svg" width="20" height="20" alt="IconRuler" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconRuler</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Select_Multiple.svg" width="20" height="20" alt="IconSelectMultiple" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSelectMultiple</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Show.svg" width="20" height="20" alt="IconShow" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconShow</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Single_Quotes_L.svg" width="20" height="20" alt="IconSingleQuotesL" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSingleQuotesL</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Single_Quotes_R.svg" width="20" height="20" alt="IconSingleQuotesR" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSingleQuotesR</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Sort_Ascending.svg" width="20" height="20" alt="IconSortAscending" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSortAscending</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Sort_Descending.svg" width="20" height="20" alt="IconSortDescending" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSortDescending</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Strikethrough.svg" width="20" height="20" alt="IconStrikethrough" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconStrikethrough</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Swatches_Palette.svg" width="20" height="20" alt="IconSwatchesPalette" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSwatchesPalette</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Table.svg" width="20" height="20" alt="IconTable" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTable</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Table_Add.svg" width="20" height="20" alt="IconTableAdd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTableAdd</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Table_Remove.svg" width="20" height="20" alt="IconTableRemove" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTableRemove</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Text.svg" width="20" height="20" alt="IconText" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconText</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Text_Align_Center.svg" width="20" height="20" alt="IconTextAlignCenter" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTextAlignCenter</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Text_Align_Justify.svg" width="20" height="20" alt="IconTextAlignJustify" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTextAlignJustify</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Text_Align_Left.svg" width="20" height="20" alt="IconTextAlignLeft" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTextAlignLeft</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Text_Align_Right.svg" width="20" height="20" alt="IconTextAlignRight" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTextAlignRight</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Underline.svg" width="20" height="20" alt="IconUnderline" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconUnderline</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Edit/Undo.svg" width="20" height="20" alt="IconUndo" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconUndo</code>
</td>
</tr>
</tbody>
</table>

<h3 id="environment">Environment (13 iconos)</h3>

<table>
<tbody>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Environment/Bulb.svg" width="20" height="20" alt="IconBulb" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconBulb</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Environment/Coffee.svg" width="20" height="20" alt="IconCoffee" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCoffee</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Environment/Coffe_To_Go.svg" width="20" height="20" alt="IconCoffeToGo" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCoffeToGo</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Environment/Cookie.svg" width="20" height="20" alt="IconCookie" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCookie</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Environment/Cupcake.svg" width="20" height="20" alt="IconCupcake" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCupcake</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Environment/First_Aid.svg" width="20" height="20" alt="IconFirstAid" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFirstAid</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Environment/Leaf.svg" width="20" height="20" alt="IconLeaf" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconLeaf</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Environment/Moon.svg" width="20" height="20" alt="IconMoon" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMoon</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Environment/Planet.svg" width="20" height="20" alt="IconPlanet" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconPlanet</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Environment/Puzzle.svg" width="20" height="20" alt="IconPuzzle" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconPuzzle</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Environment/Rainbow.svg" width="20" height="20" alt="IconRainbow" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconRainbow</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Environment/Sun.svg" width="20" height="20" alt="IconSun" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSun</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Environment/Water_Drop.svg" width="20" height="20" alt="IconWaterDrop" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconWaterDrop</code>
</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

<h3 id="file">File (39 iconos)</h3>

<table>
<tbody>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Archive.svg" width="20" height="20" alt="IconArchive" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconArchive</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Cloud.svg" width="20" height="20" alt="IconCloud" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCloud</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Cloud_Add.svg" width="20" height="20" alt="IconCloudAdd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCloudAdd</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Cloud_Check.svg" width="20" height="20" alt="IconCloudCheck" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCloudCheck</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Cloud_Close.svg" width="20" height="20" alt="IconCloudClose" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCloudClose</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Cloud_Download.svg" width="20" height="20" alt="IconCloudDownload" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCloudDownload</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Cloud_Off.svg" width="20" height="20" alt="IconCloudOff" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCloudOff</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Cloud_Remove.svg" width="20" height="20" alt="IconCloudRemove" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCloudRemove</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Cloud_Upload.svg" width="20" height="20" alt="IconCloudUpload" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCloudUpload</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Download_Package.svg" width="20" height="20" alt="IconDownloadPackage" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconDownloadPackage</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/File_Add.svg" width="20" height="20" alt="IconFileAdd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFileAdd</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/File_Blank.svg" width="20" height="20" alt="IconFileBlank" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFileBlank</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/File_Check.svg" width="20" height="20" alt="IconFileCheck" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFileCheck</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/File_Close.svg" width="20" height="20" alt="IconFileClose" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFileClose</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/File_Code.svg" width="20" height="20" alt="IconFileCode" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFileCode</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/File_Document.svg" width="20" height="20" alt="IconFileDocument" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFileDocument</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/File_Download.svg" width="20" height="20" alt="IconFileDownload" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFileDownload</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/File_Edit.svg" width="20" height="20" alt="IconFileEdit" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFileEdit</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/File_Remove.svg" width="20" height="20" alt="IconFileRemove" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFileRemove</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Files.svg" width="20" height="20" alt="IconFiles" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFiles</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/File_Search.svg" width="20" height="20" alt="IconFileSearch" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFileSearch</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/File_Upload.svg" width="20" height="20" alt="IconFileUpload" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFileUpload</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Folder.svg" width="20" height="20" alt="IconFolder" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFolder</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Folder_Add.svg" width="20" height="20" alt="IconFolderAdd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFolderAdd</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Folder_Check.svg" width="20" height="20" alt="IconFolderCheck" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFolderCheck</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Folder_Close.svg" width="20" height="20" alt="IconFolderClose" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFolderClose</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Folder_Code.svg" width="20" height="20" alt="IconFolderCode" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFolderCode</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Folder_Document.svg" width="20" height="20" alt="IconFolderDocument" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFolderDocument</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Folder_Download.svg" width="20" height="20" alt="IconFolderDownload" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFolderDownload</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Folder_Edit.svg" width="20" height="20" alt="IconFolderEdit" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFolderEdit</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Folder_Open.svg" width="20" height="20" alt="IconFolderOpen" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFolderOpen</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Folder_Remove.svg" width="20" height="20" alt="IconFolderRemove" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFolderRemove</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Folders.svg" width="20" height="20" alt="IconFolders" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFolders</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Folder_Search.svg" width="20" height="20" alt="IconFolderSearch" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFolderSearch</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Folder_Upload.svg" width="20" height="20" alt="IconFolderUpload" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFolderUpload</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Note.svg" width="20" height="20" alt="IconNote" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconNote</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Notebook.svg" width="20" height="20" alt="IconNotebook" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconNotebook</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Note_Edit.svg" width="20" height="20" alt="IconNoteEdit" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconNoteEdit</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/File/Note_Search.svg" width="20" height="20" alt="IconNoteSearch" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconNoteSearch</code>
</td>
</tr>
</tbody>
</table>

<h3 id="interface">Interface (73 iconos)</h3>

<table>
<tbody>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Book.svg" width="20" height="20" alt="IconBook" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconBook</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Bookmark.svg" width="20" height="20" alt="IconBookmark" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconBookmark</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Book_Open.svg" width="20" height="20" alt="IconBookOpen" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconBookOpen</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Chart_Bar_Horizontal_01.svg" width="20" height="20" alt="IconChartBarHorizontal01" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChartBarHorizontal01</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Chart_Bar_Vertical_01.svg" width="20" height="20" alt="IconChartBarVertical01" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChartBarVertical01</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Chart_Line.svg" width="20" height="20" alt="IconChartLine" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChartLine</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Chart_Pie.svg" width="20" height="20" alt="IconChartPie" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChartPie</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Check.svg" width="20" height="20" alt="IconCheck" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCheck</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Check_All.svg" width="20" height="20" alt="IconCheckAll" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCheckAll</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Check_All_Big.svg" width="20" height="20" alt="IconCheckAllBig" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCheckAllBig</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Check_Big.svg" width="20" height="20" alt="IconCheckBig" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCheckBig</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Checkbox_Check.svg" width="20" height="20" alt="IconCheckboxCheck" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCheckboxCheck</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Checkbox_Fill.svg" width="20" height="20" alt="IconCheckboxFill" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCheckboxFill</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Checkbox_Unchecked.svg" width="20" height="20" alt="IconCheckboxUnchecked" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCheckboxUnchecked</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Command.svg" width="20" height="20" alt="IconCommand" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCommand</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Credit_Card_01.svg" width="20" height="20" alt="IconCreditCard01" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCreditCard01</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Credit_Card_02.svg" width="20" height="20" alt="IconCreditCard02" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCreditCard02</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Download.svg" width="20" height="20" alt="IconDownload" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconDownload</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Drag_Horizontal.svg" width="20" height="20" alt="IconDragHorizontal" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconDragHorizontal</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Drag_Vertical.svg" width="20" height="20" alt="IconDragVertical" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconDragVertical</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Dummy_Circle.svg" width="20" height="20" alt="IconDummyCircle" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconDummyCircle</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Dummy_Circle_Small.svg" width="20" height="20" alt="IconDummyCircleSmall" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconDummyCircleSmall</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Dummy_Square.svg" width="20" height="20" alt="IconDummySquare" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconDummySquare</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Dummy_Square_Small.svg" width="20" height="20" alt="IconDummySquareSmall" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconDummySquareSmall</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Exit.svg" width="20" height="20" alt="IconExit" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconExit</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/External_Link.svg" width="20" height="20" alt="IconExternalLink" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconExternalLink</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Filter.svg" width="20" height="20" alt="IconFilter" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFilter</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Filter_Off.svg" width="20" height="20" alt="IconFilterOff" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFilterOff</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Gift.svg" width="20" height="20" alt="IconGift" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconGift</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Handbag.svg" width="20" height="20" alt="IconHandbag" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHandbag</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Heart_01.svg" width="20" height="20" alt="IconHeart01" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHeart01</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Heart_02.svg" width="20" height="20" alt="IconHeart02" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHeart02</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Instance.svg" width="20" height="20" alt="IconInstance" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconInstance</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Label.svg" width="20" height="20" alt="IconLabel" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconLabel</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Line_L.svg" width="20" height="20" alt="IconLineL" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconLineL</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Line_M.svg" width="20" height="20" alt="IconLineM" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconLineM</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Line_S.svg" width="20" height="20" alt="IconLineS" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconLineS</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Line_Xl.svg" width="20" height="20" alt="IconLineXl" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconLineXl</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Link.svg" width="20" height="20" alt="IconLink" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconLink</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Link_Break.svg" width="20" height="20" alt="IconLinkBreak" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconLinkBreak</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Link_Horizontal.svg" width="20" height="20" alt="IconLinkHorizontal" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconLinkHorizontal</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Link_Horizontal_Off.svg" width="20" height="20" alt="IconLinkHorizontalOff" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconLinkHorizontalOff</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Link_Vertical.svg" width="20" height="20" alt="IconLinkVertical" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconLinkVertical</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Loading.svg" width="20" height="20" alt="IconLoading" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconLoading</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Lock.svg" width="20" height="20" alt="IconLock" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconLock</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Lock_Open.svg" width="20" height="20" alt="IconLockOpen" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconLockOpen</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Log_Out.svg" width="20" height="20" alt="IconLogOut" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconLogOut</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Magnifying_Glass_Minus.svg" width="20" height="20" alt="IconMagnifyingGlassMinus" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMagnifyingGlassMinus</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Magnifying_Glass_Plus.svg" width="20" height="20" alt="IconMagnifyingGlassPlus" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMagnifyingGlassPlus</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Main_Component.svg" width="20" height="20" alt="IconMainComponent" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMainComponent</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Option.svg" width="20" height="20" alt="IconOption" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconOption</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Radio_Fill.svg" width="20" height="20" alt="IconRadioFill" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconRadioFill</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Radio_Unchecked.svg" width="20" height="20" alt="IconRadioUnchecked" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconRadioUnchecked</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Search_Magnifying_Glass.svg" width="20" height="20" alt="IconSearchMagnifyingGlass" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSearchMagnifyingGlass</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Settings.svg" width="20" height="20" alt="IconSettings" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSettings</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Settings_Future.svg" width="20" height="20" alt="IconSettingsFuture" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSettingsFuture</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Shopping_Bag_01.svg" width="20" height="20" alt="IconShoppingBag01" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconShoppingBag01</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Shopping_Bag_02.svg" width="20" height="20" alt="IconShoppingBag02" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconShoppingBag02</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Shopping_Cart_01.svg" width="20" height="20" alt="IconShoppingCart01" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconShoppingCart01</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Shopping_Cart_02.svg" width="20" height="20" alt="IconShoppingCart02" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconShoppingCart02</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Slider_01.svg" width="20" height="20" alt="IconSlider01" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSlider01</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Slider_02.svg" width="20" height="20" alt="IconSlider02" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSlider02</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Slider_03.svg" width="20" height="20" alt="IconSlider03" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSlider03</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Star.svg" width="20" height="20" alt="IconStar" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconStar</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Suitcase.svg" width="20" height="20" alt="IconSuitcase" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSuitcase</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Swicht_Left.svg" width="20" height="20" alt="IconSwichtLeft" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSwichtLeft</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Swicht_Right.svg" width="20" height="20" alt="IconSwichtRight" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSwichtRight</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Tag.svg" width="20" height="20" alt="IconTag" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTag</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Ticket_Voucher.svg" width="20" height="20" alt="IconTicketVoucher" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTicketVoucher</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Trash_Empty.svg" width="20" height="20" alt="IconTrashEmpty" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTrashEmpty</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Trash_Full.svg" width="20" height="20" alt="IconTrashFull" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTrashFull</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Trending_Down.svg" width="20" height="20" alt="IconTrendingDown" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTrendingDown</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Interface/Trending_Up.svg" width="20" height="20" alt="IconTrendingUp" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTrendingUp</code>
</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

<h3 id="media">Media (22 iconos)</h3>

<table>
<tbody>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Airplay.svg" width="20" height="20" alt="IconAirplay" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconAirplay</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Chromecast.svg" width="20" height="20" alt="IconChromecast" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconChromecast</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Forward.svg" width="20" height="20" alt="IconForward" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconForward</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Headphones.svg" width="20" height="20" alt="IconHeadphones" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHeadphones</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Image_01.svg" width="20" height="20" alt="IconImage01" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconImage01</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Image_02.svg" width="20" height="20" alt="IconImage02" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconImage02</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Pause.svg" width="20" height="20" alt="IconPause" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconPause</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Pause_Circle.svg" width="20" height="20" alt="IconPauseCircle" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconPauseCircle</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Play.svg" width="20" height="20" alt="IconPlay" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconPlay</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Play_Circle.svg" width="20" height="20" alt="IconPlayCircle" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconPlayCircle</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Rewind.svg" width="20" height="20" alt="IconRewind" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconRewind</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Shuffle.svg" width="20" height="20" alt="IconShuffle" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconShuffle</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Skip_Back.svg" width="20" height="20" alt="IconSkipBack" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSkipBack</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Skip_Forward.svg" width="20" height="20" alt="IconSkipForward" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSkipForward</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Stop.svg" width="20" height="20" alt="IconStop" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconStop</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Stop_Circle.svg" width="20" height="20" alt="IconStopCircle" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconStopCircle</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Volume_Max.svg" width="20" height="20" alt="IconVolumeMax" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconVolumeMax</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Volume_Min.svg" width="20" height="20" alt="IconVolumeMin" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconVolumeMin</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Volume_Minus.svg" width="20" height="20" alt="IconVolumeMinus" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconVolumeMinus</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Volume_Off.svg" width="20" height="20" alt="IconVolumeOff" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconVolumeOff</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Volume_Off_02.svg" width="20" height="20" alt="IconVolumeOff02" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconVolumeOff02</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Media/Volume_Plus.svg" width="20" height="20" alt="IconVolumePlus" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconVolumePlus</code>
</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

<h3 id="menu">Menu (16 iconos)</h3>

<table>
<tbody>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Menu/Close_LG.svg" width="20" height="20" alt="IconCloseLg" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCloseLg</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Menu/Close_MD.svg" width="20" height="20" alt="IconCloseMd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCloseMd</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Menu/Close_SM.svg" width="20" height="20" alt="IconCloseSm" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCloseSm</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Menu/Hamburger_LG.svg" width="20" height="20" alt="IconHamburgerLg" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHamburgerLg</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Menu/Hamburger_MD.svg" width="20" height="20" alt="IconHamburgerMd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHamburgerMd</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Menu/Menu_Alt_01.svg" width="20" height="20" alt="IconMenuAlt01" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMenuAlt01</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Menu/Menu_Alt_02.svg" width="20" height="20" alt="IconMenuAlt02" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMenuAlt02</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Menu/Menu_Alt_03.svg" width="20" height="20" alt="IconMenuAlt03" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMenuAlt03</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Menu/Menu_Alt_04.svg" width="20" height="20" alt="IconMenuAlt04" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMenuAlt04</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Menu/Menu_Alt_05.svg" width="20" height="20" alt="IconMenuAlt05" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMenuAlt05</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Menu/Menu_Duo_LG.svg" width="20" height="20" alt="IconMenuDuoLg" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMenuDuoLg</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Menu/Menu_Duo_MD.svg" width="20" height="20" alt="IconMenuDuoMd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMenuDuoMd</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Menu/More_Grid_Big.svg" width="20" height="20" alt="IconMoreGridBig" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMoreGridBig</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Menu/More_Grid_Small.svg" width="20" height="20" alt="IconMoreGridSmall" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMoreGridSmall</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Menu/More_Horizontal.svg" width="20" height="20" alt="IconMoreHorizontal" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMoreHorizontal</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Menu/More_Vertical.svg" width="20" height="20" alt="IconMoreVertical" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMoreVertical</code>
</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

<h3 id="navigation">Navigation (18 iconos)</h3>

<table>
<tbody>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Navigation/Building_01.svg" width="20" height="20" alt="IconBuilding01" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconBuilding01</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Navigation/Building_02.svg" width="20" height="20" alt="IconBuilding02" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconBuilding02</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Navigation/Building_03.svg" width="20" height="20" alt="IconBuilding03" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconBuilding03</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Navigation/Building_04.svg" width="20" height="20" alt="IconBuilding04" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconBuilding04</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Navigation/Car_Auto.svg" width="20" height="20" alt="IconCarAuto" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCarAuto</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Navigation/Compass.svg" width="20" height="20" alt="IconCompass" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCompass</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Navigation/Flag.svg" width="20" height="20" alt="IconFlag" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconFlag</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Navigation/Globe.svg" width="20" height="20" alt="IconGlobe" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconGlobe</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Navigation/House_01.svg" width="20" height="20" alt="IconHouse01" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHouse01</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Navigation/House_02.svg" width="20" height="20" alt="IconHouse02" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHouse02</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Navigation/House_03.svg" width="20" height="20" alt="IconHouse03" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHouse03</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Navigation/House_Add.svg" width="20" height="20" alt="IconHouseAdd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHouseAdd</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Navigation/House_Check.svg" width="20" height="20" alt="IconHouseCheck" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHouseCheck</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Navigation/House_Close.svg" width="20" height="20" alt="IconHouseClose" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHouseClose</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Navigation/House_Remove.svg" width="20" height="20" alt="IconHouseRemove" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHouseRemove</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Navigation/Map.svg" width="20" height="20" alt="IconMap" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMap</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Navigation/Map_Pin.svg" width="20" height="20" alt="IconMapPin" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMapPin</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Navigation/Navigation.svg" width="20" height="20" alt="IconNavigation" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconNavigation</code>
</td>
</tr>
</tbody>
</table>

<h3 id="shape">Shape (6 iconos)</h3>

<table>
<tbody>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Shape/Circle.svg" width="20" height="20" alt="IconCircle" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCircle</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Shape/Octagon.svg" width="20" height="20" alt="IconOctagon" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconOctagon</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Shape/Shield.svg" width="20" height="20" alt="IconShield" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconShield</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Shape/Square.svg" width="20" height="20" alt="IconSquare" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSquare</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Shape/Triangle.svg" width="20" height="20" alt="IconTriangle" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTriangle</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Shape/Wavy.svg" width="20" height="20" alt="IconWavy" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconWavy</code>
</td>
</tr>
</tbody>
</table>

<h3 id="system">System (37 iconos)</h3>

<table>
<tbody>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Bar_Bottom.svg" width="20" height="20" alt="IconBarBottom" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconBarBottom</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Bar_Left.svg" width="20" height="20" alt="IconBarLeft" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconBarLeft</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Bar_Right.svg" width="20" height="20" alt="IconBarRight" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconBarRight</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Bar_Top.svg" width="20" height="20" alt="IconBarTop" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconBarTop</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Camera.svg" width="20" height="20" alt="IconCamera" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCamera</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Code.svg" width="20" height="20" alt="IconCode" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCode</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Cylinder.svg" width="20" height="20" alt="IconCylinder" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCylinder</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Data.svg" width="20" height="20" alt="IconData" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconData</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Desktop.svg" width="20" height="20" alt="IconDesktop" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconDesktop</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Desktop_Tower.svg" width="20" height="20" alt="IconDesktopTower" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconDesktopTower</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Devices.svg" width="20" height="20" alt="IconDevices" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconDevices</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Keyboard.svg" width="20" height="20" alt="IconKeyboard" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconKeyboard</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Laptop.svg" width="20" height="20" alt="IconLaptop" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconLaptop</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Mobile.svg" width="20" height="20" alt="IconMobile" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMobile</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Mobile_Button.svg" width="20" height="20" alt="IconMobileButton" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMobileButton</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Monitor.svg" width="20" height="20" alt="IconMonitor" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMonitor</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Monitor_Play.svg" width="20" height="20" alt="IconMonitorPlay" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMonitorPlay</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Mouse.svg" width="20" height="20" alt="IconMouse" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMouse</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Moving_Desk.svg" width="20" height="20" alt="IconMovingDesk" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconMovingDesk</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Printer.svg" width="20" height="20" alt="IconPrinter" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconPrinter</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Qr_Code.svg" width="20" height="20" alt="IconQrCode" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconQrCode</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Save.svg" width="20" height="20" alt="IconSave" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSave</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Tablet.svg" width="20" height="20" alt="IconTablet" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTablet</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Tablet_Button.svg" width="20" height="20" alt="IconTabletButton" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTabletButton</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Terminal.svg" width="20" height="20" alt="IconTerminal" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTerminal</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Wifi_High.svg" width="20" height="20" alt="IconWifiHigh" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconWifiHigh</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Wifi_Low.svg" width="20" height="20" alt="IconWifiLow" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconWifiLow</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Wifi_Medium.svg" width="20" height="20" alt="IconWifiMedium" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconWifiMedium</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Wifi_None.svg" width="20" height="20" alt="IconWifiNone" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconWifiNone</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Wifi_Off.svg" width="20" height="20" alt="IconWifiOff" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconWifiOff</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Wifi_Problem.svg" width="20" height="20" alt="IconWifiProblem" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconWifiProblem</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Window.svg" width="20" height="20" alt="IconWindow" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconWindow</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Window_Check.svg" width="20" height="20" alt="IconWindowCheck" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconWindowCheck</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Window_Close.svg" width="20" height="20" alt="IconWindowClose" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconWindowClose</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Window_Code_Block.svg" width="20" height="20" alt="IconWindowCodeBlock" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconWindowCodeBlock</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Window_Sidebar.svg" width="20" height="20" alt="IconWindowSidebar" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconWindowSidebar</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/System/Window_Terminal.svg" width="20" height="20" alt="IconWindowTerminal" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconWindowTerminal</code>
</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

<h3 id="user">User (13 iconos)</h3>

<table>
<tbody>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/User/User_01.svg" width="20" height="20" alt="IconUser01" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconUser01</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/User/User_02.svg" width="20" height="20" alt="IconUser02" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconUser02</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/User/User_03.svg" width="20" height="20" alt="IconUser03" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconUser03</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/User/User_Add.svg" width="20" height="20" alt="IconUserAdd" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconUserAdd</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/User/User_Card_ID.svg" width="20" height="20" alt="IconUserCardId" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconUserCardId</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/User/User_Check.svg" width="20" height="20" alt="IconUserCheck" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconUserCheck</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/User/User_Circle.svg" width="20" height="20" alt="IconUserCircle" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconUserCircle</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/User/User_Close.svg" width="20" height="20" alt="IconUserClose" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconUserClose</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/User/User_Remove.svg" width="20" height="20" alt="IconUserRemove" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconUserRemove</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/User/Users.svg" width="20" height="20" alt="IconUsers" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconUsers</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/User/Users_Group.svg" width="20" height="20" alt="IconUsersGroup" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconUsersGroup</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/User/User_Square.svg" width="20" height="20" alt="IconUserSquare" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconUserSquare</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/User/User_Voice.svg" width="20" height="20" alt="IconUserVoice" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconUserVoice</code>
</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

<h3 id="warning">Warning (20 iconos)</h3>

<table>
<tbody>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Warning/Circle_Check.svg" width="20" height="20" alt="IconCircleCheck" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCircleCheck</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Warning/Circle_Help.svg" width="20" height="20" alt="IconCircleHelp" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCircleHelp</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Warning/Circle_Warning.svg" width="20" height="20" alt="IconCircleWarning" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconCircleWarning</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Warning/Help.svg" width="20" height="20" alt="IconHelp" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconHelp</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Warning/Info.svg" width="20" height="20" alt="IconInfo" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconInfo</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Warning/Octagon_Check.svg" width="20" height="20" alt="IconOctagonCheck" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconOctagonCheck</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Warning/Octagon_Help.svg" width="20" height="20" alt="IconOctagonHelp" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconOctagonHelp</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Warning/Octagon_Warning.svg" width="20" height="20" alt="IconOctagonWarning" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconOctagonWarning</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Warning/Shield_Check.svg" width="20" height="20" alt="IconShieldCheck" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconShieldCheck</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Warning/Shield_Warning.svg" width="20" height="20" alt="IconShieldWarning" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconShieldWarning</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Warning/Square_Check.svg" width="20" height="20" alt="IconSquareCheck" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSquareCheck</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Warning/Square_Help.svg" width="20" height="20" alt="IconSquareHelp" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSquareHelp</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Warning/Square_Warning.svg" width="20" height="20" alt="IconSquareWarning" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconSquareWarning</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Warning/Stop_Sign.svg" width="20" height="20" alt="IconStopSign" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconStopSign</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Warning/Triangle_Check.svg" width="20" height="20" alt="IconTriangleCheck" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTriangleCheck</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Warning/Triangle_Warning.svg" width="20" height="20" alt="IconTriangleWarning" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconTriangleWarning</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Warning/Warning.svg" width="20" height="20" alt="IconWarning" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconWarning</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Warning/Wavy_Check.svg" width="20" height="20" alt="IconWavyCheck" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconWavyCheck</code>
</td>
</tr>
<tr>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Warning/Wavy_Help.svg" width="20" height="20" alt="IconWavyHelp" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconWavyHelp</code>
</td>
<td style="padding: 8px; vertical-align: middle;">
<img src="cooliocns SVG/Warning/Wavy_Warning.svg" width="20" height="20" alt="IconWavyWarning" style="vertical-align: middle; margin-right: 8px;" />
<code style="font-size: 0.85em;">IconWavyWarning</code>
</td>
<td></td>
</tr>
</tbody>
</table>

**Total: 442 iconos**


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
