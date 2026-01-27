console.log(window);

a =10;
console.log(window.a);


function b(){
    return 20;
}
console.log(window.b());

//timing funcions

window.setTimeout(()=>{
    console.log("welcome");
},3000);

    let notify = document.getElementById("notify");
    function showNotification(){
        notify.style.display = "block";


        setTimeout(() => {
            notify.style.display= "none";
        }, 5000);

    }

    let clock = document.getElementById("clock");
     let clockInterval = setInterval(()=>{
        let date = new Date();
        let mints = date.getMinutes();
        let hours = date.getHours();
        let second = date.getSeconds();
        // console.log(mints, " ", hours, " ", second);

        clock.innerText =   `${hours} : ${mints} : ${second}`
        

    });

    let alertTimeOut = setTimeout(()=>{
        alert("This is a delayed alert");
        

    },5000);

    function stopAlert(){
        clearTimeout(alertTimeOut);
    }
    function stopClock(){
        clearTimeout(clockInterval);
    }