textHours = document.getElementById("ellite-hours");
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function initClock(){
    var date = new Date();
    var hour = date.getHours();
    var sec = date.getSeconds();
    var min = date.getMinutes();
    
    var form = (hour < 10 ? '0' + hour : hour) + ':' + (min < 10 ? '0' + min : min) +
        ':' + (sec < 10 ? '0' + sec : sec);
    
    textHours.innerHTML = form;
}
window.setInterval(initClock, 1000);
 
 