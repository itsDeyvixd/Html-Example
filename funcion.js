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
}

class Carro {
    constructor(pColor, pMarca, pModelo, pPrecio) {
        this.color = pColor;
        this.marca = pMarca;
        this.modelo = pModelo;
        this.precio = pPrecio;
    }

    getColor() {
        return this.color;
    }

    setColor(psColor) {
        this.color = psColor;
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
