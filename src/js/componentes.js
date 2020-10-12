import {sushis,lista_registrados, imprimirCupones, crearRegistro, validarCupon} from './catalogo';
import {Cupon} from '../classes/cupon';
import '../css/componentes.css' ; //consumiendo los estilos.


// referencias 
const body = document.querySelector('body');
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
const btn_modal = document.querySelectorAll('#btn_modal');

const divModal = document.createElement('div');
const img_modal = document.createElement('img');  


// for(let i=0; i< sushis.length; i++){
    
//     const opcion = document.createElement('option');
//     opcion.setAttribute('value',`${i}`);  
//     opcion.innerText = `${sushis[i]}`;
//     sushi.append(opcion);  
// }


btn_cupon.addEventListener('click', () =>{
    
    if( registro_cupon.classList.contains('hidden') ){
        registro_cupon.classList.remove('hidden');     
        btn_cupon.classList.add('selected');
    } else {
        registro_cupon.classList.add('hidden');  
        btn_cupon.classList.remove('selected');     
    }    
});

btn_ordenes.addEventListener('click', () => {

    if( ordenes.classList.contains('hidden') ){
        ordenes.classList.remove('hidden');  
        promociones.classList.remove('b100');           
        promociones.classList.add('b60');   
        btn_ordenes.classList.add('selected'); 
    } else {
        ordenes.classList.add('hidden'); 
        promociones.classList.remove('b60');
        promociones.classList.add('b100');     
        btn_ordenes.classList.remove('selected');  
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


divModal.addEventListener('click',e => {

    // console.log(e.target);
    if(e.target === divModal){
        divModal.removeChild(img_modal);
        body.removeChild(divModal);
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

const add_modal = () => {

        btn_modal.forEach(elm => {
            
            elm.addEventListener('click', (e) => {

                // console.log(e.target);
                divModal.classList.add('modal');
                body.appendChild(divModal);
                img_modal.classList.add('img-modal');
                img_modal.src = '../assets/sushi2.jpg';
                divModal.appendChild(img_modal);
        });
        
    });    
}

add_modal();