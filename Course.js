class Course {

    static id = 0; //contador estático

    constructor(id, name, language, length, stars, difficulty, description, content) {
        this._id = ++Course.id;
        //this._image = new Image();
        this._name = name;
        this._language = language;
        this._length = length;
        this._stars = stars;
        this._difficulty = difficulty;
        this._description = description;
        this._content = content;
    }

    //Métodos getter y setter
    get id() {
        return this._id;
    }

    get image() {
        return this._image;
    }

    set image(image){
        this._image = image;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get language() {
        return this._language;
    }

    set language(language) {
        this._language = language;
    }

    get length() {
        return this._length;
    }

    set length(length) {
        this._length = length;
    }
    get stars() {
        return this._stars;
    }
    set stars(stars) {
        this._stars = stars;
    }

    get difficulty() {
        return this._difficulty;
    }
    set difficulty(difficulty) {
        this._difficulty = difficulty;
    }

    get description() {
        return this._description;
    }

    set description(description) {
        this._description = description;
    }

    get content(){
        return this._content;
    }

    set content(content){
        this._content = content;
    }

    toString(){
        return `Nombre: ${this.name} \nLenguaje: ${this.language}\nDuración: ${this.length}\nEstrellas: ${this.stars}\nDificultad: ${this.difficulty}\nContenido: ${this.content}`;
        }

}

//Pruebas
let curso1 = new Course('', ' Curso de Hola mundo', 'Java', '12 meses' , 5, 'media', 'curso de java', 'clases en video');
let curso2 = new Course('', 'Curso de Ciencia de datos', 'Python', '10 meses', '4', 'baja', 'curso de Python', 'clases en video');
console.log(curso1.toString());
console.log(curso2.toString());

