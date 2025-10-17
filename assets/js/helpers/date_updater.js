function updateCopyrightYear() {
	// atrapo el ano actual, fun c date tiene acceso a un obj pa dias horas minutos y segundo actual, pido el ano, en la var current year tengo el
	// ano atrapado
	const currentYear = new Date().getFullYear();

	const copyRightElementDOM = document.querySelector('.footer__copy span');

	copyRightElementDOM.textContent = `©${currentYear}`;
}

export default updateCopyrightYear;

// acceer al footer y agregar el ano automatcamente, hacemos la func la llamamos como queremos, la exportamos e importamos en MediaDeviceInfo,
// acccedo al footer copy y dsps al span donde va ir la fecha, ya los tengo atgrapados

// const dateDOM = document.querySelector('.footer__copy span');

// function dateUpdater() {
// // atrapo el ano actual, fun c date tiene acceso a un obj pa dias horas minutos y segundo actual, pido el ano, en la var current year tengo el
// 	// ano atrapado..
// 	const currentYear = new Date().getFullYear(); (pueden acceder dia y horas geMinutes, getDay)
// y la agregamos al DOM
// // ... lo reasigno con una interpolacion... @ ...(como poner derechos reservados o copiright con teclado,va en ves de aroba)
// 	dateDOM.textContent = `@${currentYear}`;
// }
// export default dateUpdater;

// ya no deben cambiaro cada ano, se hace automatico se reacrga
