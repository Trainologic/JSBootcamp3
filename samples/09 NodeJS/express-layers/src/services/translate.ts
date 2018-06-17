import * as models from '../models';

export default function (phrase: string = null, lang: string) {
    return new Promise((resolve, reject) => {
        if(!phrase || !lang) {
            reject('Both phrase and lang are required');
        }

        // Please implement
        resolve(models.WordModel);
    });
}