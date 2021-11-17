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

Link `anime.min.js` and other library import in your `HTML` file :

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