# 🚀 Guía para subir a GitHub y Vercel

## Paso 1: Crear repositorio en GitHub

1. Ve a GitHub: https://github.com/new
2. Nombre del repositorio: `portfolio-axel-rodriguez` (o el nombre que prefieras)
3. Descripción: "Portfolio profesional con diseño tecnológico"
4. Selecciona: **Public** (para que Vercel pueda acceder gratis)
5. **NO marques** "Initialize with README" (ya tenemos archivos)
6. Haz clic en **Create repository**

## Paso 2: Conectar y subir a GitHub

Una vez creado el repositorio, copia la URL (algo como: `https://github.com/Axelllrodriguez/portfolio-axel-rodriguez.git`)

Luego ejecuta estos comandos en la terminal:

```bash
# Agregar el repositorio remoto
git remote add origin https://github.com/Axelllrodriguez/TU-REPOSITORIO.git

# Subir el código
git branch -M main
git push -u origin main
```

## Paso 3: Desplegar en Vercel

### Opción A: Desde la web (Recomendado - Más fácil)

1. Ve a: https://vercel.com
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en **"Add New"** → **"Project"**
4. Importa tu repositorio de GitHub
5. Configura el proyecto:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

6. Haz clic en **"Deploy"**

### Variables de Entorno (Opcional)

Si necesitas agregar variables de entorno:
- En el dashboard de Vercel, ve a tu proyecto
- Settings → Environment Variables
- Agrega las variables necesarias

## Paso 4: ¡Listo! 🎉

Una vez desplegado:
- ✅ Tu portfolio estará en: `https://tu-proyecto.vercel.app`
- ✅ Cada push a `main` se desplegará automáticamente
- ✅ Vercel te dará un dominio personalizado o puedes usar el tuyo propio

## Comandos útiles para futuras actualizaciones:

```bash
# Cuando hagas cambios:
git add .
git commit -m "Descripción de los cambios"
git push

# Vercel desplegará automáticamente los cambios
```

## Solución de problemas comunes:

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/Axelllrodriguez/TU-REPOSITORIO.git
```

### Error en el build de Vercel
- Verifica que todas las dependencias estén en `package.json`
- Asegúrate que `npm run build` funcione localmente

---

**¿Necesitas ayuda?** Avísame y te guío paso a paso.
