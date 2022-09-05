"use strict";

class UserStorage{
static #users={
    id:["kingsman","김대현","백엔드"],
    psword:["1234","1234","123456"],
    name:["김대현","문승기","동양미"],
 };
 
 static getUsers(...fields){
    const users=this.#users;
    const newUsers=fields.reduce((newUsers, field)=>{
        if(users.hasOwnProperty(field)){
            newUsers[field]=users[field];
        }return newUsers;
    },{})
    return newUsers;
 }
}

module.exports=UserStorage;