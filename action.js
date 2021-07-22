window.onload = function(){
    document.addEventListener("contextmenu",                          
        
    function(e) { 
        if (e.target.nodeName === "IMG") { 
            e.preventDefault(); 
        } 
    }, false); 
}

window.onscroll = function(){
    mybutton = document.getElementById("btn_up");
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
    }else{
        mybutton.style.display = "none"
    }
}
function goTo(tujuan){
    var element = document.getElementById(tujuan);
    element.scrollIntoView();;
}

function goUp(){
    document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function goURL(url){
    window.open = url;
}