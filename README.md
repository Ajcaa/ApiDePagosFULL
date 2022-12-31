
Proyecto Unidad 5 - Parte 2
Actividad   |  Semana 1
Tipo de proyecto
Individual o grupal máximo de 2 personas.

Título
API de pagos de servicios - fullstack.

Deadline
Segunda entrega: Jueves 29 de Diciembre 11:59pm.

Observación
Esta segunda parte es la continuación de lo presentado el día Martes 20 de diciembre. Es decir, utilizar API de pago implementada.

Vistas referenciales de diseño: link de Figma.

Funcionalidades a desarrollar
Vistas de CRUD de pagos de los servicios

Login
Vista para el ingreso de los usuarios, este debe ser con email y contraseña.

Guardar token en local storage y únicamente mostrar la vista de login si es que el token no existe o es nulo.

Si el usuario no está logueado no tendrá acceso a las otras vistas.

Para referencia de local storage damos como referencia estos videos desarrollados en el workshop del Prof. Bruno:

Workshop 22 Diciembre
Workshop 23 Diciembre
Vista principal
Diseño Figma - Page: User

Navbar con links a la vista principal y para añadir un nuevo pago. Administrador: Link a servicios
Lista de pagos realizados, cada card o ítem debe contener la siguiente información:
Logo del servicio
Nombre del servicio
Fecha de pago
Monto
Lista de pagos vencidos, cada card o item debe contener la siguiente información:
Logo del servicio
Nombre del servicio
Fecha de pago
Monto
Penalidad
Vista para añadir un nuevo pago
Diseño Figma - Page: User.

Debe contener un forms con los siguientes campos:

Fecha de vencimiento
Servicio (lista desplegable)
Monto
Tomar en cuenta que la fecha de pago al momento de realizar el post, debe ser la fecha actual.
Vista de servicios(únicamente para el administrador)
Diseño Figma - Page: Admin.

Forms de creación de un nuevo servicio:
Nombre del servicio
Prefijo
Url Logo
Forms de modificación de un servicio:
Lista de servicios (lista desplegable)
Nombre del servicio
Prefijo
Url Logo
Consideraciones
Los colores de los pagos realizados y vencidos deben ser distintos.
En la esquina superior derecha, debe aparecer el nombre de usuario en conjunto con un logo estático que pueden elegir según su preferencia, además de el link o botón para el logout.
Las vistas añadidas para el administrador no deben ser visibles para los usuarios normales.
Las fuentes y colores son de libre elección.
La opción de ver más de la vista principal, este indica que ahí deben ir todos los items correspondientes a la sección.
Rúbrica
Cada item a continuación tiene una puntuación de 4 puntos

Uso de bootstrap, sweetalert2.
Implementación de login con local storage.
Uso de JWT en el login y obtención de datos del backend.
Uso de funciones asíncronas.
Implementación del CRUD.



Cuenta admin
correo: alvarojose@correo.com
password: 12345