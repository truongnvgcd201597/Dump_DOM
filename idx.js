function log(){
    console.log('Hokkaido');
}

function setDebounce(callback, wait){
    let timeoutId; 
 
    return function(){
       if(timeoutId){
         clearTimeout(timeoutId);
       }
        
       timeoutId = setTimeout(callback, wait);
    }
}

const deBounce = setDebounce(log, 1000);
deBounce();
deBounce();
deBounce();

function setThrottle(callback, wait){
    let checkThrottle = false;

    return function(){
         if(checkThrottle) return;
         checkThrottle = true;
         setTimeout(()=>{
            callback();
            checkThrottle = false;
         }, wait)
    }
}

const throttle = setThrottle(log, 500);
throttle();
throttle();
throttle();

setTimeout(setThrottle(throttle, 600))
setTimeout(setThrottle(throttle, 600))
setTimeout(setThrottle(throttle, 600))
setTimeout(setThrottle(throttle, 600))
setTimeout(setThrottle(throttle, 600))