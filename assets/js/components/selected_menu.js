// falta q el menu se subraye depende de la seccion q estes
// **5, primero debemos atrapar varios elementos del dom
// primero atrapamoa la list q es navbar list, accdemos al document y utlizamos una func de busqueda q es queryselector
// estamos diciendo en este elemento busca navbar list
// otra var pa a trapar todos los elementos links, navbar link, all xq se selecciona varios q cumplan una caract q tengan esa clase
// otra atrapamos todas las secciones, atrapamos por selector de tipo y no por la clase x eso es All
// uno seleciona el contenedor de los list y los otros dos el simil array
const navBarDOM = document.querySelector('.navbar__list');
const navBarLinkDOM = document.querySelectorAll('.navbar__link');
const sections = document.querySelectorAll('section');

// creamos nuestra func
function activeMenu() {
	// a a window el obj raiz le agrego el indice de mi evento, esta func addeventlistener es la q escucha los eventos y va scuchar elevento-
	// scroll y mientras va scrolleando debemos atrapar la posicion,
	window.addEventListener('scroll', () => {
		// 	atrapamos la posicion con esta var q creamos scrollposition , agarro la window la ventana delnavegadory q me diga donde esta elscroll solo
		// 	en eleje y , agarro el mouse y le aumente 100px y no interumpa a vista
		const scrollPosition = window.scrollY + 100;

		// agarro el simil array y lo itgero con foreach, uso parametros con el elemnto q estoy iterando le llamo section y el indice
		sections.forEach((section, index) => {
			// si la posicion del scroll es mayor o igual en la propiedad obsettop, representa la distancia de mi seecion alorden superior de mi window

			if (
				scrollPosition >= section.offsetTop &&
				// 11min 2do video gen44,
				// hay librerias q hacen EventSource, lo estamos haciendo en vanila
				// esta libreria hace animaciones con scroll
				// tbn q la posicion del scroll sea menor pero sumando la altura
				scrollPosition < section.offsetTop + section.offsetHeight
				// mientras estas condiciones se cumplen...
			) {
				// otra var q atrapa elemento active, tomo el nvbar dom, q de este contenedor toma al elemento nabvar link, y tbntenga la clase active
				// recuerden el subrayado viene de la clasea acive
				const activeLink = navBarDOM.querySelector('.navbar__link.active');
				// condicion anidada, si encontre ele elemnto activo remueve la clase active y sino ...
				if (activeLink) {
					activeLink.classList.remove('active');
				}
				// le agrega la clase y a ese indice q esta iterando agregar la clase active
				navBarLinkDOM[index].classList.add('active');
			}
		});
	});
}
// si algo no funciona van a inspeccionar y van crossOriginIsolated, selected menu y la linea tal das click ahiy te lleva
export default activeMenu;
