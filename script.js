$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu 
    $('.menu__button').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu__button i').toggleClass("active");
    });
});