import database from '../models';

class SessionService {
    static async getAll() {
        try {
            return await database.session.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async add(session) {
        try {
            return await database.session.create(session);
        } catch(error) {
            throw error;
        }
    }

    static async update(id, session) {
        try {
            const foundSession = await database.session.findOne({
                where: { id: Number(id) }
            });

            if (foundSession) {
                await database.session.update(session, { where: { id: Number(id) } });

                return session;
            }
            return null;
        } catch(error) {
            throw error;
        }
    }

    static async getOne(id) {
        try {
            const session = await database.session.findOne({
                where: { id: Number(id) }
            });

            return session;
        } catch(error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const user = await database.session.findOne({
                where: { id: Number(id) }
            });

            if (session) {
                const deletedSession = await database.session.destroy({
                    where: { id: Number(id) }
                });
                return deletedSession;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}

export default SessionService;