

// Detectar si podemos usar Service Workers
var url = window.location.href;
var swLocation = '/testpwa/sw.js'
if (url.includes('localhost')){
    swLocation =  '/sw.js';
}

if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register(swLocation)
    .then(reg =>{
    //    setTimeout(()=>{
    //         reg.sync.register('posteo de gatitos');
    //         console.log('se enviaron fotos al server ');
    //    },5000);
    // })

     Notification.requestPermission().then(result =>{
        console.log(result);
        reg.showNotification('Hola mundoo');
    } )

})};




