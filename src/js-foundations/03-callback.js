
const users = [
    {
        id: 1,
        name:'jhon Doe',
    },
    {
        id: 2,
        name : 'jane Doe',
    }
];

function getUserById(id , callback){
    const user = users.find(function(user){
     return user.id === id;

    });

    if (!user) {
        return callback(`User not found whith id ${id}`);
    }

    return callback(null, user);

}

module.exports = {
    getUserById,
}