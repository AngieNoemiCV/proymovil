            TECNOLÓGICO NACIONAL DE MÉXICO 
            INSTITUTO TECNOLÓGICO DE COLIMA 
         Ingeniería en Sistemas Computacionales 
         Periodo: Enero – Junio 2024 
         Materia: Desarrollo Movil Híbrido
         Docente: Francisco Cervantes Zambrano 
         Estudiante: Angie Noemi Celestino Valencia-20460159
         
         Villa de Álvarez, Colima; 03 de Junio del 2024

# Proyecto
Aplicacion de desafios matematicos para niños de 6 a 12 años de edad. 

La aplicación móvil es una herramienta educativa que busca mejorar y facilitar el proceso de aprendizaje mediante una interfaz intuitiva y funciones motivadoras, ofreciendo a los usuarios la posibilidad de aprender de manera estructurada y personalizada.

En este readme esta redactado todo lo que necesitamos para iniciar y desarrollar la actividad.


## Tabla de contenido

- [Proyecto](#proyecto)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Instrucciones para la instalación](#instrucciones-para-la-instalación)
  - [Documentación detallada](#documentación-detallada)
      - [Pantallas creadas](#pantallas-creadas)
  - [Configuración de la DB](#configuración-de-la-db)
  - [Enlaces externos](#enlaces-externos)


## Instrucciones para la instalación

 > **IMPORTANTE**
    >
    > Debemos tener instalado y configurado el [ANDROID STUDIO](https://developer.android.com/studio?hl=es-419) para con el emulador verificar la funcionalidad del código y [EXPO](https://www.freecodecamp.org/espanol/news/como-crear-una-aplicacion-android-de-noticias-usando-react-native-y-native-base/) ya que mi proyecto fue creado en expo.

Instalar comando para expo en terminal:
   ```sh
   npm install --global expo-cli
   ```

1. Clonar el repositorio en la máquina local:
   
   ```sh
   git clone https://github.com/AngieNoemiCV/proymovil.git
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd proymovil
   ```
3. Una vez estando dentro debemos instalar todas las dependencias:
   ```sh
   npm i
   ```
4. Instaladas todas las depedencias abrimos Android Studio,  elegimos y encendemos nuestro emulador.

5. Ahora si corremos nuestro proyecto con el siguiente comando:
   ```sh
   npm run android
   ```
   

## Documentación detallada
Se creo una parte de una aplicacion móvil donde niños de educación básica desarrollen desafíos matemáticos, que puedan utilizarla como hobby y así fortalecer su conocimiento, o como herramienta dentro de su institución. Mejorando su rendimiento academico matematico.

Cuál es el problema que soluciona el proyecto?  

Dificultades en el desarrollo de las competencias matemáticas y la dificultad que tienen los niños para comprender, formular y resolver situaciones problémicas matemáticas sencillas, donde se hace uso de las operaciones básicas como: la suma, resta, multiplicación. Situación que ha desencadenado una serie de problemas, entre ellos; bajo rendimiento académico, aumento en la reprobación.

### Pantallas creadas

1.- **Inicio de sesión**: En esta pantalla, el usuario podrá registrarse como nuevo o iniciar sesión si ya está registrado.

2.- **Registro**: En esta pantalla, el usuario se registrará con su nombre, correo electrónico y una contraseña.

3.- Una vez dentro de la aplicación, estarás automáticamente en la pantalla de **inicio**. En esta pantalla se mostrarán los 6 niveles y el usuario podrá elegir a qué nivel ingresar.

4.- La siguiente pantalla es de **estadísticas** donde se muestran los 3 mejores puntajes con la foto de los niños y una lista de otros competidores y sus puntajes.

5.- En la pantalla de **Trofeos**, se muestran los trofeos e insignias ganadas por nivel. Cada nivel tendrá 5 temas.

6.- La siguiente pantalla muestra un **chat** con algún asesor, por si existe alguna duda con algún tema o desafío.

7.- **Foro**: Se muestran comentarios sobre cómo se sintieron durante el desafío, tendrán la opción de reaccionar y comentar cualquier publicación.

8.- **Perfil**: Se muestran las opciones de notificaciones, historial de soluciones, ayuda y soporte, y cerrar sesión.

9.- **Notificaciones**: El usuario podrá observar todas las notificaciones relevantes, sobre si existe un nuevo desafío, algún premium ganado, etc.

10.- **Historial de soluciones**: Mostrará el puntaje obtenido por cada desafío.

11.- **Ayuda y soporte**: Encontrará las preguntas más frecuentes y el contacto de soporte.

12.- **Cerrar sesión** Permitirá al usuario salir de su cuenta y lo enviará directamente al inicio de sesión.

## Configuración de la DB
Yo utilicé [Supabase](https://supabase.com/)  que es una plataforma de backend como servicio (BaaS) que proporciona una solución completa para aplicaciones web y móviles, similar a Firebase. Está basada en PostgreSQL y ofrece funcionalidades como autenticación, almacenamiento de archivos, y bases de datos en tiempo real.

Supabase ofrece una base de datos PostgreSQL que se aloja en la nube. Esto significa que los datos no se almacenan localmente en tu dispositivo o servidor, sino que se almacenan en los servidores de Supabase y son accesibles a través de la red.

Y utilice la API que me dio supabase para poder consultar datos.

## Enlaces externos

- [GitHub](https://github.com/AngieNoemiCV/proymovil.git)
- [Supabase](https://supabase.com/)