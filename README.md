# Mi Tiendita Pokémon

E-commerce temático desarrollado como proyecto final del curso de React. Permite recorrer productos, ver detalles, administrar el carrito y completar una compra almacenada en Firebase.

## Funcionalidades

- Catálogo de productos y vista de detalle.
- Filtrado y navegación mediante rutas.
- Selector de cantidades.
- Carrito global con Context API.
- Formulario de checkout con validaciones.
- Registro y consulta de órdenes.
- Alertas de interacción y estados de carga.

## Stack

- React y Create React App
- React Router DOM
- Context API
- Firebase y Firestore
- Formik y Yup
- Sass
- SweetAlert2
- React Icons
- Testing Library

## Organización

- `src/components/`: catálogo, detalle, carrito, formularios y elementos visuales.
- `src/pages/`: inicio, tienda, checkout, órdenes y página informativa.
- `src/context/CartState.js`: estado compartido del carrito.
- `src/firebase.js`: configuración de Firebase.
- `src/utils/firebaseFetching.js`: consultas a la base de datos.

## Ejecución

```bash
npm install
npm start
```

Abrir `http://localhost:3000`.

## Comandos

```bash
npm test
npm run build
```

Para ejecutar el proyecto con otra cuenta, reemplazar la configuración de Firebase y crear las colecciones esperadas.

> Proyecto final educativo realizado para el curso React JS de Coderhouse.