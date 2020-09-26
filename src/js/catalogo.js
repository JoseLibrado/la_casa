export const sushis = ['Mexicano', 'Estilo Oriental', 'Sierreño'];

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

