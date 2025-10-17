function resetToHome() {
	window.location.hash = '#home';
}

export default resetToHome;

// cuando recarguen no se quede en la seccion en q se quedo sino este alincio, es buena practica, mas prmanencia pa el sio
// no se necesita parametros

// window accede al navegador, (pa js todo es un obj incluso el navegador) un apropiedad popular es location, accede a la ruta (el link de la pag)
// location tbn tiene prop y metodos, acceso a su prop hash,las propiedades se pueden reasignar, cuando se recargue l apag seejecutelo de
// resetToHome, q vaya al home de la pag #home, aca manipulo la ruta del navegador y le digo a onde llegar cada q recarge
