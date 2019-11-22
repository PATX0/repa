import UserService from '../services/UserService';
import Response from '../utils/Response';

const response = new Response();

class UserController {
    static async getAll(req, res) {
        try {
            const users = await UserService.getAll();
            response.setSuccess(200, users);
            return response.send(res);
        } catch(error) {
            response.setError(400, error.message);
            return response.send(res);
        }
    }

    static async add(req, res) {
        if (!req.body.username || !req.body.password) {
            response.setError(400, 'Please add all details');
            return response.send(res);
        }
        const user = req.body;
        try {
            const createdUser = await UserService.add(user);
            response.setSuccess(200, createdUser);
            return response.send(res);
        } catch(error) {
            response.setError(400, error.message);
            return response.send(res);
        }
    }
}

export default UserController;