// accedemos al elemento por el id
// aca seolo tengo un elemento... q esla seccion
const homeDOM = document.querySelector('#home');
// todos los iconos tienen laclase home layer, queryselectorAll, xq son todos los elementos q cumplan con esa coincidencia
// o q tengan la clase home layer
// aca tengo un Array...
const iconsDOM = document.querySelectorAll('.home__layer');

function parallax() {
	// escuchamos al homeDOM, mientras pases el mousse por el evento quier escuchar el evento mousemove, este evento ya existe en js,
	// mientras escuche el mov delmouse tomo a los iconos y los intero xq estan en un array
	homeDOM.addEventListener('mousemove', (event) => {
		// for each recibe una Callback,
		iconsDOM.forEach((icon) => {
			// permite acceder al valor q tiene un atributo (esto se mira en el dom como crearatributos personalzados)
			const speed = icon.getAttribute('data-speed');
			// lo guardo en la var de arriba pa jusga en el eje x y y
			// del navegador tome el ancho q tiene el window, y escucho el EventCounts, q lo pase como argumento,lo divido entre 100 pa q me salgaun num
			// mas PaymentRequestno, hago lomismo con el y
			const x = (window.innerWidth - event.pageX * speed) / 100;
			const y = (window.innerHeight - event.pageY * speed) / 100;
			// debo modificar los estilos en jsx, solo cuando quiera poner valores dinamico
			// traslado mis elementos deacuerdo a lo q guarde a mis var x y y
			icon.style.translate = `${x}px ${y}px`;
		});
	});
}

export default parallax;

// pa el movimiento delos iconos en el Header, donde esta el chico en su fondo
// grab 1 gen 44 51min-----------

// falta q el menu se subraye depende de la seccion q estes
// falta trabajar formulario, pa q se envie correo a mi y usuario
// falta desplegar
