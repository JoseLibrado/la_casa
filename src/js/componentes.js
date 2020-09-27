import {sushis,lista_registrados, imprimirCupones, crearRegistro, validarCupon} from './catalogo';
import {Cupon} from '../classes/cupon';
import '../css/componentes.css' ; //consumiendo los estilos.


// referencias 
const main = document.querySelector('.main');
const promociones = document.querySelector('.menu-promociones');
const ordenes = document.querySelector('.menu-orden');
const sushi = document.querySelector('#principal');
const mensage = document.querySelector('#mensaje');
const registro_cupon = document.querySelector('.registro-cupones');
const nombre = document.querySelector('#nombre');
const cuponRegistrado = document.querySelector('#cupon');

const btn_registrar = document.querySelector('#enviar');
const btn_cupon = document.querySelector('#cuponera');
const btn_ordenes = document.querySelector('#orden');

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

btn_ordenes.addEventListener('click', () => {

    if( ordenes.classList.contains('hidden') ){
        ordenes.classList.remove('hidden');  
        promociones.classList.remove('b100');           
        promociones.classList.add('b60');    
    } else {
        ordenes.classList.add('hidden'); 
        promociones.classList.remove('b60');
        promociones.classList.add('b100');      
    }

});

btn_registrar.addEventListener('click',() => {

    validacionCampos();
    if(validacionCampos()){       
        mensage.innerText = 'Completa la información';
    } else {
        const cuponNuevo = new Cupon(nombre.value, cuponRegistrado.value);
        const metodoValidador = validarCupon(cuponRegistrado.value);
        if(!metodoValidador){
            crearRegistro(cuponNuevo);
            mensage.innerText = '';
            mensage.classList.remove('alert');
            mensage.classList.add('success');
            mensage.innerText = 'Cúpon registado con éxito';            
        } else if(metodoValidador){
            mensage.innerText = '';
            mensage.removeAttribute('class');
            mensage.classList.add('alert');
            mensage.innerText = 'Tu cúpon ah sido registado anteriormente';
        }   
        
    }

});

const validacionCampos = () => {
    let validacion = false;
    if(nombre.value == '' || cuponRegistrado.value == ''){
        mensage.classList.add('alert');
        if(nombre.value == ''){
            nombre.focus();
        }
        else if(cuponRegistrado.value = ''){
            cuponRegistrado.focus();
        }
        validacion = true;
    } 
    return validacion;
}







// opcion.setAttribute('value','1');
// console.log( opcion );