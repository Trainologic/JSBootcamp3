import * as express from 'express';

import * as Controllers from '../controllers';

const router = express.Router();

router.get('/languages', Controllers.LanguagesController);

// If there are more than two arguments, the second argument will be
// counted as a middleware
router.post('/:lang', express.json(), Controllers.TranslateController);

export default router;