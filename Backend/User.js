// Refiere a los usuarios en la base de datos
class User {

    static id = 0;

    constructor(id, name, surname, age, username, email, password, cellphone, birthday, rol) {
        this._id = ++User.id;
        this._name = name;
        //this._image = Image();
        this._surname = surname;
        this._age = age;
        this._username = username;
        //this._course = new Course();
        this._email = email;
        this._password = password;
        this._cellphone = cellphone;
        this._birthday = birthday;
        this._rol = rol;
    }

    //Métodos getter & setter
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get image() {
        return this._image;
    }

    set image(image) {
        this._image = image;
    }

    get surname() {
        return this._surname;
    }

    set surname(surname) {
        this._surname = surname;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        this._age = age;
    }

    get password() {
        return this._password;
    }

    set password(password) {
        this._password = password;
    }

    get username(){
        return this._username;
    }

    set username(username){
        this._username = username;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get birthday() {
        return this._birthday;
    }

    set birthday(birthday) {
        this.birthday = birthday;
    }

    get course() {
        return this.course;
    }

    set course(course) {
        this._course = course;
    }

    get rol() {
        return this._rol;
    }

    set rol(rol) {
        this._rol = rol;
    }

    toString() {
        return `
Nombre: ${this._name}
Apellido:${this._surname}
Edad: ${this._age}
Username: ${this._username}
Password: ${this._password}
Telefono: ${this._cellphone}
Email: ${this._email}
Fecha de nacimiento: ${this._birthday}
Rol: ${this._rol}`;
    }

}

let user1 = new User('', 'Noelia', 'Ruiz', 23, 'Noe-Ruiz', 'ruiz.noeliaromina@gmail.com', '12345', '152444477', '10/10/2023', 'admin');
console.log(user1.toString());

let user2 = new User('', 'Sonia', 'Calle', 30, 'so-Calle', 'zonia@gmail.com', 'admin', '123', '10/10/2023', 'admin');
console.log(user2.toString());

let user3 = new User('', 'Gabriel', 'Juhasz', 38, 'gabjaj', 'gabjaj@gmail.com', '23', '1138419230', '27/06/1985', 'admin');
console.log(user3.toString());