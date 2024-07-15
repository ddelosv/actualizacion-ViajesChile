# Proyecto: Actualización de la Página Web - Viajes Chile

Este proyecto consiste en la actualización de la página web de la agencia **Viajes Chile**, implementando diversos componentes y estilos aprendidos en el módulo correspondiente.

## Requerimientos

1. **Instalación de Bootstrap**
   - Instalar Bootstrap mediante NPM:

     ```sh
     npm install bootstrap
     ```

2. **Importación de Dependencias con Sass**
   - Importar Bootstrap en el archivo `main.scss`:

     ```scss
     @import "~bootstrap/scss/bootstrap";
     ```

   - Compilar `main.scss` y vincular el CSS compilado en `index.html`.

3. **Agregar Componentes de Bootstrap**
   - **Menú de Navegación**: Barra de navegación fija con logo y links.
   - **Carrusel**: Mostrar imágenes destacadas, con altura de 500px en dispositivos grandes y 300px en dispositivos pequeños.
   - **Cards Destacados**: Cuatro cards horizontales para destinos principales, que se vuelven verticales en pantallas pequeñas.
   - **Formulario de Contacto**.

4. **Uso de la Grilla de Bootstrap**
   - **Sección "Quiénes Somos"**: Columna para la imagen y otra para la descripción, ocultando la imagen en pantallas pequeñas.
   - **Destinos Destacados**: Mostrar las cards en una línea en pantallas grandes y en dos filas en pantallas pequeñas.
   - **Sección de Contacto**: Formulario a la izquierda y datos de contacto a la derecha en dispositivos grandes; en dispositivos pequeños, el formulario arriba de los datos de contacto.

5. **Metodología BEM en la Sección de Testimonios**
   - Crear y aplicar estilos usando BEM en un archivo `.sass` dedicado.

6. **Componentes que Utilizan JavaScript**
   - Importar archivos necesarios para JavaScript.
   - Aplicar tooltips en los labels del formulario.
   - Implementar un modal para términos y condiciones.
   - Simular el envío del formulario mostrando una alerta de éxito.

7. **Modificar Paleta de Colores (Opcional)**
   - Cambiar colores predeterminados de Bootstrap en `variables.scss` usando una paleta de colores de sitios como Color Hunt o Coolors.
