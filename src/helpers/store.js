import { writable } from 'svelte/store';
import { textInterface } from "../texts/text";

function createLangChoice() {
    const { subscribe, update } = writable(textInterface('pt-br'));

    return {
        subscribe,
        br: () => update(n => textInterface('pt-br')),
        en: () => update(n => textInterface('en-us'))
    };
}

function createColorUI() {
    const { subscribe, set } = writable('#4299e1');

    return {
        subscribe,
        change: (color) => set(color)
    };
}

export const textLanguage = createLangChoice();
export const colorUI = createColorUI();