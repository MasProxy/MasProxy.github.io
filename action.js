window.onload = function(){
    document.addEventListener("contextmenu",                          
        
    function(e) { 
        if (e.target.nodeName === "IMG") { 
            e.preventDefault(); 
        } 
    }, false); 
}

function goTo(tujuan){
    var element = document.getElementById(tujuan);
    element.scrollIntoView();;
}