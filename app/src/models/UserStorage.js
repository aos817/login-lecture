"use strict";

class UserStorage{
static #users={
    id:["kingsman","김대현","백엔드"],
    psword:["1234","1234","123456"],
    name:["김대현","문승기","동양미"],
 };
 
 static getUsers(...fields){
    const users=this.#users;
    const newUsers = fields.reduce((newUsers, field)=>{
        if (users.hasOwnProperty(field)){
            newUsers[field]=users[field];
        }
        return newUsers;
    }, {});
    return newUsers;
 }

 static getUserInfo(id) {
    const users=this.#users;
    const idx=users.id.indexOf(id);
    const usersKeys=Object.keys(users); //=>[id,psword,name]
    const userInfo= usersKeys.reduce((newUser,info)=>{
        newUser[info]=users[info][idx];
        return newUser;
    }, {});

    return userInfo;
    }
}

module.exports=UserStorage;