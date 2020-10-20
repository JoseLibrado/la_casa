

// export const sushis = ['Mexicano', 'Estilo Oriental', 'Sierreño'];


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

export const setOrden = (cat,elem,orden) => {
    const objetos = Object.values(cat[elem]);
    
    for(let i=0 ; i < objetos.length; i++){
        const opcion =  document.createElement('option');
        opcion.setAttribute('value',`${i}`);
        opcion.innerText = objetos[i].nombre;
        orden.appendChild(opcion);
    }
} 

export const getOpcion = selector => {
    const opcion = selector.options[selector.selectedIndex].value;
    return opcion;
}

export function buscarPrecio(valor){
    const precio = precios[valor];
    if(precio){
        return precio;
    }
}
export function posicionArr(arr){
    
    let array=[];
    if(array.length <= 0){
        for(let i=0; i < arr.length; i++){
            let ind = arr[i].getAttribute('id');
            array.push(ind);
        }
    }

    return array;
}

export function sumarPrecios(arrPrecios,total) {
    let subtotal = 0;

    for(let i=0; i < arrPrecios.length; i++){
        if(arrPrecios[i].textContent){
            subtotal += arrPrecios[i].textContent * 1;
        }
        
    }
    total.innerText = `Total $${subtotal}`;  

    return subtotal;    
}
