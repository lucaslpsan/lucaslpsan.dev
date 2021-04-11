import { writable } from 'svelte/store';
import { textInterface } from "../locale/switch";

function createLangChoice() {
    const { subscribe, update } = writable(textInterface('pt-br'));

    return {
        subscribe,
        br: () => update(n => textInterface('pt-br')),
        en: () => update(n => textInterface('en-us'))
    };
}

export const textLanguage = createLangChoice();