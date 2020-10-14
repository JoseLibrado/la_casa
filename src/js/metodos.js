

export const sushis = ['Mexicano', 'Estilo Oriental', 'Sierreño'];


// objeto que contiene los precios de los platillos
export const precios = {
    0: 90,
    1: 80,
    2: 75,
    3: 70
}

// array para guardar los registros de cupones
export const lista_registrados = [];

export const crearRegistro  = (cupon) => {    
    
    lista_registrados.push(cupon);   
}

export function imprimirCupones(){
    for(const item of lista_registrados){
        console.log(item.nombre, item.cupon);
        // console.log(item.cupon);
    }    
}
export function validarCupon(id){
    let validacion = false;
    for(const idCupon of lista_registrados){
        if(idCupon.cupon == id) {
            validacion = !false;
        }
    }

    return validacion;    

}

export const setPlatillos = ({sushis},platillo) => {
    const opciones = [0,1,2];    
    // console.log(sushis[opciones[1]]);
    
    for(let item of opciones){
        // console.log(opciones[i]);
        const opcion =  document.createElement('option');
        opcion.setAttribute('value',`${item}`);
        // console.log(sushis[opciones[i]]);
        opcion.innerText = sushis[item].nombre;
        // console.log(opcion);
        platillo.appendChild(opcion);
    }
}
 

export const getPlatillos = selector => {
    const opcion = selector.options[selector.selectedIndex].value;
    return opcion;
}

export function buscarPrecio(valor){
    const precio = precios[valor];
    if(precio){
        return precio;
    }
}


