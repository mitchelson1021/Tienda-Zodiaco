



function zodiaco () {
    let dia = document.getElementById("dia");
    let mes = document.getElementById("mes");
    let año = document.getElementById("anio");
    let mensaje = document.getElementById("mensaje");

        //Aries
    if (dia.value >= 21 && dia.value <= 31 &&  mes.value == "3" || dia.value >= 1 && dia.value <= 19 &&  mes.value == "4") {
        fechaNacimiento("Aries");
        console.log("Tu sigo Zodiacal es Aries");
    }  //Taurus
     else if ( dia.value >= 20 && dia.value <= 30 &&  mes.value == "4" || dia.value >= 1 && dia.value <= 20 &&  mes.value == "5") {
        fechaNacimiento("Taurus");
        console.log("Tu sigo Zodiacal es Taurus");
    } //Gémini
     else if ( dia.value >= 21 && dia.value <= 31 &&  mes.value == "5" || dia.value >= 1 && dia.value <= 20 &&  mes.value == "6") {
        fechaNacimiento("Géminis");
        console.log("Tu sigo Zodiacal es Géminis");
    } //Cancer
     else if ( dia.value >= 21 && dia.value <= 30 &&  mes.value == "6" || dia.value >= 1 && dia.value <= 20 &&  mes.value == "7") {
        fechaNacimiento("Cancer");
        console.log("Tu sigo Zodiacal es Cáncer");
    } //Leo
    else if ( dia.value >= 21 && dia.value <= 31 &&  mes.value == "7" || dia.value >= 1 && dia.value <= 22 &&  mes.value == "8") {
        fechaNacimiento("Leo");
        console.log("Tu sigo Zodiacal es Leo");
    } //Virgo
     else if ( dia.value >= 23 && dia.value <= 31 &&  mes.value == "8" || dia.value >= 1 && dia.value <= 23 &&  mes.value == "9") {
        fechaNacimiento("Virgo");
        console.log("Tu sigo Zodiacal es Virgo");
    } //Libra
     else if ( dia.value >= 24 && dia.value <= 30 &&  mes.value == "9" || dia.value >= 1 && dia.value <= 23 &&  mes.value == "10") {
        fechaNacimiento("Libra");
        console.log("Tu sigo Zodiacal es Libra");
    } //Escorpio
     else if ( dia.value >= 24 && dia.value <= 31 &&  mes.value == "10" || dia.value >= 1 && dia.value <= 22 &&  mes.value == "11") {
        fechaNacimiento("Escorpio");
        console.log("Tu sigo Zodiacal es Escorpio");
    } //Sagitarius
     else if ( dia.value >= 23 && dia.value <= 30 &&  mes.value == "11" || dia.value >= 1 && dia.value <= 22 &&  mes.value == "12") {
        fechaNacimiento("Sagitario");
        console.log("Tu sigo Zodiacal es Sagitarius");
    }  //Capricornus
     else if ( dia.value >= 23 && dia.value <= 31 &&  mes.value == "12" || dia.value >= 1 && dia.value <= 22 &&  mes.value == "1") {
        fechaNacimiento("Capricornio");
        console.log("Tu sigo Zodiacal es Capricornus");
    } //Aquarius
     else if ( dia.value >= 23 && dia.value <= 31 &&  mes.value == "1" || dia.value >= 1 && dia.value <= 20 &&  mes.value == "2") {
        fechaNacimiento("Acuiario");
        console.log("Tu sigo Zodiacal es Aquarius");
    } //Piscis
     else if ( dia.value >= 21 && dia.value <= 29 &&  mes.value == "2" || dia.value >= 1 && dia.value <= 20 &&  mes.value == "3") {
        fechaNacimiento("Pisis");
        console.log("Tu sigo Zodiacal es Piscis");
    } 
     else {
        error()
        console.log("Revisa los parámetros ingresados, hubo un error")
    }

    function fechaNacimiento (signo) {
        Swal.fire(`<h3>Si tu fecha de Nacimiento es ${dia.value} / ${mes.value} / tu signo del Zodiaco es "${signo}"</h3>`)
        
    }

    function error () {
        Swal.fire({
            icon: 'error',
            title: 'Hubo un error al ingresar los datos',
            text: 'intenta de nuevo',
          })
    }

}

//-------------------Filtro------------------

function btn_select () {
    let btn_select_signo = document.getElementById("select").value
        console.log("respuesta al click del btn " + btn_select_signo)
        
        let filtro = signos.filter(buscar => buscar.signo == btn_select_signo);
        console.log(filtro);

}

//-------------------Zona de Ventas-------------




const contenedor = document.getElementById("contenedorProductos");

function crear_tienda_productos () {

    Object.entries(productos).forEach((producto) => {
      

        // Por fin, aquí pude entender de las diferencias al
        // insertar html desde js
        const cards =  document.createElement('div');
        cards.innerHTML =
 
        `
        <!----------card producto----------->
        <div class="card text-center">
        <img id="imgProduct" src="${producto[1].imagen}" class="card-img-top" alt="...">
        <div id="cardTitle" class="card-body">
            <h5 class="card-title">${producto[1].nombre}</h5>
            <p id="description">${producto[1].descripcion}</p>
            <p class="sku">SKU:</p><p class="sku">${producto[1].id}</p>
            <h6 id="cardPrice" class="card-text"><h6 class="signo">$</h6>${producto[1].precio}</h6><br>
            <button id="btnCard" type="button" class="btn btn-primary btn_agregar">Agregar al carrito</button>
        </div>
        </div>`;
        contenedor.appendChild(cards);

    });
};
 crear_tienda_productos();

 //creando la funcion para añadir al carrito de compra

let btn_card = document.querySelectorAll('#btnCard');

let carrito = [];

for (btn_listen of btn_card) {
    btn_listen.addEventListener('click', (e) => {
        
        
        let imagen_carrito = e.target.parentNode.parentNode.childNodes[1].src;
        let id_carrito = parseInt(e.target.parentNode.childNodes[6].textContent);
        let nombre_carrito = e.target.parentNode.childNodes[1].textContent;
        let precio_carrito = parseInt(e.target.parentNode.childNodes[10].textContent);
        let cantidad_carrito = 1;
        
        
        let comparar = carrito.find(item => item.id === id_carrito)
        if (comparar === undefined) {

            carrito.push({
                id: id_carrito,
                cantidad: cantidad_carrito,
                imagen: imagen_carrito,
                nombre: nombre_carrito,
                precio: precio_carrito,
    
            });
            guardar_in_local();

        }else {
            comparar.cantidad ++ ;
            comparar.precio = comparar.cantidad * precio_carrito;
        }
        
        console.log(carrito_recuperado);
        renderizar();
        sumar_total();
        guardar_in_local();

    });

}

//Renderizar Carrito
function renderizar () {

    let la_tabla = document.getElementById('tbody_carrito');
    la_tabla.innerHTML = ''; // Con esto limpio el carrito para evitar repetidos
    
    Object.values(carrito).forEach((vuelta) => {
        
    let tabla_carro = document.createElement('tr');
    tabla_carro.innerHTML = `
                    <td><img src="${vuelta.imagen}" width="50px">${vuelta.id}</td>
                    <td>${vuelta.cantidad}</td>
                    <td>${vuelta.nombre}</td>
                    <td>${vuelta.precio}</td>`
                    {/* <td><button id="btn_eliminar" onclick="btn_eliminar()" type="button" class="btn btn-danger">X</button></td> */}
                    ;
    la_tabla.append(tabla_carro);


    });
};

//Sumar Total

function sumar_total () {
    const el_total = document.getElementById('total');
    let total_reduce = carrito.reduce((total, valor) => {
    return total + valor.precio;
},0);
    console.log(total_reduce);
    el_total.innerText = `Total: ${total_reduce}`;
    el_total.append(total_reduce)
}


//Carrito a local Storage
function guardar_in_local() {
    let carrito_a_json = JSON.stringify(carrito);
    localStorage.setItem("carrito", carrito_a_json);
}


//carrito Recuperado
let carrito_guardado = localStorage.getItem("carrito");
let carrito_recuperado = JSON.parse(carrito_guardado);

//Botón Vaciar Carrito
const botonVaciar = document.getElementById('btn_vaciar');
botonVaciar.addEventListener('click', btn_vaciar);
function btn_vaciar() {

    console.log('vaciar');
    carrito.splice(0, carrito.length);
    renderizar();
}
    /* let btn_elim = document.getElementById('btn_eliminar');
    let btn_elim_cant = [btn_elim.parentNode];
    let btn_elim_id = [btn_elim.parentElement.parentElement];
    console.log(btn_elim_id);
    console.log() */



