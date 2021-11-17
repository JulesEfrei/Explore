//Parallax
var scene = document.querySelector('.scene');
var parallax = new Parallax(scene);

//Animation menu
function menu_animation(signe, display){
    anime({
        targets: '.right_menu',
        translateX: function(){
            if (signe == 'moins'){
                return -(20*window.innerWidth)/100;
            }else{
                return (20*window.innerWidth)/100;
            }
        },
        duration: 700,
        easing: 'cubicBezier(.17, .07, .82, .66)'
    });
    let hamburger = document.querySelector('.hamburger');
    hamburger.style.display = display;
}

function anim_list(){
    anime({
        targets: '.list_item',
        delay: anime.stagger(100, {start: 700}),
        duration: 300,
        opacity: [0, 1],
        translateX: [100, 0],
        easing: 'cubicBezier(.17, .07, .82, .66)'
    });
    anime({
        targets: '.title_right_menu',
        delay: 700,
        duration: 300,
        opacity: [0, 1],
        translateY: [-100, 0],
        easing: 'cubicBezier(.17, .07, .82, .66)'
    });
    anime({
        targets: '.list_network_anim',
        delay: anime.stagger(100, {from: 'center', start: 700}),
        duration: 300,
        opacity: [0, 1],
        translateY: [100, 0],
        easing: 'cubicBezier(.17, .07, .82, .66)'
    });
}

//Anim flèche
anime({
    targets: '.arrow',
    translateY: [25, 0],
    duration: 1000,
    loop: true,
    direction: 'alternate'
})

//Anim planète
anime({
    targets: '.left',
    duration: 2000,
    loop: true,
    direction: 'alternate',
    easing: 'linear',
    translateY: [-20, 20]
});

//Slider
var keys = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
  ];


var slider = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 200, 
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function(index, className) {
            return '<div class="' + className + '">' + keys[index] + "</div>";
        }
    }
});

//animation Slider
slider.on('slideChangeTransitionStart', function(){
    anime({
        targets: '.title', 
        translateX: [500, 0],
        opacity: [0, 1],
        easing: 'easeOutElastic(1, 10)',
        duration: 2000
    });
    anime({
        targets: '.resume', 
        translateX: [250, 0],
        opacity: [0, 1],
        delay: 300,
        easing: 'easeOutElastic(1, 10)',
        duration: 2000
    });
    anime({
        targets: '.anim_text_list', 
        translateY: [250, 0],
        opacity: [0, 1],
        easing: 'easeOutElastic(1, 10)',
        duration: 2000
    });
});