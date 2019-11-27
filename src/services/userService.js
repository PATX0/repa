import database from '../models';

class UserService {
    static async getAll() {
        try {
            return await database.user.findAll({ include: [{ all: true }]});
        } catch (error) {
            throw error;
        }
    }

    static async add(user) {
        try {
            return await database.user.create(user);
        } catch(error) {
            throw error;
        }
    }

    static async update(id, user) {
        try {
            const foundUser = await database.user.findOne({
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
            const user = await database.user.findOne({
                where: { id: Number(id) },
                include: [{ all: true }]
            });

            return user;
        } catch(error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const user = await database.user.findOne({
                where: { id: Number(id) }
            });

            if (user) {
                const deletedUser = await database.user.destroy({
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