const loaderContainerDOM = document.querySelector('.loader');

function loader() {
	window.addEventListener('load', () => {
		loaderContainerDOM.classList.add('loader--hidden');
	});
}

export default loader;

// ****2
// se debe quitar el loader en cuanto termine de cargarse la pag
// accesde al dom al html y apliaca esto
// // pa acceder ami html debe ser con document. query selector es un metodo, busca un elemento q tiene la clase loader y guardalo aca
// y le digo busca un elemento con clase loader y guardarlo aca
// apliaca la func queryselector y hacemos una func llamada loader sin parametros, pa q salga lo exportamos, solo se puede usar expor default una ves
// pa la func reyna
// paq salga lo q esta dentro de la fun ay q exportaro
// dentro de la func loader, hay eventos en js ej manipular elmouse, los evenetos se escuchan con addEventListener, agrega un escuchador a ese eventos
// pa acceder al navegador es a traves de windows, 1er argumento  recive es el load (la pag se cargo) cuando el
// evento se este ejecutnado... le agregues una clase classlist y la agregas, agregas la clase loader headen
