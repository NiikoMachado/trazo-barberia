# Tu primera demo: de la carpeta al enlace

**Proyecto:** Negocio IA | De 0 a USD 500  
**Resultado:** una demostración profesional que podés mostrar a posibles clientes.  
**Presupuesto adicional:** USD 0 para esta demo, usando tu acceso actual a ChatGPT, VS Code y GitHub Free con un repositorio público.  
**Tiempo sugerido:** una sesión de 60–90 minutos. Es una estimación para aprender, editar y publicar, no un límite.

La página ya está construida. Tu trabajo en esta primera sesión es abrirla, entender sus tres archivos principales, hacer un cambio pequeño y conseguir tu enlace público. No necesitás dominar todo el código para empezar.

## 1. Prepará la carpeta — 5 minutos

1. Descargá `trazo-barberia.zip`.
2. Descomprimilo: en Mac, doble clic sobre el ZIP; en Windows, clic derecho → **Extraer todo**.
3. Guardá la carpeta `trazo-barberia` en un lugar fácil de encontrar, por ejemplo Documentos.
4. Entrá a esa carpeta. Tenés que ver `index.html`, `styles.css`, `script.js`, `assets` y esta guía.
5. Abrí `index.html` con Chrome, Safari, Edge o Firefox. Si se abre en el editor, usá clic derecho → **Abrir con** → tu navegador.

**Comprobación:** debería aparecer TRAZO, con fondo oscuro, acentos lima y una foto de un corte de pelo. Abrí el archivo descomprimido, no el que está dentro del ZIP.

El sitio funciona sin conexión, salvo los enlaces externos. Al intentar copiar el mensaje desde un archivo local, el navegador puede pedir permiso o impedir el acceso al portapapeles: la página selecciona el texto para que lo copies manualmente.

## 2. Abrí el proyecto en VS Code — 5 minutos

Si ya usás VS Code para Programación 1, podés usar la misma instalación.

1. Abrí VS Code. Si no lo tenés, descargalo desde https://code.visualstudio.com/.
2. Elegí **File → Open Folder** / **Archivo → Abrir carpeta**.
3. Seleccioná `trazo-barberia` y abrila.
4. En la barra de la izquierda vas a ver los archivos. Hacé clic en `index.html`.

Mantené VS Code y tu navegador abiertos. Editás en VS Code, guardás y recargás el navegador. Esta versión no necesita extensiones, Node.js ni una terminal.

## 3. Entendé qué hace cada archivo — 10 minutos

| Archivo | Pensalo así | Ejemplo de cambio |
| --- | --- | --- |
| `index.html` | La estructura y el contenido. | Cambiar un título, un precio o un horario. |
| `styles.css` | La apariencia. | Cambiar el color lima o el espacio entre secciones. |
| `script.js` | Las acciones. | Abrir el menú o preparar una consulta. |
| `assets/` | Los recursos visuales. | Fotografías y tipografías. |

HTML usa etiquetas. Por ejemplo, `<h1>` marca el título principal y `<p>` un párrafo. CSS selecciona elementos y define su aspecto. JavaScript responde a acciones, como pulsar un botón.

Los comentarios del código explican las secciones. En HTML se ven como `<!-- comentario -->`; en CSS y JavaScript, como `/* comentario */`.

## 4. Hacé tu primer cambio — 10 minutos

Empecemos con algo pequeño y visible.

1. En VS Code, abrí `index.html`.
2. Buscá `Un buen corte cambia el día.` con **Cmd+F** en Mac o **Ctrl+F** en Windows.
3. Reemplazá solo esa frase por `Tu próximo look empieza acá.`. Mantené las etiquetas que la rodean.
4. Guardá con **Cmd+S** o **Ctrl+S**.
5. Volvé al navegador y recargá la página.

**Comprobación:** cambió el texto, pero se mantuvo el diseño.

Si querés ensayar un cambio de color, abrí `styles.css`, buscá `--accent: #d5f478;` y probá otro color claro. Esa variable alimenta los botones y detalles de la página. Conservá suficiente contraste entre el fondo y las letras. Podés deshacer con Cmd+Z o Ctrl+Z.

### Cómo usar ChatGPT mientras aprendés

Compartí el archivo o pegá la parte relevante del código y pedí un cambio por vez. Estas son buenas tareas para continuar:

- Pedime que te explique una sección de `index.html`, indicando qué se ve en pantalla.
- Pedime cambiar un color concreto y mostrarte el valor que debés reemplazar.
- Mandame una captura si algo se rompe y contame qué archivo modificaste.
- Pedime explicar `setMenuOpen` de `script.js`, paso por paso, comparándolo con una función en Pascal.

Conservá una copia del ZIP original: te permite recuperar la versión inicial.

## 5. Revisá la demo — 10 minutos

1. Tocá **Servicios**: debe desplazarse a los precios.
2. Elegí **Elegir combo**: se abre la consulta con **Corte + barba** seleccionado.
3. Cambiá el servicio a **Barba**: el mensaje debe actualizarse.
4. Probá **Copiar consulta**. La página informa si lo copió o si debés hacerlo manualmente.
5. Cerrá la ventana con la cruz y luego probá cerrarla con Escape.
6. Achicá la ventana del navegador. Deben aparecer un botón **Menú** y las secciones en una columna cuando el ancho es pequeño.
7. Navegá con Tab: los enlaces y botones deben mostrar un contorno visible.

**Esto es una simulación.** Ninguna consulta se envía a WhatsApp y no se confirma ningún turno. El barrio en Google Maps es real; TRAZO no tiene un domicilio real. No presentes las fotos como trabajos tuyos o de un cliente.

## 6. Creá un repositorio en GitHub — 10 minutos

Un repositorio es una carpeta del proyecto en GitHub con historial de cambios. Primero guardamos ahí los archivos; después GitHub Pages los convierte en una web pública.

1. Entrá a https://github.com/ y usá una cuenta gratuita. Si creás una cuenta, verificá tu correo.
2. Abrí https://github.com/new.
3. En **Repository name**, escribí `trazo-barberia`.
4. Como descripción podés poner: `Demo de portfolio: barbería ficticia con HTML, CSS y JavaScript.`
5. Elegí **Public**. GitHub Pages está disponible gratis en repositorios públicos.
6. Activá **Add README** para que se cree la rama inicial.
7. Pulsá **Create repository**.

El código y la página serán públicos. Esta demo solo contiene datos de ejemplo; no agregues contraseñas, tokens ni información privada.

## 7. Subí los archivos — 5 minutos

1. En la página de tu repositorio, elegí **Add file → Upload files**.
2. Abrí la carpeta `trazo-barberia` en Finder o en el Explorador.
3. Seleccioná **su contenido**: `index.html`, `styles.css`, `script.js`, la carpeta `assets` y los archivos `.md`.
4. Arrastrá esos elementos a la zona de subida de GitHub.
5. Revisá que `index.html` esté directamente en la raíz y que exista `assets/fonts`. No subas el ZIP ni una carpeta extra que encierre todo el proyecto.
6. Escribí un mensaje breve para el guardado: `Agregar primera demo de TRAZO`.
7. En tu repositorio personal, elegí guardar directamente en `main` y pulsá **Commit changes**. Un commit es un guardado con descripción dentro del historial. Si la interfaz te propone una rama nueva, finalizá su solicitud de incorporación para que los archivos queden en `main`.

**Comprobación:** en la pestaña **Code** deben verse `index.html`, `styles.css`, `script.js` y `assets` al mismo nivel. El README de la demo puede reemplazar el README inicial.

## 8. Activá GitHub Pages — 5 minutos, más la publicación

1. Dentro de tu repositorio, abrí **Settings**.
2. En el menú lateral, elegí **Pages**.
3. En **Build and deployment → Source**, elegí **Deploy from a branch**.
4. En **Branch**, elegí `main`.
5. En la carpeta, elegí `/(root)`.
6. Pulsá **Save**.
7. Esperá a que se publique; GitHub indica que los cambios pueden tardar hasta 10 minutos.
8. Volvé a **Settings → Pages** y abrí **Visit site** cuando aparezca.

La dirección tendrá esta forma, reemplazando `TU-USUARIO` por tu usuario real:

`https://TU-USUARIO.github.io/trazo-barberia/`

Es un formato de ejemplo, no un enlace ya publicado. No hace falta comprar un dominio. Copiá el enlace real que te da GitHub y abrilo en tu celular.

Para esta web estática, publicar desde la rama es suficiente. No necesitás escribir un proceso de compilación ni un archivo de automatización.

## 9. Cómo mostrarla a un posible cliente

En una demostración breve:

1. Aclará que es una barbería ficticia de tu portfolio.
2. Mostrá cómo se ven los servicios y los precios desde un celular.
3. Elegí un servicio y mostrá la consulta simulada.
4. Explicá qué adaptarías a su negocio: marca, fotos autorizadas, servicios, horarios, ubicación y contacto real.
5. Preguntá si esa organización de la información le sería útil.

Esta muestra demuestra presentación y facilidad de contacto; no demuestra resultados de ventas ni una agenda de reservas. No promete pagos, cupos disponibles o recordatorios automáticos.

**Misión cumplida cuando:** tenés un enlace público, lo probaste en tu celular y podés explicar qué hace cada sección.

## 10. Cómo actualizarla después

1. Modificá el archivo correspondiente en VS Code.
2. Guardá y probá el cambio en el navegador.
3. En GitHub, usá **Add file → Upload files** y subí los archivos modificados al mismo lugar, conservando sus nombres.
4. Hacé un commit con una descripción como `Actualizar texto de portada`.
5. Esperá la nueva publicación y recargá el enlace de GitHub Pages.

Si en el futuro editás un archivo dentro de `assets`, preservá esa carpeta al subirlo o abrila en GitHub antes de cargarlo.

## Si algo no sale

| Qué ves | Qué revisar |
| --- | --- |
| Texto sin diseño | `styles.css` debe estar junto a `index.html`, con ese nombre exacto. |
| Fotos que no aparecen | Subí la carpeta `assets` completa. Los nombres distinguen mayúsculas y minúsculas. |
| Un 404 en GitHub Pages | Confirmá `main`, `/(root)` e `index.html` en la raíz. Esperá la publicación. |
| Una página que solo muestra el README | Falta `index.html` en la raíz publicada o lo subiste dentro de otra carpeta. |
| No aparece `main` | Primero creá un README o subí un archivo para tener una rama. |
| No aparecen tus cambios | Guardá en VS Code, subí el archivo correcto, esperá la publicación y recargá. |
| El botón de copiar selecciona el texto | Usá Cmd+C, Ctrl+C o la opción Copiar. Es la alternativa cuando el navegador no permite usar el portapapeles. |
| El menú o la consulta no funcionan | Confirmá que subiste `script.js` y que JavaScript está habilitado. |
| Una publicación falla | Abrí la pestaña **Actions**, entrá a la ejecución que falló y compartime el mensaje de error. |

## Qué cambia al trabajar con un cliente real

Primero se acuerdan el alcance y los datos reales. Usá sus fotos o recursos autorizados, verificá precios y horarios y conectá su contacto solo con su autorización. Un enlace a WhatsApp abre una conversación; no confirma una reserva ni sincroniza una agenda.

También hay que elegir el alojamiento: **GitHub Pages se usa aquí para una demo educativa y de portfolio**. Sus condiciones restringen el uso como alojamiento gratuito de negocios online y sitios centrados en transacciones comerciales. No prometas que será el alojamiento definitivo de cualquier cliente; elegí un proveedor cuyas condiciones permitan el uso concreto. Un dominio propio es opcional y tendría un costo separado.

## Fuentes consultadas

Instrucciones verificadas el 8 de octubre de 2026. Los nombres de los botones pueden variar con el idioma o cambios de interfaz.

- [Qué es GitHub Pages y disponibilidad en el plan gratuito](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).
- [Crear un sitio con GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).
- [Publicar desde una rama y carpeta](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
- [Subir archivos a un repositorio](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).
- [Límites y usos de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).
- [VS Code](https://code.visualstudio.com/).
