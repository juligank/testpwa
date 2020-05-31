



/*
//console.log('SW: hola mundo 2');
//request.destiantion --> imagen, script, etc


//llamada al service worker  y listener  
self.addEventListener('fetch', event => {

    // verifica si la peticion es una imagen 
    if (event.request.url.includes('.jpg')){
    console.log(event.request.url);
    //forma validas de cargar imagen
    //fotoReq = fetch('img/main.jpg') 
    //fotoReq = fetch(event.request.url)
    //fotoReq = fetch(event.request
   
}

*/

// llamada al service worker 
self.addEventListener('fetch', event => {
   //if (event.request.url.includes('style.css')) {

   //responde con el mismo request
   const resp = fetch(event.request)
      .then(resp => {
         if (resp.ok) {
            return resp;
         } else {
            return fetch('img/main.jpg');
         }
      });


   event.respondWith(resp);

   // }


});


