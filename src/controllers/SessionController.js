import SessionService from '../services/SessionService';
import Response from '../utils/Response';

const response = new Response();

class SessionController {
    static async getAll(req, res) {
        if (!req.body.user_id) {
            response.setError(400, 'Please add all details');
            return response.send(res);          
        }
        const user_id = req.body.user_id;
        try {
            const sessions = await SessionService.getAll(user_id);
            response.setSuccess(200, sessions);
            return response.send(res);
        } catch(error) {
            response.setError(400, error.message);
            return response.send(res);
        }
    }

    static async add(req, res) {
        let userId = req.body.user_id;
        let value = req.body.value;
        let sessionId = req.body.session_id;
        
        if (!userId || !value) {
            response.setError(400, 'Please add all details');
            return response.send(res);
        }

        /* Book is picked up, create a new entry */

        if(value === 1) {
            try {
                let now = new Date();

                const session = {
                    userId: req.body.user_id,
                    start: now,
                    end: null,
                    createdAt: now,
                    updatedAt: now
                }

                const createdSession = await SessionService.add(session);
                response.setSuccess(201, createdSession);
                return response.send(res);
            } catch(error) {
                console.log(error);
                response.setError(400, error);
                return response.send(res);
            }
        }

        /* Book is put down, update entry with timestamp for the end field */

        if(value === 2 && sessionId) {
            try {
                const foundSession = await SessionService.getOne(sessionId);

                let now = new Date();
                const session = {
                    userId: foundSession.userId,
                    start: foundSession.start,
                    end: now,
                    createdAt: foundSession.createdAt,
                    updatedAt: now
                }

                const createdSession = await SessionService.update(sessionId, session);
                response.setSuccess(201, createdSession);
                return response.send(res);
            } catch(error) {
                console.log(error);
                response.setError(400, error);
                return response.send(res);
            }
        }

        response.setError(400, 'Wrong value');
        return response.send(res);
    }
}

export default SessionController;