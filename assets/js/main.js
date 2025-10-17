import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import updateCopyrightYear from './helpers/date_updater.js';
import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';

loader();
updateCopyrightYear();
resetToHome();
parallax();
activeMenu();
sendEmail();

// ****3
// e importas loader... 32min 1er video, y lo ejecutas
// cuando importas modulos o componenetes necesitas el .js, la func se ejecuta aqui
// importamos pa ejecutar
