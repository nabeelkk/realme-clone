window.addEventListener('scroll',function(){
    var nav=this.document.querySelector("nav");
    nav.classList.toggle("sticky",this.window.scrollY > 10);
})