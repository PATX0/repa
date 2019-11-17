import database from '../models';

class UserService {
    static async getAll() {
        try {
            return await database.User.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async add(user) {
        try {
            return await database.User.create(user);
        } catch(error) {
            throw error;
        }
    }

    static async update(id, user) {
        try {
            const foundUser = await database.User.findOne({
                where: { id: Number(id) }
            });

            if (foundUser) {
                await database.User.update(user, { where: { id: Number(id) } });

                return user;
            }
            return null;
        } catch(error) {
            throw error;
        }
    }

    static async getOne(id) {
        try {
            const user = await database.User.findOne({
                where: { id: Number(id) }
            });

            return user;
        } catch(error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const user = await database.User.findOne({
                where: { id: Number(id) }
            });

            if (user) {
                const deletedUser = await database.User.destroy({
                    where: { id: Number(id) }
                });
                return deletedUser;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;