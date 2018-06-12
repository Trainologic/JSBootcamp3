import * as uuidV4 from 'uuid/v4';
import * as Joi from 'joi';

const schema = Joi.object({
    username: Joi.string().min(4).required(),
    password: Joi.string().min(4).required()
});

export default function SaveUser(username: string, password: string) {
    try {
        // throw if there is a validation error
        Joi.assert({username, password}, schema);

        const user = {
            id: uuidV4(),
            username
        };

        return Promise.resolve(user);
    } catch (e) {
        const error = e.details ? e.details.map((error) => error.message) : e;

        return Promise.reject(error);
    }
};