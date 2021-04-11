import ptBR from './pt-br.json'
import enUS from './en-us.json'

export const textInterface = (lang) => {
    return lang === 'pt-br' ? ptBR : enUS;
};

// export const ptBR = {
//     "trainning": "Formação"
// }

// export const enUS = {
//     "trainning": "Trainning"
// }