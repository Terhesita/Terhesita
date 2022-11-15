//Menu horizontal y lateral responsive
document.addEventListener("DOMContentLoaded", function(event){
    document.getElementById('btn-menu').addEventListener("click", mostarMenu);

    document.getElementById('back-menu').addEventListener('click', ocultarMenu);

    //Scroll de menu (categorias)
    $('#selected').on('click', function(){
        $('html, body').animate({scrollTop:50}, 300);
        /*var sobreMi = $('#about-me').offset().top + '10px';
        $('html, body').animate({
            scrollTop:sobreMi
        },1000);*/
    })

    $('#cv').on('click', function(){
        $('html, body').animate({scrollTop:100}, 300);
        document.getElementById('btn-cv').style.background= 'rgb(134,0,49)';
        document.getElementById('btn-cv').style.background= 'linear-gradient(90deg, rgba(134,0,49,1) 22%, rgba(208,0,76,1) 59%, rgba(222,79,103,1) 100%)';
        document.getElementById('btn-cv').animate({
            transform:'translateY(-12px)'
        }, 1000)
    })

    $(window).on('scroll', function(){
        if($(this).scrollTop()> 10){
            document.getElementById('header-id').style.paddingTop = '0px';
        }
        else{
            document.getElementById('header-id').style.paddingTop = '40px';
        }
    })
})


function mostarMenu(){
    document.getElementById('nav').style.right = "0px";
    document.getElementById('back-menu').style.display = 'block';
};

function ocultarMenu(){
    document.getElementById('nav').style.right = "-250px";
    document.getElementById('back-menu').style.display = 'none';
};

//Menu en top con jquery
/*$(window).on('scroll', function(){
    if($(window).scrollTop()){
        document.getElementById('header-id').style.marginTop = '0px';
    }
});*/

/*$(window).scroll(function(){
    if($(this).scrollTop() > 10){
        document.getElementById('header-id').style.paddingTop = '0px';
        document.getElementById('header-id').style.transition =  'all 300ms';
    }
    else{
        document.getElementById('header-id').style.paddingTop = '40px';
        document.getElementById('header-id').style.transition =  'all 300ms';
    }
})*/

//Footer
function irSobreMi(){
    $('html, body').animate({scrollTop:0}, 300);
}
