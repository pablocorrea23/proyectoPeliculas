export const GuardarEnStorage = (clave, elemento) =>{

    //Comprobar los elementos que ya tenemos en el local localStorage
    let elementos = JSON.parse(localStorage.getItem(clave));

    console.log(elementos);

    //Comprobar si es un array
    if(Array.isArray(elementos)){
        //añadir dentro del array un elemento nuevo
        elementos.push(elemento);
    }else{
        //Crear un array con el nuevo elemento
        elementos = [elemento];
    }

    //Guardar en el localStorage
    localStorage.setItem(clave, JSON.stringify(elementos));

    //Devolver el objeto guardado
    return elemento;
}