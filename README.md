# 2021 Proy2-MensajeSecreto

Hola! Este es el segundo proyecto del año. Encontrarás el vídeos de este proyectos en el canal de [YT](https://www.youtube.com/channel/UCbTXsfGiE_PU32_krMQeusA).

**¡Bienvenida/o al Proy#2: Envía un mensaje secreto a tu crush! ❤️**

## Alcance

Este proyecto consiste en crear una aplicación que encripte tu mensaje secreto y desencripte cuando otra persona acceda a él mediante un enlace, estas son las funcionalidades que implementaremos:

- [ ] Encriptar el mensaje.
- [ ] Generar el link único del mensaje
- [ ] Desencriptar el mensaje.


Para iniciar, puedes clonar cualquiera de las siguientes ramas/branches:

- [**`kit-inicio-css-html`**](https://github.com/the-code-loops/2021-Proy2-MensajeSecreto/tree/kit-inicio-css-html), si estás muy entusiasmado para empezar a codear.   
- [**`kit-inicio-css`**](https://github.com/the-code-loops/2021-Proy2-MensajeSecreto/tree/kit-inicio-css), si te sientes lista/o para crear tu propio html antes de codear.



**IMPORTANTE**: resolveremos este proyecto en Javascript, aquí puedes encontrar el [vídeo]().

## Tus tareas
- [ ] Agrega un `eventListener` al elemento html `form` y crea una función que realice lo siguiente:
- [ ] Mostrar el elemento html con id `#tarjeta-crear` y oculte el elemento html con id `#tarjeta-link`
- [ ] Capturar el mensaje ingresado en el elemento `input`, puedes mostrarlo en la consola para verificar 😉
- [ ] Encriptar el mensaje capturado en base64, utiliza la función `btoa()`,  ref: [mdn](https://developer.mozilla.org/es/docs/Web/API/WindowBase64/Base64_codificando_y_decodificando)
- [ ] Agregar el mensaje encriptado al url actual, utiliza el `#` como unión de estos valores. e.g: `miurl.html#mimensajesecreto`   
   
Luego de que hayas completado la parte de encriptación, es el turno de desencriptar.
- [ ] Obtener el mensaje desde el url, utiliza `windows.location`
- [ ] Validar si existe algún mensaje encriptado luego del `#`
- [ ] Muestra el mensaje obtenido en el elemento `h2`
## Vista previa

- Estructura `html` y estilo con `css`, antes del código:
<br/><br/>
<img src="https://github.com/the-code-loops/2021-Proy2-MensajeSecreto/blob/main/src/proy2-css-html.png" width="460px">
