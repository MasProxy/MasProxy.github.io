const app = Vue.createApp({
    mounted(){
        AOS.init();
        window.addEventListener("scroll", this.handleScroll)
    },
    unmounted(){
        window.removeEventListener("scroll", this.handleScroll)
    },
    methods: {
        handleScroll(event){
            var mybutton = document.getElementById("btn_up");
            if(window.scrollY > 20){
                $('#btn_up').css('display', 'block');
                mybutton.style.display = "block";
            }else{
                $('#btn_up').css('display', 'none');
            }

            if(window.scrollY > window.innerHeight - 150) {
                this.currentColor = 'rgba(245, 245, 245, 1)';
                $('.navbar').css('background-color', 'rgba(245, 245, 245, 1)');
                $('.navbar').addClass('shadow-sm');
            }else if(window.scrollY > window.innerHeight - 190){
                this.currentColor = 'rgba(245, 245, 245, 0.5)';
                $('.navbar').css('background-color', 'rgba(245, 245, 245, 0.5)');
                $('.navbar').addClass('shadow-sm');
            }else if(window.scrollY > window.innerHeight - 230){
                this.currentColor = 'rgba(245, 245, 245, 0.2)';
                $('.navbar').css('background-color', 'rgba(245, 245, 245, 0.2)');
                $('.navbar').addClass('shadow-sm');
            }else{
                this.currentColor = 'rgba(214, 203, 194, 0.5)';
                $('.navbar').css('background-color', 'rgba(214, 203, 194, 0.5)');
                $('.navbar').removeClass('shadow-sm');
            }
        },
        goTo(tujuan){
            var element = document.getElementById(tujuan);
            element.scrollIntoView();;
        },
        goUp(){
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            $('#btn_up').css('display', 'white');
        },
        // expand(){
        //     this.navbarExpand = $('.navbar-toggler').attr('aria-expanded');
        // }
    },watch:{
        // navbarExpand(value){
        //     if(value && (this.currentColor == 'rgba(245, 245, 245, 0)' || this.currentColor == '')){
        //         $('.navbar').css('background-color', 'rgba(214, 203, 194, 0.5)');
        //     }else{
        //         $('.navbar').css('background-color', this.currentColor);
        //     }
        // }
        // navBar(){
        //     if(this.navbarExpand){
        //         return {'background-color': '#d6cbc2'};
        //     }
        // }
    }
});

app
.mount("#app");

window.onload = function(){
    document.addEventListener("contextmenu",                          
        
    function(e) { 
        if (e.target.nodeName === "IMG") { 
            e.preventDefault(); 
        } 
    }, false); 
}

function goURL(url){
    window.open = url;
}