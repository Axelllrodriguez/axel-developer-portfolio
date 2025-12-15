# 📧 Configuración del Formulario de Contacto

El formulario de contacto está configurado con **Web3Forms**, un servicio gratuito que envía los mensajes directamente a tu email.

## 🚀 Pasos para activarlo:

### 1. Obtener tu Access Key (GRATIS)

1. Ve a: **https://web3forms.com**
2. Haz clic en "Get Started" o "Create Access Key"
3. Ingresa tu email: **studiohighimpact@gmail.com**
4. Te llegará un email con tu **Access Key** (se ve algo así: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### 2. Configurar el Access Key en tu proyecto

1. Abre el archivo: `client/src/pages/home.tsx`
2. Busca la línea que dice:
   ```tsx
   <input type="hidden" name="access_key" value="TU_WEB3FORMS_ACCESS_KEY" />
   ```
3. Reemplaza `TU_WEB3FORMS_ACCESS_KEY` con tu Access Key real
4. Guarda el archivo

### 3. ¡Listo! 🎉

Ahora cuando alguien complete el formulario:
- ✅ Recibirás un email en: **studiohighimpact@gmail.com**
- ✅ El email incluirá:
  - Nombre del cliente
  - Email del cliente
  - Mensaje completo
  - Fecha y hora

## 📊 ¿Dónde ver los mensajes?

Los mensajes llegarán directamente a tu email **studiohighimpact@gmail.com**

### Panel de Web3Forms (Opcional)

También puedes ver un historial de todos los mensajes en:
- **https://web3forms.com/dashboard**
- Inicia sesión con el mismo email

## 🔧 Características incluidas:

- ✅ Validación de campos (nombre, email y mensaje son obligatorios)
- ✅ Mensajes de confirmación al usuario
- ✅ Manejo de errores
- ✅ Estado de "Enviando..." mientras se procesa
- ✅ Notificaciones toast al enviar

## 🆓 Plan Gratuito:

- 250 mensajes por mes
- Sin límite de formularios
- Sin marca de agua
- 100% gratis para siempre

## 🔄 Alternativas (si prefieres):

### EmailJS (también gratis)
- Más personalizable
- Requiere más configuración
- https://www.emailjs.com

### Formspree
- Muy simple
- 50 mensajes/mes gratis
- https://formspree.io

### Tu propio backend
- Control total
- Requiere servidor y base de datos
- Más complejo de mantener

---

**¿Necesitas ayuda?** 
Escríbeme si tienes algún problema configurando el formulario.
