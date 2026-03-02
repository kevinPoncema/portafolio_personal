---
title: "10 tips de Git que uso todos los días"
description: "Git puede ser intimidante al principio, pero con estos trucos prácticos tu flujo de trabajo se volverá mucho más eficiente. Comandos esenciales que todo desarrollador debería conocer."
pubDate: 2026-02-01
tags: ["git", "herramientas", "productividad"]
image: "/blog/post2.jpg"
---

## Git: el superpoder del desarrollador

Si hay una herramienta que todo desarrollador debe dominar, esa es Git. Más allá de los básicos (`add`, `commit`, `push`), existe un mundo de comandos que pueden ahorrarte horas de trabajo o salvarte de un desastre.

Aquí van los 10 tips que más uso en mi día a día:

---

## 1. `git stash` — Guarda tu trabajo sin hacer commit

Cuando necesitas cambiar de rama urgente pero tienes cambios sin terminar:

```bash
git stash
git checkout otra-rama
# ... haces lo que necesitas ...
git checkout tu-rama
git stash pop
```

## 2. `git log --oneline --graph` — Visualiza el historial

```bash
git log --oneline --graph --all
```

Te muestra un árbol visual de todas las ramas y commits. Imprescindible para entender el estado del repositorio.

## 3. `git commit --amend` — Edita el último commit

¿Escribiste mal el mensaje del commit? ¿Olvidaste un archivo?

```bash
git add archivo-olvidado.js
git commit --amend -m "Mensaje correcto"
```

⚠️ Solo úsalo en commits que **no hayas publicado** aún.

## 4. `git rebase -i` — Limpia tu historial

Antes de hacer merge a `main`, limpia tus commits de trabajo:

```bash
git rebase -i HEAD~5
```

Puedes combinar commits, reordenarlos o cambiar sus mensajes.

## 5. `git bisect` — Encuentra el commit que rompió todo

Cuando algo se rompe y no sabes cuándo:

```bash
git bisect start
git bisect bad        # El commit actual está roto
git bisect good v1.0  # Este tag funcionaba bien
# Git te irá pidiendo marcar commits como good/bad
```

## 6. `git cherry-pick` — Trae un commit específico

```bash
git cherry-pick abc1234
```

Perfecto cuando quieres traer solo un fix de otra rama sin hacer merge completo.

## 7. `.gitignore` global — Para ignorar archivos en todos tus proyectos

```bash
git config --global core.excludesfile ~/.gitignore_global
```

Añade ahí tus `.DS_Store`, `.env`, carpetas de IDE, etc.

## 8. `git diff --staged` — Revisa antes de hacer commit

```bash
git diff --staged
```

Ver exactamente qué cambios estás a punto de commitear. Ahorra muchos accidentes.

## 9. Alias de Git — Acelera tu flujo

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.lg "log --oneline --graph --all"
```

## 10. Conventional Commits — Mensajes que todos entienden

Adopta este formato para tus commits:

```
feat: añadir autenticación con JWT
fix: corregir error en validación del formulario
docs: actualizar README con instrucciones de instalación
chore: actualizar dependencias
```

---

¿Tienes algún tip de Git favorito que no esté en esta lista? ¡Déjamelo saber!
