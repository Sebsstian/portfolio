# Portfolio — Sebastián Saavedra

Sitio personal de una página, bilingüe (ES/EN), sin framework ni dependencias.
HTML, CSS y JavaScript planos.

**Producción:** https://sebastian-saavedra-mu.vercel.app

## Estructura

```
index.html          Contenido en español + marcado semántico
css/
  tokens.css        Design tokens: color, tipografía, espaciado
  ...
js/
  i18n.js           Diccionario de traducciones al inglés
  main.js           Interacciones y cambio de idioma
img/
  *.webp            Imágenes optimizadas que se sirven
  *.jpg             Versiones de respaldo
  gen/              Originales sin optimizar (excluidos del despliegue)
vercel.json         Headers de seguridad, CSP y caché
```

## Cómo funciona el bilingüe

El **español vive en el HTML**. El **inglés vive en `js/i18n.js`**, indexado por el atributo
`data-i18n` de cada elemento:

```html
<span data-i18n="edu.lic.title">Licenciado en Áreas de la Ingeniería</span>
```

```js
"edu.lic.title": "Bachelor's Degree in Engineering",
```

> **Regla:** todo cambio de texto se hace en los dos lugares. Editar solo el HTML deja el inglés
> desactualizado sin que se note, porque la página se ve bien en español.

## Desarrollo local

No hay build. Basta con servir la carpeta:

```bash
python3 -m http.server 8000
```

Los headers de seguridad y la CSP los aplica Vercel en producción, no el servidor local.

## Despliegue

**Automático.** El proyecto de Vercel está conectado a este repositorio:

| Acción | Resultado |
|---|---|
| `git push` a `main` | Despliegue a **producción** |
| `git push` a otra rama | Despliegue de **preview** con URL propia |
| Pull request | Preview automático comentado en el PR |

No hace falta correr nada a mano. Para forzar un despliegue sin commit:

```bash
vercel --yes          # preview
vercel --prod --yes   # producción
```

## Seguridad

`vercel.json` define CSP estricta (`script-src 'self'`, sin inline), HSTS, `X-Frame-Options: DENY`,
`nosniff` y `Permissions-Policy` restrictiva. Al agregar scripts o recursos externos hay que
actualizar la CSP o serán bloqueados sin error visible.
