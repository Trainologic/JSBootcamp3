export default function (phrase: string = null, lang: string) {
    return new Promise((resolve, reject) => {
        if(!phrase || !lang) {
            reject('Both phrase and lang are required');
        }

        resolve(getWordTranslationByLang(phrase, lang));
    });
}

function getWordTranslationByLang(phrase, lang) {
    switch (lang) {
        case 'english':
            return 'Translate, World!';
        case 'spanish':
            return 'Translate, Mundo!';
        default:
            return 'Waka Waka';
    }
}