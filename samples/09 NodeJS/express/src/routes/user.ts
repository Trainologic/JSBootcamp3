import * as express from 'express';
import {Request, Response} from 'express';

import {UserServices} from '../services';

const router = express.Router();

router.use(express.json());

router.post('/', async (req: Request, res: Response) => {
    try {
        const result = await UserServices.SaveService(req.body.username, req.body.password);

        res.json({"message": result});
    } catch (e) {
        res.status(500).json({error: e.toString()});
    }
});

router.get('/:userId', (req: Request, res: Response) => {
    res.json({"message": `Get user ${req.params.userId}`});
});

router.post('/:userId', (req: Request, res: Response) => {
    res.json({"message": `Update user ${req.params.userId}`});
});

router.delete('/:userId', (req: Request, res: Response) => {
    res.json({"message": `Delete user ${req.params.userId}`});
});

export default router;