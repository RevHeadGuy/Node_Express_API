import { v4 as uuid4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;

    user.push({...user, id: uuidv4() });
    res.send('user with name ${user.firstname} added to DB !!');
}

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send('user with the id ${id} deleted from thee DB !!');

}

export const updateUser = (req, res) => {
    const { id } = req.params;

    const { firstname , lastname , age } = req.body;
    
    const userToBeUpdated = users.find((user) => user.id == id);
    
    if(firstname) 
        user.firstname = firstname;
    
    if(lastname) 
        user.lastname = lastname;
    
    if(age)
        user.age = age;
    
    res.send('user with id ${id} has been updated');

}