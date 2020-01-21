let moment = require('moment');
moment().format();
import UserService from '../services/UserService';
import Response from '../utils/Response';
import { getMinutesRead, getDaysRead, getStreak } from '../utils/math';

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

    static async getOne(req, res) {
        const id = req.params.id;
        
        try {
            const user = await UserService.getOne(id);

            if(user === null) {
                response.setError(404, 'User not found');
                return response.send(res);
            }

            const minutes = getMinutesRead(user.sessions);
            const daysRead = getDaysRead(user.sessions);
            const streak = getStreak(user.sessions);
            
            const resp = {
                username: user.username,
                time_read: minutes,
                days_read: daysRead,
                streak: streak,
                today: moment().startOf('day').format('LL')
            }

            response.setSuccess(200, resp);
            return response.send(res);
        } catch (error) {
            response.setError(400, error.message);
            return response.send(res);
        }
    }

    static async add(req, res) {
        if (!req.body.username) {
            response.setError(400, 'Please add all details');
            console.log("username");
            return response.send(res);
        }
        const user = req.body;
        try {
            const createdUser = await UserService.add(user);
            response.setSuccess(201, createdUser);
            return response.send(res);
        } catch(error) {
            console.log(error);
            response.setError(400, error);
            return response.send(res);
        }
    }
}

export default UserController;