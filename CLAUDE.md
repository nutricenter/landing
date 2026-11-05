# NutriCenter Landing

Landing pública de NutriCenter (`www.nutricenterapp.com`): marketing, SEO y blog para nutricionistas en LATAM.

La app vive en `app.nutricenterapp.com`. Este repo prioriza claridad, velocidad, criterio editorial y cambios simples; no requiere la misma rigurosidad técnica que el frontend de la app.

**Rule:** do not add `Co-Authored-By: Claude` to commits.

## Git — Absolute Rules

- **Never commit directly to `main`.**
- `development` → day-to-day work.
- `main` → production deploy only.
- Push to `main` → GitHub Actions auto-deploys to production.
- **Never commit without explicit user confirmation.** Wait for "yes" or "commit it" before running `git commit`.
- **Never use `git commit --amend`.** Fix mistakes with a new commit.
- **Never `git push --force` to `main` or `development`.**

```bash
git checkout main && git pull
git merge --ff-only development
git push origin main

# If branches diverged:
git checkout main && git pull
git merge development -m "feat|fix|chore: description"
git push origin main

# Sync back after every deploy:
git checkout development && git merge --ff-only main && git push origin development
```

Branch naming: `feat/`, `fix/`, `hotfix/`, `chore/`, `test/`.

**`git add` pathspec trap:** stage deleted and modified files separately, or verify with `git status` before committing.

## Producto

NutriCenter es un SaaS de gestión clínica para nutricionistas en LATAM: pacientes, historial clínico, agenda, mediciones, planes alimenticios, alimentos, recetas, plantillas e integración opcional con Google Calendar.

No inventar funcionalidades que no existan.

## Nombre y marca

- La marca es **NutriCenter** (así, con C mayúscula). El nombre anterior del producto no se usa en ningún texto, URL, metadata ni código.
- Dominio: `nutricenterapp.com` → landing en `www.`, app en `app.`, API en `api.`. Correo: `contacto@nutricenterapp.com`.
- `app` es solo parte del dominio, nunca del slug: identificadores técnicos en kebab-case como `nutricenter-landing`, no `nutricenter-app-landing`. El repo en GitHub es `nutricenter/landing`, porque la organización ya pone el prefijo.
- Usar `SITE_URL` y `APP_URL` de `lib/config.ts` en lugar de escribir el dominio a mano cuando sea posible.

## Voz Editorial

Escribir en español latinoamericano, claro, profesional y cercano.

Tono:

- práctica y directa
- útil para nutricionistas independientes o centros pequeños
- enfocada en problemas reales de consulta
- confiable sin sonar demasiado académica
- comercial solo cuando tenga sentido

Evitar:

- promesas exageradas
- afirmaciones médicas fuertes sin sustento
- tono de venta agresivo
- relleno genérico de marketing
- cifras, estudios o datos inventados

NutriCenter debe aparecer como solución natural, no como interrupción publicitaria.

## Blog

Los artículos viven en `content/blog/*.mdx`.

Frontmatter obligatorio:

```mdx
---
title: "Título del artículo"
description: "Descripción corta para SEO y listado."
date: "YYYY-MM-DD"
---
```

Portada opcional:

```mdx
image: "/images/blog/<slug>.webp"
imageAlt: "Descripción breve de lo que muestra la imagen"
```

- Las portadas viven en `public/images/blog/` y se nombran con el slug del post.
- Formato 16:9, idealmente 1600×900 px, en `.webp` o `.jpg`, liviana (menos de 300 KB).
- Sin `image`, la card y el post muestran un placeholder con la marca. Sin `imageAlt`, se usa el título.
- La portada también se usa como imagen al compartir el post en redes y en el Schema.org del artículo.

Reglas:

- El slug sale del nombre del archivo.
- No agregar `readingTime`; se calcula automáticamente.
- Usar títulos claros, buscables y naturales.
- Escribir para búsquedas reales de nutricionistas en LATAM.
- Estructura recomendada: problema, contexto, recomendaciones y cierre.
- Cerrar con mención breve a NutriCenter y CTA suave hacia `https://app.nutricenterapp.com/register`.
- Verificar datos, normas, estudios o recomendaciones clínicas específicas antes de escribirlos.

## SEO Mínimo

- En posts, cuidar `title` y `description`.
- El blog y sitemap se actualizan automáticamente.
- En páginas nuevas, agregar `metadata` básica y canonical con `https://www.nutricenterapp.com`.

## Código

- Usar Tailwind y los tokens definidos en `app/globals.css`.
- Usar `lib/config.ts` para URLs de la app en componentes.
- Solo usar `"use client"` cuando haga falta estado o eventos.
- Para cambios en TS/TSX, correr `npm run lint` cuando sea razonable.
