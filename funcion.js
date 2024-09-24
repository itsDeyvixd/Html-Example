function guardarDatosL() {
    const usuario = document.getElementById("usuario").value;
    const email = document.getElementById("email").value;
    const passwd = document.getElementById("password").value;

    localStorage.setItem("usuario", usuario);
    localStorage.setItem("email", email);
    localStorage.setItem("passwd", passwd);
}

function verDatosL() {
    const user = localStorage.getItem("usuario");
    const email = localStorage.getItem("email");
    const passwd = localStorage.getItem("passwd");

    document.getElementById(
        "resultado"
    ).innerHTML = `Nombre: ${user} <br> Email: ${email} <br> Passwd: ${passwd}`;
}

function delDatosL() {
    localStorage.removeItem("usuario");
    localStorage.removeItem("email");
    localStorage.removeItem("passwd");
}

function guardarDatosS() {
    const usuario = document.getElementById("usuario").value;
    const email = document.getElementById("email").value;
    const passwd = document.getElementById("password").value;

    sessionStorage.setItem("usuario", usuario);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("passwd", passwd);
}

function verDatosS() {
    const user = sessionStorage.getItem("usuario");
    const email = sessionStorage.getItem("email");
    const passwd = sessionStorage.getItem("passwd");

    document.getElementById(
        "resultado"
    ).innerHTML = `Nombre: ${user} <br> Email: ${email} <br> Passwd: ${passwd}`;
}

function salvar() {
    let conf = confirm("Esta seguro?");
    if (conf) {
        alert("guardado");
    } else {
        alert("OK, no se registro");
    }
}

function salvar2() {
    var sNom = prompt("nombre:");
    alert("--->" + sNom);
}

function ejVar() {
    console.log(x);
    var x = 10;
    var x = 50;
    console.log("tipo de variable:" + typeof x + "---" + x);
}

function ejLet() {
    //console.log( x ) ;
    let x = 10;
    console.log(x);
}

function ejFor() {
    for (var x = 0; x < 10; x++) {
        console.log(x);
    }

    console.log("x al final:" + x);
}``

class Carro {

    #color; // Remove the empty declaration, it's not valid in JavaScript
    
    constructor(pColor, pMarca, pModelo, pPrecio) {
        this.#color = pColor;
        this.marca = pMarca;
        this.modelo = pModelo;
        this.precio = pPrecio;
    }

    getColor() {
        return this.#color;
    }

    setColor(psColor) {
        this.#color = psColor;
    }

    getMarca() {
        return this.marca;
    }

    setMarca(psMarca) {
        this.marca = psMarca;
    }

    getModelo() {
        return this.modelo;
    }

    setModelo(psModelo) {
        this.modelo = psModelo;
    }

    getPrecio() {
        return this.precio;
    }

    setPrecio(psPrecio) {
        this.precio = psPrecio;
    }

    acelerar() {
        console.log("carro acelerando...");
    }

    frenar() {
        console.log("carro frenando...");
    }
    prender() {
        console.log("carro prendido");
    }
}

class  CarroElectrico extends Carro {

    constructor( pColor, pMarca, pModelo, pPrecio, pBateria) {
        super(pColor, pMarca, pModelo, pPrecio);
        this.bateria = pBateria;
    }

    getBateria() {
        return this.bateria;
    }
    setBateria(){
        this.bateria = pBateria;
    }

    cargaBateria(){
        console.log("Bateria actual :"+this.bateria+"Kw/h");
    }

}

class  CarroCombustion extends Carro {
    constructor( pColor, pMarca, pModelo, pPrecio, pCombustible) {
        super(pColor, pMarca, pModelo, pPrecio);
        this.combustible = pCombustible;
}

getCombustible(){
    return this.combustible;
}

setCombustible(){
    this.combustible = pCombustible;
}
acelerar(){
    console.log(this.marca +" acelera de  0 a 100 en 5 segundos ");
    }
}



function ejPoo() {

    var carro1 = new Carro("Rojo", "Ford", "2025", 20000);
    console.log("Ford color : "  + carro1.getColor());
    console.log("Ford marca : "  + carro1.getMarca());
    console.log("Ford modelo : "  + carro1.getModelo());
    console.log("Ford precio : "  + carro1.getPrecio());

    console.log("---------------------------------------");
    var carro2 = new CarroElectrico("Azul", "Tesla", "2025", 30000, 150);
    console.log("Tesla color : "  + carro2.getColor());
    console.log("Tesla marca : "  + carro2.getMarca());
    console.log("Tesla modelo : "  + carro2.getModelo());
    console.log("Tesla precio : "  + carro2.getPrecio());
    console.log("Tesla bateria : "  + carro2.getBateria());
    carro2.cargaBateria();

    console.log("---------------------------------------");
    var carro3 = new CarroCombustion("Negro", "Chevrolet","2024",  25000, "Gasolina");
    console.log("Chevrolet color : "  + carro3.getColor());
    console.log("Chevrolet marca : "  + carro3.getMarca());
    console .log("Chevrolet modelo : "  + carro3.getModelo());
    console.log("Chevrolet precio : "  + carro3.getPrecio());
    console.log("Chevrolet combustible : "  + carro3.getCombustible());
    carro3.acelerar();



}
function  ejPoo2() {
    var carro2 = new Carro("Azul", "Chevrolet", "2025", 30000);
        console.log("Chevrolet color : "  + carro2.getColor());
        console.log("Chevrolet marca : "  + carro2.getMarca());
        console.log("Chevrolet modelo : "  + carro2.getModelo());
        console.log("Chevrolet precio : "  + carro2.getPrecio());
        
    }

