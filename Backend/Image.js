//clase de prueba, dejar constructor vacío

class Image{
    constructor(nombreImg){
        this._nombreImg = nombreImg;
    }

    get nombreImg(){
        return this._nombreImg;
    }

    set nombreImg(nombreImg){
        this._nombreImg = nombreImg;
    }
}