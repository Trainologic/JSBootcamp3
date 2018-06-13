import * as services from '../services'

import {Request, Response} from "express";

export default async function (req: Request, res: Response) {
    const serviceResult = await services.LanguageService();

    res.json({languages: serviceResult});
}