# 🎬 Disney+ Clone (Frontend)

Una aplicación web moderna que recrea la experiencia de usuario y la interfaz gráfica de **Disney+**, desarrollada con **React**, **Redux Toolkit** y **Styled Components**. Permite explorar catálogos interactivos de películas y series, reproducir avances oficiales mediante trailers de YouTube, gestionar listas de favoritos (Watchlist) y autenticarse mediante JWT.

---

## 📌 Tabla de Contenidos

1. [Descripción del Proyecto](#-descripción-del-proyecto)
2. [Herramientas y Tecnologías](#-herramientas-y-tecnologías)
3. [Características y Funcionalidades](#-características-y-funcionalidades)
4. [APIs Integradas](#-apis-integradas)
5. [Estructura del Proyecto](#-estructura-del-proyecto)
6. [Cómo Iniciar el Proyecto](#-cómo-iniciar-el-proyecto)
7. [Scripts Disponibles](#-scripts-disponibles)
8. [Despliegue](#-despliegue)

---

## 📖 Descripción del Proyecto

Este proyecto es una réplica frontend de la plataforma de streaming **Disney+**. Su propósito es ofrecer una experiencia inmersiva y fluida para el usuario final, adoptando los estándares de diseño oficial de la marca:

- Paleta oscura cinematográfica y efectos visuales de alta fidelidad.
- Secciones interactivas de marcas asociadas (Disney, Pixar, Marvel, Star Wars y National Geographic) con efectos hover que reproducen clips de video en tiempo real.
- Navegación completa por catálogos categorizados con carruseles animados y paginación.
- Páginas de detalle dedicadas para cada título con sinopsis, metadatos y reproductor de trailers.
- Sistema de usuarios con autenticación basada en tokens JWT y almacenamiento de listas personalizadas.

---

## 🛠️ Herramientas y Tecnologías

El proyecto fue desarrollado utilizando el ecosistema moderno de JavaScript y React:

### Core & Framework
- **[React](https://reactjs.org/) (v17.0.2)**: Librería principal para la creación de componentes de interfaz.
- **[React Scripts](https://create-react-app.dev/) (v4.0.3)**: Configuración y scripts base de Create React App.

### Gestión de Estado
- **[@reduxjs/toolkit](https://redux-toolkit.js.org/) (v1.6.2)**: Configuración centralizada de stores, reducers y acciones para gestionar el estado de usuario, catálogo de películas/series y errores.
- **[react-redux](https://react-redux.js.org/) (v7.2.6)**: Enlaces para conectar componentes de React con el store de Redux.

### Enrutamiento y Navegación
- **[React Router DOM](https://v5.reactrouter.com/) (v5.2.0)**: Control de rutas del lado del cliente, con implementación de rutas protegidas (`PrivateRoute`) y rutas exclusivas para invitados (`PublicOnlyRoute`).

### Estilos y Diseño
- **[Styled Components](https://styled-components.com/) (v5.2.3)**: Metodología CSS-in-JS para estilizado modular, encapsulado y reutilizable con soporte para props dinámicas.
- **[React Slick](https://react-slick.neostack.com/) & [Slick Carousel](https://kenwheeler.github.io/slick-carousel/)**: Carruseles responsivos y banners promocionales dinámicos.
- **[React Icons](https://react-icons.github.io/react-icons/)**: Biblioteca de íconos para la interfaz (`hi`, `fi`, `cg`, `ri`, `bs`, `md`).

### Peticiones y Autenticación
- **[Axios](https://axios-http.com/) (v0.24.0)**: Cliente HTTP para realizar peticiones REST tanto a TMDB como a la API de autenticación.
- **[jwt-decode](https://github.com/auth0/jwt-decode)**: Decodificación del token JWT en el cliente para extraer la información y roles del usuario autenticado.

### Utilidades y UI Feedback
- **[react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner)**: Indicadores de carga visual durante la obtención asíncrona de datos.
- **[uuid](https://github.com/uuidjs/uuid)**: Generación de identificadores únicos para llaves de renderizado.

---

## ✨ Características y Funcionalidades

### 1. Página de Inicio Promocional (Landing Page)
- Presentación de bienvenida para usuarios no autenticados.
- Banners institucionales con llamadas a la acción (*Subscribe* / *Login*).

### 2. Autenticación y Autorización
- **Registro de usuarios (`/create-account`)**: Formulario con validaciones en tiempo real para nombre completo, formato de correo electrónico, validación de contraseña robusta (mínimo 8 caracteres, mayúsculas, minúsculas y caracteres especiales) y confirmación de contraseña.
- **Inicio de sesión (`/login`)**: Autenticación contra el backend, persistencia de sesión mediante token JWT en `sessionStorage`.
- **Rutas protegidas**: Restricción de acceso a catálogos, detalles, lista de seguimiento y perfil si no hay una sesión activa.
- **Cierre de sesión (`Sign Out`)**: Limpieza de credenciales locales y reinicio del estado global en Redux.

### 3. Catálogo de Películas y Series (`/catalogue-movies` y `/catalogue-series`)
- **Banner Slider**: Carrusel superior dinámico con las películas o series en tendencia más recientes.
- **Selector de Géneros**: Filtro interactivo para consultar títulos por categorías específicas (Acción, Animación, Drama, Ciencia Ficción, etc.).
- **Paginación avanzada**: Paginador numérico con navegación rápida de páginas vecinas y límites controlados.
- **Grid de miniaturas**: Tarjetas de póster con animaciones suaves y estados de carga.

### 4. Hubs de Marcas (Brand Viewers)
- Tarjetas representativas de las franquicias de Disney: **Disney**, **Pixar**, **Marvel**, **Star Wars** y **National Geographic**.
- Al interactuar con el cursor (*hover*), se reproduce un clip de video representativo de cada marca.

### 5. Página de Detalle de Título (`/catalogue-movies/:movieId` y `/catalogue-series/:serieId`)
- Imagen de fondo panorámica (*backdrop*) en alta definición.
- Información detallada: título, fecha de estreno, duración, géneros, puntuación y descripción general.
- **Reproductor de Trailer**: Modal flotante con reproductor incrustado de YouTube para visualizar avances oficiales.
- **Botón de Marcador (Bookmark)**: Permite añadir o remover el título de la lista de seguimiento del usuario con actualización en tiempo real.

### 6. Lista de Seguimiento (`/watch-list`)
- Sección personalizada donde se listan todas las películas y series marcadas por el usuario.
- Sincronización automática con la base de datos a través del endpoint de usuario.

### 7. Perfil de Usuario (`/profile`)
- Vista con los datos del perfil (nombre, correo electrónico y teléfono).

---

## 🌐 APIs Integradas

La aplicación se comunica con dos fuentes de datos principales y un servicio externo de reproducción:

### 1. The Movie Database API (TMDB)
Utilizada para consultar información multimedia, pósters, géneros y videos:
- **Base URL**: `https://api.themoviedb.org/3`
- **Endpoints consumidos**:
  - `GET /genre/movie/list`: Listado de géneros para películas.
  - `GET /genre/tv/list`: Listado de géneros para series.
  - `GET /discover/movie`: Búsqueda de películas con filtros por género y número de página.
  - `GET /discover/tv`: Búsqueda de series con filtros por género y número de página.
  - `GET /movie/{movieId}?append_to_response=videos`: Detalle de película y videos/trailers asociados.
  - `GET /tv/{serieId}?append_to_response=videos`: Detalle de serie y videos/trailers asociados.

### 2. Disney+ Custom Backend API
API encargada de la persistencia de usuarios y sus preferencias:
- **Variable de entorno**: `REACT_APP_DISNEYPLUS_API`
- **Endpoints consumidos**:
  - `POST /login`: Inicio de sesión del usuario; devuelve un token JWT.
  - `POST /sign-up`: Registro de nuevos usuarios; devuelve un token JWT.
  - `PUT /update/user/:id`: Actualización de la lista de reproducción (`watchlist_items`) del usuario.

### 3. YouTube Embed API
- Permite la reproducción de avances oficiales dentro de una ventana modal integrando el iframe con la clave de video obtenida desde TMDB:
  ```
  https://www.youtube.com/embed/{videoId}
  ```

---

## 📁 Estructura del Proyecto

```text
disney-plus-front/
├── public/                 # Archivos estáticos públicos (imágenes, logos, videos de marcas)
├── src/
│   ├── components/         # Componentes reutilizables de UI
│   │   ├── bookmark/       # Botón e interacción para añadir a Watchlist
│   │   ├── custom-routes/  # Rutas protegidas (PrivateRoute, PublicOnlyRoute)
│   │   ├── Details/        # Contenedor de detalles del título
│   │   ├── details-sections/ # Secciones de detalle (Banner, Background, Info)
│   │   ├── Error/          # Mensajes de error en formularios
│   │   ├── Form/           # Formularios de Sign In y Sign Up
│   │   ├── Header/         # Barra superior de navegación y acciones de usuario
│   │   ├── header-items/   # Enlaces del menú y soporte para menú móvil
│   │   ├── image-slider/   # Carrusel Slick de banners principales
│   │   ├── Input/          # Componentes de entrada de texto personalizados
│   │   ├── Loading/        # Spinner de carga
│   │   ├── movie-card/     # Tarjeta individual de película o serie
│   │   ├── movies-container/ # Grilla contenedora de tarjetas
│   │   ├── not-found/      # Vista de error o página no encontrada
│   │   ├── Pagination/     # Componente de paginación numérica
│   │   ├── Select/         # Selector desplegable de géneros
│   │   ├── Video/          # Modal y reproductor iframe de YouTube
│   │   └── Viewers/        # Tarjetas interactivas con videos de Disney, Pixar, etc.
│   ├── const/              # Constantes globales (rutas, regex de validación, URLs de API)
│   ├── domain/             # Vistas principales de la aplicación (páginas)
│   │   ├── Home/           # Landing page de bienvenida
│   │   ├── Movies/         # Catálogo de películas
│   │   ├── Series/         # Catálogo de series
│   │   ├── movie-page/     # Página de detalle de película
│   │   ├── serie-page/     # Página de detalle de serie
│   │   ├── Profile/        # Página de perfil del usuario
│   │   ├── sign-in/        # Vista de inicio de sesión
│   │   ├── sign-up/        # Vista de registro de cuenta
│   │   └── watch-list/     # Vista de lista de favoritos
│   ├── features/           # Slices de Redux Toolkit (user, movie, series, error)
│   ├── global-styles/      # Estilos globales y layouts compartidos
│   ├── services/           # Configuración de Axios y llamadas a endpoints (TMDB)
│   ├── store/              # Configuración del store global de Redux
│   ├── App.js              # Componente principal y carga inicial de géneros
│   └── index.js            # Punto de entrada de la aplicación React
├── .gitignore
├── netlify.toml            # Configuración de redirecciones para despliegue en Netlify
├── package.json
└── README.md
```

---

## 🚀 Cómo Iniciar el Proyecto

### Prerrequisitos
Asegúrate de contar con:
- **Node.js**: Versión `14.x` o `16.x` recomendada (compatible con `react-scripts@4.0.3`).
- **npm** (versión 6 o superior) o **yarn**.

---

### Paso a Paso

1. **Clonar el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd disney-plus-front
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   Crea un archivo `.env` en la raíz del proyecto:
   ```bash
   touch .env
   ```
   Añade la URL base de tu backend de Disney+:
   ```env
   REACT_APP_DISNEYPLUS_API=https://tu-backend-api.com/api/
   ```
   > ℹ️ **Nota**: Si ejecutas el backend localmente, puedes definir:
   > ```env
   > REACT_APP_DISNEYPLUS_API=http://localhost:5000/api/
   > ```
   > *(Asegúrate de incluir la barra diagonal final `/` al final de la URL si tu endpoint lo requiere).*

4. **Iniciar el servidor de desarrollo**:
   ```bash
   npm start
   ```

5. **Abrir en el navegador**:
   Visita en tu navegador web:
   ```text
   http://localhost:3000
   ```

---

## 📜 Scripts Disponibles

En el directorio del proyecto puedes ejecutar:

| Comando | Descripción |
| :--- | :--- |
| `npm start` | Inicia la aplicación en modo desarrollo con recarga en caliente en [http://localhost:3000](http://localhost:3000). |
| `npm run build` | Compila la aplicación optimizada para producción dentro de la carpeta `build`. |
| `npm test` | Ejecuta las pruebas automatizadas con Jest y React Testing Library. |
| `npm run eject` | Expone la configuración interna de Webpack y Babel de Create React App (acción irreversible). |

---

## ☁️ Despliegue

El proyecto incluye el archivo `netlify.toml` con las reglas de redirección necesarias para aplicaciones de una sola página (SPA):

```toml
[[redirects]]
  from = "/*"
  to = "/"
  status = 200
```

Para desplegar en servicios como **Netlify** o **Vercel**:
1. Conecta tu repositorio.
2. Define el comando de compilación: `npm run build`.
3. Especifica el directorio de publicación: `build`.
4. Agrega la variable de entorno `REACT_APP_DISNEYPLUS_API` en el panel de configuración de tu proveedor.
