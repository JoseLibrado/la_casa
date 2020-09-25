import {sushis} from './catalogo';
import '../css/componentes.css' ; //consumiendo los estilos.


// referencias 
const sushi = document.querySelector('#principal');

for(let i=0; i< sushis.length; i++){
    
    const opcion = document.createElement('option');
    opcion.setAttribute('value',`${i}`);  
    opcion.innerText = `${sushis[i]}`;
    sushi.append(opcion);  
}

// opcion.setAttribute('value','1');
// console.log( opcion );