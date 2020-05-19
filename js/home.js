var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    
    slideIndex++;
  
    if (slideIndex > x.length) {slideIndex = 1}
        x[slideIndex-1].style.display = "block";
        setTimeout(carousel, 3500); // Change image every 2 seconds
}


// var $caciLogo = $('#caci-logo');
// var $tdaLogo = $('#tda-logo');
// var $lgsLogo = $('#lgs-logo');
// var $prudentialLogo = $('#prudential-logo');
// $(document).ready(function(){
//     $caciLogo.on('mouseover',function(){
//         $('#caci-info').addClass("show");
//     });
//     $caciLogo.on('mouseout',function(){
//         $('#caci-info').removeClass("show");
//     });

//     $tdaLogo.on('mouseover',function(){
//         $('#tda-info').addClass("show");
//     });
//     $tdaLogo.on('mouseout',function(){
//         $('#tda-info').removeClass("show");
//     });

//     $lgsLogo.on('mouseover',function(){
//         $('#lgs-info').addClass("show");
//     });
//     $lgsLogo.on('mouseout',function(){
//         $('#lgs-info').removeClass("show");
//     });

//     $prudentialLogo.on('mouseover',function(){
//         $('#prudential-info').addClass("show");
//     });
//     $prudentialLogo.on('mouseout',function(){
//         $('#prudential-info').removeClass("show");
//     });

// });