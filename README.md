# Explore template
## With Swiper.js, anime.js & parallax.js

Make a moderne website using these JavaScript libraries by creating a prallax effect and an animated carousel. (No responsive)

### Demo : 
- Clone the git repository with the command bellow :

```bash
mkdir Explore
cd Explore
git clone https://github.com/JulesEfrei/Explore.git
```
- Next, open the html file and enjoy it !

### Why does this files ?

- `index.html` : Core of the Web page
- `style.scss` : Style of the index.html (Using Sass)
- `style.css.map` : map of the css (Creating when scss file is compiled)
- `anime.min.js` : Import of anime.js library
- `main.js` : main JavaScript code
- `Font folder` : Import external font

### Why Javascript & Sass

I'm using Sass by default in all my front-end project for these features. Of course, you can understand all the project without a knoledge of Sass (Sass is a css tools). Then JavaScript is a basic for all moderne and dynamique website for the aniation and the flexibility with the DOM. 

## Getting Started

### Download

```bash
npm install anime.js --save
```

### File include

Link `anime.min.js` and other libraries import in your `HTML` file :

```html
<script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
<script src="./assets/js/anime.min.js"></script>
```

Then create a `main.js` file in your project and include it in your `HTML` :

```bash
touch main.js
```

```html
<script src="./assets/js/main.js"></script>
```

## Parallax Effect on imgages

Our Website is about space but the concept is the same with all images as you would

First, we're creating a new section in our `html` with our images :

```html
<section id="main">
        <div class="scene">
            <div class="top" data-depth="0.2">
                <img src="./assets/img/background.png" alt="">
            </div>
            <div class="planete" data-depth="0.6">
                <img src="./assets/img/earth.png" alt="">
            </div>
            <h1 class="main_title parallax">PLANETES</h1>
            <div class="bottom" data-depth="0.2">
                <img src="./assets/img/mid.png" alt="">
            </div>
            <div class="forward" data-depth="0.1">
                <img src="./assets/img/foreground.png" alt="">
            </div>
        </div>
    </section>
```

Note that we have a `.scene` container. It must be here for the parallax.

Then in our `main.js`, we get the `.scene` conatiner and we create a new parallax with it.

```js
var scene = document.querySelector('.scene');
var parallax = new Parallax(scene);
```

Now, we add `data-depth="value between 0 & 1"` attribute in each conatiner of image like the up example. More the value is power, more the parallax will be intense on the image.

## Carousel with Swiper

Like the parallax effect, we're creating a new section in our `HTML` :

```html
<section id="slider">
        <!-- required div -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
        <!-- 01 -->
                <div class="swiper-slide">
                    <div class="left mercure"></div>
                    <div class="planet_text_container">
                        <H1 class="title">MERCURY</H1>
                        <p class="resume">
                            Mercury is the closest planet to the Sun but, perhaps
                            surprisingly, it does not have the highest temperatures. It is
                            the second densest planet of the Solar System, but also the
                            smallest planet. The structure of Mercury makes it the most
                            similar planet to Earth.
                        </p>
                        <ul class="anim_text_list">
                            <li>ORBIT PERIOD: 87.97 Earth days</li>
                            <li>KNOWNS MOONS : None</li>
                        </ul>
                    </div>
                </div>
        <!-- 02 -->
                <div class="swiper-slide">
                    <div class="left venus"></div>
                    <div class="planet_text_container">
                        <H1 class="title">VENUS</H1>
                        <p class="resume">
                            Venus is the second planet from the Sun and the
                            sixth-largest. Together with Mercury, they are the only
                            planets without a satellite, even though Mercury is closer to
                            the sun, Venus is the hottest planet.
                        </p>
                        <ul class="anim_text_list">
                            <li>ORBIT PERIOD: 224.70 Earth days</li>
                            <li>KNOWNS MOONS : None</li>
                        </ul>
                    </div>
                </div>
        <!-- required div -->
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>
```

There are a lot of information here but we just need to remember that you must use a `swiper-container` div that include your `swiper-slide`. Then, for the pagination of our carousel we add a `swiper-pagination` container.

NB : my `swpier-pagination` is empty. I add the value directly in JavaScript but you can add them in the html file.

In the `main.js` file, we create a new instance of Swiper. It take on argument the `.swiper-container` and an object with the options of your carousel.

```js
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
```

List the options :

- **loop** : *boolean*. Allow the loop in the carousel. When we slide on the last slide, the first slide follow.
- **spaceBetween** : *number*. Set the space between slide.
- **pagination** : *object*. Customize the control on our carousel.
    - **el** : *css class*. Set the pagination container.
    - **clickable** : *boolean*. If true, we can navigate with the pagination.
    - **renderBullet** : *function*. It take on arguments an index and a class name for the style in css. This function create all pagination items we need from the array `keys`

So, we add the `keys` array in `main.js` :

```js
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
```

More information about Swiper in their [documentation](https://swiperjs.com/swiper-api)

## Add animation on the carousel with anime.js

In Swiper, there is a method called `slideChangeTransitionStart` that we use to set action on a change of slide. We're adding the animation with this method. For the animations, we're using `anime.js` library. It work very easy, here is the [documentation](https://animejs.com/documentation/) of it 

### How works anime.js

In our `main.js`, we simply use the anime function and set the animation with all property as you can see in the doc.

```js
anime({
        targets: '.title', 
        translateX: [500, 0],
        opacity: [0, 1],
        easing: 'easeOutElastic(1, 10)',
        duration: 2000
    });
```

```diff
! The targets key is required. It takes on value the class (or id) of the element in HTML 
```
Then, there are other option for our animation. 
Here we have a translateX from x = 500 to x = 0,
an opacity from 0 to 1,
an easing and the duration of the animation.

So in our project, I tell you we're using `slideChangeTransitionStart` Swiper method.
Finally 
```js
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
```


## Enjoy ✌🏻

I hope I help you as much as you want. Now, you're able to create modern website with these three libraries and create trend website ! Here we've made a project with the three but you can use them individually.

Thanks for reading !

Have fun & Code !