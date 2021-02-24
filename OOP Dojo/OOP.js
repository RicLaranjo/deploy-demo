// <!-- OOP - Protection against brute force attacks
// done 1- Create a class User
// done 2- The constructor must take a password (no need for username in this exercise)
// 3- Implement an instance method login(password) (i.e: to be used like john.login('passworD123')
// 4- Return true if the password matches
// 5- Return false if the password is wrong
// 6- If the user submits a wrong password 3 times in a row the method will always return false (in real life it could be a good idea to send an email to the user asking to reset the password)
// 7- If the user logins successfully the number of failed attempts should be reset -->

let mistakes = 0;

class User {
    constructor(){
        this.password = "passworD123";
        this.mistakes = 0;
    }
    login(password){
        if(password === this.password){
            this.mistakes = 0;
            return true;
        } else if(this.mistakes > 2){
            return "go away";
        } else {
            this.mistakes++;
            return false;
        }
    }  
}

const Vlad = new User()

console.log(Vlad.login("passworD123"));
console.log(Vlad.login(12323232323));
Vlad.login(123123123123233);
Vlad.login(1235);
console.log(Vlad.login(12342321));
console.log(Vlad.mistakes);
Vlad.login("passworD123");
console.log(Vlad.mistakes);