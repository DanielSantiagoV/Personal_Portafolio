# 🚀 Portafolio Personal - Daniel Vinasco

<p align="center"> 
  <img src="https://media.tenor.com/_RV0ePCjeZ4AAAAi/pepe-meme.gif" width="300"/> 
</p>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

## 📋 Descripción

Portafolio personal interactivo y moderno desarrollado con tecnologías web modernas. Este proyecto presenta mis habilidades como desarrollador, incluyendo proyectos destacados, experiencia técnica y información de contacto. El sitio cuenta con efectos visuales avanzados, animaciones 3D, partículas interactivas y soporte multiidioma.

## ✨ Características Principales

### 🎨 **Diseño y UX**
- **Diseño Responsivo**: Adaptable a todos los dispositivos (móvil, tablet, desktop)
- **Tema Oscuro/Claro**: Toggle para cambiar entre modos de visualización
- **Animaciones Fluidas**: Transiciones suaves y efectos de scroll reveal
- **Partículas Interactivas**: Fondo animado con partículas que responden al mouse
- **Modelo 3D**: Avatar 3D interactivo usando Three.js

### 🌍 **Internacionalización**
- **Soporte Multiidioma**: Español e Inglés
- **Detección Automática**: Detecta el idioma del navegador
- **Cambio Dinámico**: Switcher de idiomas en tiempo real

### 🎯 **Funcionalidades**
- **Navegación Suave**: Scroll suave entre secciones
- **Tour Guiado**: Tutorial interactivo para nuevos visitantes
- **Formulario de Contacto**: Integración con email
- **Enlaces Sociales**: LinkedIn, GitHub, Discord, WhatsApp
- **Descarga de CV**: Acceso directo al currículum en PDF

## 🛠️ Tecnologías Utilizadas

### **Frontend**
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos avanzados con Flexbox y Grid
- **JavaScript ES6+**: Funcionalidad interactiva moderna
- **SCSS**: Preprocesador CSS para mejor organización

### **Librerías y Frameworks**
- **Three.js**: Renderizado 3D y modelos interactivos
- **Particles.js**: Efectos de partículas en el fondo
- **ScrollReveal**: Animaciones al hacer scroll
- **Driver.js**: Tour guiado interactivo
- **i18next**: Internacionalización y localización

### **Herramientas de Desarrollo**
- **Vite**: Build tool y servidor de desarrollo
- **Git**: Control de versiones
- **VS Code**: Editor de código

## 📁 Estructura del Proyecto

```
Personal_Portafolio/
├── assets/
│   ├── css/
│   │   └── styles.css          # Estilos principales
│   ├── js/
│   │   ├── main.js            # Lógica principal
│   │   ├── 3d-model.js        # Configuración del modelo 3D
│   │   ├── particles.js       # Configuración de partículas
│   │   ├── i18n.js           # Configuración de idiomas
│   │   └── tour.js           # Tour guiado
│   ├── languages/
│   │   ├── es.json           # Traducciones en español
│   │   └── en.json           # Traducciones en inglés
│   ├── img/                  # Imágenes del proyecto
│   ├── icons/                # Iconos de banderas
│   ├── models/               # Modelos 3D
│   └── pdf/                  # Documentos PDF
├── public/
│   └── vite.svg
├── index.html                # Página principal
├── package.json              # Dependencias del proyecto
└── README.md                 # Este archivo
```

## 🚀 Instalación y Configuración

### **Prerrequisitos**
- Node.js (versión 16 o superior)
- npm o yarn

### **Pasos de Instalación**

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/DanielSantiagoV/Personal_Portafolio.git
   cd Personal_Portafolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

5. **Previsualizar build de producción**
   ```bash
   npm run preview
   ```

## 🎯 Secciones del Portafolio

### **🏠 Inicio (Home)**
- Presentación personal con nombre y título
- Botones de contacto y descarga de CV
- Enlaces a redes sociales
- Avatar 3D interactivo

### **👨‍💻 Acerca de (About)**
- Descripción personal y profesional
- Información sobre experiencia y formación
- Fotografía personal

### **🛠️ Habilidades (Skills)**
- **Frontend**: HTML5, CSS3, JavaScript, Tailwind, Bootstrap
- **Backend**: Node.js, Express, Python
- **Bases de Datos**: MySQL, PostgreSQL, MongoDB
- **Herramientas**: Git, GitHub, VS Code, Linux

### **💼 Proyectos (Projects)**
1. **Leahh Social Web**: Portafolio interactivo con efectos visuales
2. **Daniel Music Player**: Reproductor de música web con controles avanzados
3. **Maison du Pain**: Sistema de gestión para panaderías en Python

### **📞 Contacto (Contact)**
- Formulario de contacto funcional
- Información de contacto directo
- Enlaces a redes sociales y WhatsApp

## 🎨 Personalización

### **Cambiar Colores del Tema**
Edita las variables CSS en `assets/css/styles.css`:
```css
:root {
  --first-color: #7b2cbf;    /* Color principal */
  --second-color: #f72585;   /* Color secundario */
  --text-color: #333;        /* Color de texto */
}
```

### **Agregar Nuevos Proyectos**
1. Añade la imagen del proyecto en `assets/img/`
2. Actualiza la sección de proyectos en `index.html`
3. Agrega las traducciones en `assets/languages/`

### **Configurar Partículas**
Modifica `assets/js/particles.js` para cambiar:
- Número de partículas
- Colores y formas
- Velocidad y comportamiento

## 📱 Responsive Design

El portafolio está optimizado para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🌐 Despliegue

### **GitHub Pages**
1. Haz push del código a tu repositorio
2. Ve a Settings > Pages
3. Selecciona la rama main como fuente
4. El sitio estará disponible en `https://tuusuario.github.io/Personal_Portafolio`

### **Netlify**
1. Conecta tu repositorio de GitHub
2. Configura el build command: `npm run build`
3. Establece el publish directory: `dist`
4. Despliega automáticamente

### **Vercel**
1. Importa el proyecto desde GitHub
2. Vercel detectará automáticamente Vite
3. Despliega con un clic

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Daniel Santiago Vinasco**
- 🌐 Website: [Portafolio](https://danielsantiagov.github.io/Personal_Portafolio/)
- 💼 LinkedIn: [daniel-vinasco](https://www.linkedin.com/in/daniel-vinasco/)
- 🐙 GitHub: [DanielSantiagoV](https://github.com/DanielSantiagoV)
- 📧 Email: vinascodaniel9@gmail.com

## 🙏 Agradecimientos

- [Three.js](https://threejs.org/) - Librería de gráficos 3D
- [Particles.js](https://vincentgarreau.com/particles.js/) - Efectos de partículas
- [ScrollReveal](https://scrollrevealjs.org/) - Animaciones de scroll
- [Driver.js](https://driverjs.dev/) - Tour guiado
- [i18next](https://www.i18next.com/) - Internacionalización
- [Boxicons](https://boxicons.com/) - Iconos
- [Font Awesome](https://fontawesome.com/) - Iconos adicionales

## 📊 Estadísticas del Proyecto

- **Líneas de Código**: ~2,500+
- **Tecnologías**: 15+
- **Idiomas Soportados**: 2
- **Secciones**: 5
- **Proyectos Destacados**: 3

---

⭐ **¡Si te gusta este proyecto, no olvides darle una estrella!** ⭐