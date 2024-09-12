
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

const getUserById = (id , callback) => {
    const user = users.find((user) =>  user.id === id);

     (user) 
     ? callback(null, user)
     :callback(`User not found whith id ${id}`);

    

}

module.exports = {
    getUserById,
};