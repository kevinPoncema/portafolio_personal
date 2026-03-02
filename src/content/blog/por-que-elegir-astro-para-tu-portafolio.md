---
title: "¿Por qué elegí Astro para mi portafolio?"
description: "Astro es un framework moderno que genera sitios ultrarrápidos con cero JavaScript por defecto. Te cuento por qué lo elegí, qué ventajas tiene y cuándo tiene sentido usarlo."
pubDate: 2026-02-20
tags: ["astro", "frontend", "rendimiento"]
image: "/blog/post3.jpg"
---

## El problema con los frameworks actuales

Cuando decidí renovar mi portafolio, me enfrenté a una decisión: ¿qué tecnología usar? Las opciones estaban por todas partes: React, Vue, Next.js, Nuxt, SvelteKit...

Todos son excelentes, pero para un sitio como un portafolio —esencialmente **contenido estático con poca interactividad**— enviar megabytes de JavaScript al cliente parece excesivo. Ahí fue cuando descubrí **Astro**.

## ¿Qué es Astro?

Astro es un framework web moderno que adopta una filosofía de **"Islands Architecture"** (Arquitectura de Islas). Su principio fundamental:

> **Envía cero JavaScript al cliente por defecto.**

Solo el HTML y CSS necesario. Si necesitas interactividad en algún componente, ese componente se vuelve una "isla" que carga su JS de forma aislada.

## Las ventajas que me convencieron

### 🚀 Rendimiento increíble

En PageSpeed Insights, los sitios Astro típicamente obtienen **100/100** en Performance. Para un portafolio, esto importa: los reclutadores y clientes tienen poca paciencia con sitios lentos.

### 📝 Soporte nativo de Markdown

Astro tiene soporte de primera clase para archivos `.md` y `.mdx`. Crear un blog es tan simple como añadir archivos Markdown en una carpeta. No necesitas plugins externos ni configuraciones complejas.

### 🧩 Usa tus componentes favoritos

Lo mejor de Astro: puedes usar componentes de **React, Vue, Svelte, SolidJS** y más, todos en el mismo proyecto. Si ya sabes React, no tienes que aprender una nueva sintaxis de componentes.

### 🎨 Integración con Tailwind

`@astrojs/tailwind` se instala en segundos y funciona perfectamente. El flujo de trabajo con Tailwind + Astro es muy fluido.

### 📦 Build ultraligero

El output de build de Astro es HTML estático optimizado. Puedes deployer en **Netlify, Vercel, GitHub Pages** o cualquier servicio de hosting estático de forma gratuita.

## ¿Cuándo NO usar Astro?

Astro brilla en sitios orientados al **contenido**: portafolios, blogs, landing pages, documentación. Sin embargo, si necesitas:

- Una aplicación web muy interactiva (dashboard, editor en tiempo real)
- Autenticación compleja del lado del cliente
- Estado global compartido entre muchas páginas

...probablemente Next.js o SvelteKit sean mejores opciones.

## Mi experiencia después de usarlo

Después de migrar mi portafolio a Astro, los resultados son claros:

- **Tiempo de carga**: de ~3s a menos de 1s
- **Score de Lighthouse**: 95+ en todas las métricas
- **DX (Developer Experience)**: excelente. El hot reload es instantáneo y los errores son claros

## Conclusión

Para un portafolio personal, Astro es mi recomendación número uno. Es rápido, flexible, tiene soporte nativo para blogs con Markdown, y la curva de aprendizaje es suave si ya sabes HTML/CSS.

Si estás pensando en renovar tu portafolio, dale una oportunidad a Astro. No te arrepentirás.

---

*¿Usas Astro en algún proyecto? Me encantaría conocer tu experiencia.*
