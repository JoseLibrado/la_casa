import {sushis,lista_registrados, imprimirCupones, crearRegistro} from './catalogo';
import {Cupon} from '../classes/cupon';
import '../css/componentes.css' ; //consumiendo los estilos.


// referencias 
const sushi = document.querySelector('#principal');
const btn_cupon = document.querySelector('#cuponera');
const registro_cupon = document.querySelector('.registro-cupones');
const btn_registrar = document.querySelector('#enviar');

const nombre = document.querySelector('#nombre');
const cuponRegistrado = document.querySelector('#cupon');



for(let i=0; i< sushis.length; i++){
    
    const opcion = document.createElement('option');
    opcion.setAttribute('value',`${i}`);  
    opcion.innerText = `${sushis[i]}`;
    sushi.append(opcion);  
}

btn_cupon.addEventListener('click', () =>{
    
    if( registro_cupon.classList.contains('hidden') ){
        registro_cupon.classList.remove('hidden');       
    } else {
        registro_cupon.classList.add('hidden');       
    }    
});
btn_registrar.addEventListener('click',() => {

    // console.log(nombre.value);
    // console.log(cuponRegistrado.value);
    const cuponNuevo = new Cupon(nombre.value, cuponRegistrado.value);
    crearRegistro(cuponNuevo);
    imprimirCupones();

});







// opcion.setAttribute('value','1');
// console.log( opcion );