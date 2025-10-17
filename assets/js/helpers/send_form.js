// cuando importas modulos o componenetes necesitas el .js, la func se ejecuta aqui
// crear una cuenta en Email,js, recuerda q mandar el formulario debes registrrte aqui, tiene limite de 200 requet o correos
// TODAS LAS APIS/libreias TIENEN SU DOCUMENTACION Q LES INDICA COMO LA PUEDEN UTIIZAR DOCS COMO sus intrucciones
// en la pag sdk-installation-Browser script y copian y pegan ese cod , va ir en el hero, vamos a integrar la pi con sdk y vair en el hero
//****6
// te pide tu public key vas a tu cuenta emailjs vas acount y copias la public y key la pegas en el html en el head
// con esto ya esta integrada la api falta hacer de la funcionalidad delenvio
// vas emailjs.send y te indica un codigo como... creas una var q atrapa los inputs y mandas con send
// vamos hacer proteccion en el formulario desde js pa q no se pueda enviar si falta un campo

// seleccionamos el form por el id
const formDOM = document.querySelector('#form');
// necesito atrapar un modal q se desprende cuando le den enviar, voy usar un dialog de etiqueta pero puede ser con un popover
const modalDOM = document.querySelector('#modal');
// tbn seleccionamos el boton pa q cierre el modal
const btnCloseDOM = document.querySelector('#btn_close-modal');

// func q abre elmodal
function openModal() {
	// accedemos una prop q es u atributo, seleciono un elemento de htmly accedo a un atributo y lo pogo en true
	// son como atributos booleanos
	modalDOM.open = true;
}

function closeModal() {
	modalDOM.open = false;
}

// func enviar el formulario
function sendEmail() {
	// escuchamos el submit ocurre un evento q es envio y se recarga la pag, es mal experiencia pa el usuario, lo vemos en eventos
	// un evento tiene el prier evento q voy a escuchar y elsegundo es una callback, se ssuele poner e/event, hace refernecia submit
	formDOM.addEventListener('submit', (e) => {
		e.preventDefault();
		// pegas el code example delapag web emailjs
		// como atrapo el input de un forulario, 1ro es un objeto con sus key y value
		const params = {
			// seleccionamos cada elemento desde el dom .valueaccedo al valor q me mandan en el input
			name: document.querySelector('#name').value,
			email: document.querySelector('#email').value,
			subject: document.querySelector('#subject').value,
			message: document.querySelector('#message').value,
			// con esto atrapamos os valores del input en nuestras propiedades
		};

		// pongo una condicion no quiero q me manden si no llenan todos los campos, es poner un seguro desde js, o tbn en html se puede poner require en todos los inputs
		// la dif es q mejor es por la experiencia de ususario, mas exgentes es desde el html
		if (params.name && params.email && params.subject && params.message) {
			// estoes una promesa q se debeconsumir, x esoes con then, cuano a romesa se cumple y cuando se rechaza
			emailjs
				// 'COLOCA TU SERVICE_ID', 'COLOCA TU TEMPLATE_ID'
				// vas a emailjs Email Services - GMAIL =SERVICE ID
				// vas emailTemplates=
				//46 min 50 ver video xq hay q vincular 2 templates genn44 video 2 de proyecto min 46
				//en my default template va {{subject}} absorbe la prop de mi  cod js es como una interpolacion
				// en elauto replay agregan el otro template y guardan
				//el otro template q es my default template,  de ahi sacas el template id de settings
				//vamos a my auto replay template, recomiendo personalizar el subject como quieres q el usuario reciba el correo
				//probamos q funcione
				.send('service_1gsmm4r', 'template_p9teewd', params)
				.then(
					(response) => {
						console.log('SUCCESS!', response.status, response.text);
						// si el envio de mi formulario es exitosos q se ejecute mi func abrir modal, pa q saber q se envio el fomr
						openModal();
					},
					(error) => {
						console.log('FAILED...', error);
					},
				);
		}
	});
}
// agarro el botn de cerrar pa q escuchar el click cuando se de click se ejecute la func close modal
btnCloseDOM.addEventListener('click', closeModal);

export default sendEmail;
