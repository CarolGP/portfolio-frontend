# Portfolio Frontend – Bruno Rodríguez por Carolina García

Aplicación frontend del portfolio profesional de ilustración de Bruno Rodríguez.

La web permite visualizar proyectos e ilustraciones de forma dinámica, además de disponer de un panel de administración privado para gestionar el contenido sin necesidad de modificar el código.

El frontend está desarrollado con React y se conecta a una API REST desplegada en Render.

---

# Descripción del proyecto

Este proyecto es la interfaz pública del portfolio.

Permite:

- mostrar ilustraciones en formato galería
- mostrar proyectos en la sección portfolio
- ampliar imágenes en pantalla completa
- acceder a una página de contacto
- acceder a un panel privado para gestionar contenido
- añadir nuevas imágenes desde el panel admin
- editar o eliminar contenido existente
- cargar contenido dinámicamente desde base de datos

---

# Tecnologías utilizadas

React  
Vite  
React Router  
CSS  
Fetch API  
Cloudinary
Render

---

# Instalación del proyecto

Clonar repositorio: git clone URL_DEL_REPOSITORIO

Entrar en la carpeta del proyecto: cd nombre-del-proyecto

Instalar dependencias: npm install

---

# Variables de entorno

El proyecto utiliza variables de entorno para definir la URL de la API.

Crear archivo `.env` en la raíz del proyecto:

VITE_API_URL=http://localhost:3000

Esta variable permite cambiar fácilmente la URL del backend entre entorno local y producción.

En producción, Render utiliza:

VITE_API_URL=https://nombre-backend.onrender.com

---

# Ejecutar en local

Iniciar servidor de desarrollo: npm run dev

Abrir en navegador: http://localhost:5173

El frontend se conectará al backend local.

---

# Deploy

El frontend está desplegado como Static Site en Render.

---

# Funcionalidades principales

## Gallery

Muestra ilustraciones almacenadas en la base de datos.

Características:

- carga dinámica desde API
- grid responsive
- imágenes ampliables en modal
- distribución visual dinámica
- loading state mientras carga contenido

---

## Portfolio

Muestra proyectos destacados.

Características:

- carga dinámica desde API
- diseño responsive
- imágenes optimizadas

---

## Panel Admin

Permite gestionar contenido sin modificar código.

Funciones:

- login privado
- subida de imágenes
- edición de título y descripción
- eliminación de contenido
- selección de sección (gallery o portfolio)
- actualización automática tras hacer cambios

---

## Navegación

La aplicación utiliza React Router para navegación entre páginas sin recargar el navegador.

Rutas disponibles:

/about

/gallery

/portfolio

/contact

/login

/admin

---

## Responsive design

El diseño se adapta a:

ordenador  
tablet  
móvil  

Incluye:

- menú hamburguesa en móvil
- grid flexible
- tipografía adaptativa
- imágenes responsive

---

## Experiencia de usuario

Loading state mientras se cargan datos  
Botón scroll to top  
Hover en elementos interactivos  
Modal para ampliar imágenes
Favicon

---

# API utilizada

El frontend se conecta al backend mediante:

GET /gallery
GET /portfolio
POST /gallery
PUT /gallery/:id
DELETE /gallery/:id
POST /auth/login

La URL base se define mediante:

import.meta.env.VITE_API_URL

---

# Configuración necesaria para producción

En Render se debe definir:

VITE_API_URL=https://nombre-backend.onrender.com

También se configura una regla de rewrite para permitir navegación con React Router:

Source: /*
Destination: /index.html
Action: Rewrite