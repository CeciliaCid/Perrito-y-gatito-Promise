function animateElement(element, start, end, duration){ // necesitamos una posicion inicual y una posicion final
    //y su duracion
    return new Promise((resolve, reject)=>{
        
         //creamos una nueva promesa con new promise
        // delta es la velocidad, calcula cuanto rato se mueve y la distancia 
        // se multiplica por 40 para saber cuanto se demora en milisegundos
        const delta = (end - start)*40/duration;
        element.style.left = start;
        
        //modificamos el css desde js
        let counter = 0;
         
        //counter es = al tiempo
       
        const loop = setInterval(()=>{
            const currentPosition = start + delta * counter++; //esta iteracion termina cuando llegue a end
            element.style.left = currentPosition;
            if(start < end && currentPosition >= end){
                clearInterval(loop); // deja de ejecutar la funcion
                resolve();
            }else if(start > end && currentPosition <= end){
                clearInterval(loop); // deja de ejecutar la funcion
                resolve();
            }
            
            
        },40); // ejecuta una funcion cada cierto tiempo

    });
}
function animateElement2da(element, start, end, duration){ // necesitamos una posicion inicual y una posicion final
    //y su duracion
    return new Promise((resolve, reject)=>{
        
         //creamos una nueva promesa con new promise
        // delta es la velocidad, calcula cuanto rato se mueve y la distancia 
        // se multiplica por 40 para saber cuanto se demora en milisegundos
        const delta = (end - start)*40/duration;
        element.style.top = start;
        
        //modificamos el css desde js
        let counter = 0;
         
        //counter es = al tiempo
       
        const loop = setInterval(()=>{
            const currentPosition = start + delta * counter++; //esta iteracion termina cuando llegue a end
            element.style.top = currentPosition;
            if(start < end && currentPosition >= end){
                clearInterval(loop); // deja de ejecutar la funcion
                resolve();
            }else if(start > end && currentPosition <= end){
                clearInterval(loop); // deja de ejecutar la funcion
                resolve();
            }
            
            
        },40); // ejecuta una funcion cada cierto tiempo

    });
}



// Somos programadoras de la promesa
//==================== Promesa ==========================
//Somos las programadoras usuarias de la promesas
const div = document.getElementsByTagName("div");
const tamañoBody = div.offsetWidth;
const allImg = document.getElementsByTagName("img");
/*
console.log("Comienza promesa");
animateElement(allImg[0], -200, 750, 3000).then(()=>{
    console.log("Terminó la animacion de doge");
    return animateElement(allImg[1], -200, 600, 6000);
}).then(()=>{
    console.log("Termino la animacion de cate");
}).catch(()=>{

});
console.log("Holi soy codigo, despues de la promesa"); */


Promise.all([
    animateElement(allImg[0], 0, 750, 3000),
    animateElement(allImg[1], 0, 600, 6000)


]).then(()=>{
    console.log("Terminaron ambas animaciones");
    return Promise.all([
        animateElement2da(allImg[0], 0, 750, 3000),
        animateElement2da(allImg[1], 0, 600, 6000) 
    ]);
}).then(()=>{
    console.log("Terminaron ambas animaciones");
    return Promise.all([
        animateElement(allImg[0], 750, 0, 3000),
        animateElement(allImg[1], 600, 150, 6000) 
    ]);
}).then(()=>{
    console.log("Terminaron ambas animaciones");
    return Promise.all([
        animateElement2da(allImg[0], 750, 0, 3000),
        animateElement2da(allImg[1], 600, 0, 6000) 
    ]);

}).catch(()=>{

}); 