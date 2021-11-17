# Explore template
## With Swiper.js, anime.js & parallax.js

Make a moderne website using these JavaScript libraries by creating a prallax effect and an animated carousel. (No responsive)

### Demo : 
- Clone the repository git the command bellow :

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
<script src="./assets/js/main.js"></script>
```

Then create a `main.js` file in your project and include it in your `HTML` :

```bash
touch main.js
```

```html
<script src="./assets/js/anime.min.js"></script>
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

There are a lot of information here but we just need to remember that you must use a `swiper-container` div that include your `swiper slide`. Then, for the pagination of our carousel we add a `swiper pagination` container.

NB : my `swpier-pagination` is empty. I add the value directly in the JavaScript