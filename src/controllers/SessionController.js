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
        if (!req.body.user_id) {
            response.setError(400, 'Please add all details');
            return response.send(res);
        }
        const session = req.body;
        try {
            const createdSession = await SessionService.add(session);
            response.setSuccess(201, createdSession);
            return response.send(res);
        } catch(error) {
            console.log(error);
            response.setError(400, error);
            return response.send(res);
        }
    }
}

export default SessionController;