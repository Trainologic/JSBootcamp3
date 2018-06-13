import {Request, Response} from 'express';

import * as services from '../services';

export default async function TranslateController(req: Request, res: Response) {
    try {
        const phrase = req.body.phrase;

        const serviceResult = await services.TranslateService(phrase, req.params.lang);

        res.json({message: serviceResult});
    } catch (e) {
        res.status(500).send(`Bad request ${e}`);
    }
}