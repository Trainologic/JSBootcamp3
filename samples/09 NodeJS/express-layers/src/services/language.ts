const AVAILABLE_LANGUAGES = ['english', 'spanish'];

export default function LanguageService() {
    return new Promise((resolve, reject) => {
       return resolve(AVAILABLE_LANGUAGES);
    });
}