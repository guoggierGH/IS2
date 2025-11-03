Esta sección describe cómo usar la app en el dispositivo/emulador y qué esperar en cada pantalla.

1. Pantalla principal — Lista de productos
   - Al abrir la app se muestra la lista de productos disponibles.
   - Cada tarjeta muestra imagen, título, descripción corta y precio.
   - Tocar una tarjeta abre la pantalla de detalle del producto.
   - Botón "Crear producto" en el header abre el formulario para añadir un nuevo producto.

2. Crear un producto
   - Desde la lista, pulsá el texto/botón "Crear producto" en el header.
   - Completá los campos:
     - Título (obligatorio)
     - Descripción (obligatorio)
     - Precio (obligatorio, numérico, > 0)
     - Imagen (URL, obligatoria)
   - Presioná "Crear producto".
   - Si la validación falla se mostrará un mensaje indicando los campos faltantes.
   - Al crearse correctamente verás una alerta de éxito y volverás a la lista (la lista se recarga).

3. Ver detalle de un producto
   - En la pantalla de detalle verás la imagen en grande, título, descripción completa y precio.
   - Desde detalle podés:
     - Editar: abre el formulario con los datos ya cargados.
     - (Si implementado) Eliminar: confirmación antes de eliminar y volver a la lista.

4. Editar un producto
   - El formulario de edición funciona igual que el de creación, pero con campos precargados.
   - Modificá los valores y presioná "Guardar" o el texto configurado; la app validará los campos.
   - Al guardar con éxito verás una alerta y volverás al detalle o a la lista según la implementación.

5. Validaciones y comportamiento esperado
   - Todos los campos marcados como obligatorios deben completarse para enviar.
   - Precio debe ser un número > 0; el input acepta solo valores numéricos.
   - Imagen debe ser una URL válida accesible desde el dispositivo para que la vista pueda cargarla.
   - Si falla la llamada a la API (crear/editar/borrar), la app muestra una alerta de error y mantiene la pantalla para reintentar.

6. Navegación
   - La app utiliza un Stack Navigator: las rutas registradas son (ejemplos de name):
     - ListaProductosScreen (pantalla inicial)
     - DetalleProductoScreen
     - CrearProductoScreen
     - EditarProductoScreen
   - Usá back (flecha del header o botón físico) para volver a la pantalla anterior.

7. Recomendaciones de uso
   - Conexión: asegurar conexión a Internet para operaciones que llaman a la API.
   - URLs de imagen: preferir imágenes públicas (https) para evitar problemas de carga por CORS/HTTP.
   - Formato de precio: ingresar con punto decimal cuando corresponda (ej. 10.50).
   - Recarga: al volver desde creación/edición la lista se recarga automáticamente si la pantalla está enfocada.

8. Mensajes y alertas
   - Éxitos: alertas informan creación/edición correcta.
   - Errores: alertas con texto genérico; revisar consola si necesitás detalles del error.

9. Comportamiento en desarrollo
   - Si no ves cambios, reiniciar Metro bundler o limpiar cache:
     - En terminal del proyecto: npx react-native start --reset-cache
   - Para compilar en Android en Windows:
     - npx react-native run-android