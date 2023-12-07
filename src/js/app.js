import Alpine from "alpinejs";
import FiltrerTable from "./components/FiltrerTable.js";
import Menu from "./components/Menu";
import intersect from '@alpinejs/intersect'
import Question from "./components/Question.js";

window.Alpine = Alpine;
Alpine.plugin(intersect)
window.addEventListener('DOMContentLoaded', () => {
    const {alpineInitialized, Alpine} = window;
    if (alpineInitialized) {
        return;
    }

    window.alpineInitialized = true;
    const {data, start} = Alpine;
    data('FiltrerTable', FiltrerTable);
    data('Question', Question);
    data('Menu', Menu);
    start();
});
