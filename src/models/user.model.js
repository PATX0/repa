const users = require('../data/users');

const getUsers = () => {
    return Promise.resolve(users);
};

getUser = (id) => {
    const u = users.find(user => user.id === id);
    if (u !== null) {
        return Promise.resolve(u);
    } else {
        return Promise.reject();
    }
};

const insertUser = (payload) => {
    users.append(payload);
};

const updateUser = (id) => {};

const deleteUser = (id) => {
    const i = users.findIndex(user => user.id === id);
    users.splice(i, 1);
};

module.exports = {
    getUsers,
    getUser,
    insertUser,
    updateUser,
    deleteUser,
};