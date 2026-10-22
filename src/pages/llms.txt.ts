import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import serviciosData from '../json/servicios.json';
import portafolioData from '../json/portafolio.json';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://kevinponcedev.xyz';
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  const { meta, hero, servicios } = serviciosData;
  const { sobre_mi, habilidades, proyectos } = portafolioData;

  const content = `# Kevin Ponce — Servicios Comerciales & Portafolio Técnico (llms.txt)

> ${hero.titulo_principal} ${hero.titulo_destacado}. ${hero.subtitulo}
> Sitio Web Comercial: ${siteUrl}/
> Portafolio Técnico & Proyectos: ${siteUrl}/technical
> Blog de Ingeniería: ${siteUrl}/technical/blog

## Información de Contacto
- **WhatsApp Oficial:** Usuario \`kevindponce\` (canal directo en web)
- **Correo Electrónico:** ps12kevin@gmail.com
- **GitHub:** https://github.com/kevinPoncema
- **LinkedIn:** https://www.linkedin.com/in/kevin-david-ponce-machigua-75971a320/
- **Ubicación:** Santander, Cantabria, España (Servicios remotos internacionales)

---

## 1. Servicios Comerciales para Negocios y Empresas (\`/\`)

${servicios
  .map(
    (s) => `### ${s.titulo}
- **Enfoque:** ${s.subtitulo}
- **Descripción:** ${s.descripcion}
- **Puntos clave:**
${s.puntos_clave.map((p) => `  - ${p}`).join('\n')}
`
  )
  .join('\n')}

---

## 2. Stack Tecnológico & Proyectos Técnicos (\`/technical\`)

### Stack Principal
- **Backend:** Laravel (PHP 8+), NestJS, Node.js, Express, CodeIgniter, Python.
- **Frontend:** Vue.js (Vue 3, Composition API), TypeScript, JavaScript, Astro, TailwindCSS, Inertia.js.
- **Bases de Datos & Caché:** PostgreSQL, MySQL, Redis (BullMQ para colas de alta concurrencia).
- **Infraestructura:** Docker, Docker Compose, Swagger/OpenAPI, Cloudflare Pages.
- **IA Local:** Modelos de lenguaje en contenedores Docker mediante Ollama.

### Proyectos Destacados
${proyectos
  .map(
    (p) => `- **${p.titulo}:** ${p.descripcion}
  - Tecnologías: ${p.tecnologias.join(', ')}
  - Repositorio: ${p.github}${
      p.activo_produccion !== false && p.produccion
        ? `\n  - Demo en Producción: ${p.produccion}`
        : ''
    }`
  )
  .join('\n\n')}

---

## 3. Artículos Técnicos del Blog (\`/technical/blog\`)
*Generado automáticamente en tiempo de compilación a partir de la colección de contenidos.*

${sortedPosts
  .map((post) => {
    const date = post.data.pubDate.toISOString().split('T')[0];
    const tags = post.data.tags.map((t) => `#${t}`).join(' ');
    return `- [${post.data.title}](${siteUrl}/technical/blog/${post.slug}) (${date})
  - **Descripción:** ${post.data.description}
  - **Etiquetas:** ${tags}`;
  })
  .join('\n\n')}

---

## Documentación Completa y Artículos Íntegros para Agentes de IA
- Para leer el texto completo de todos los artículos del blog, arquitectura profunda y casos de estudio: ${siteUrl}/llms-full.txt
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
      'X-Robots-Tag': 'all',
    },
  });
};
