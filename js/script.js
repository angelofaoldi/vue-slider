
// INIZIALIZZIAMO VUE
// createApp = funzione freccia che richiede tot parametri in una funzione

const { createApp } = Vue;

// const optionObj = {data: function(){return {title: 'Hello Vue!',};},};

// const app = createApp(optionObj);
// app.mount('#app');

/* AUMENTARE LA LEGGIBILITà _________________________________________________

- possiamo definire un oggetto che all'interno avrà una proprietà (data)
- nella propietà (data) salviamo una funzione

data: function(){}      si può abbreviare così:      data(){}

- il tutto ci restituisce un oggetto
data(){return{}}

- optionObj lo passiamo a createApp
- il risultato di questa operazione 

_____________________________________________________________________________*/

// createApp().mount('#app');
// createApp = "metodo con argomento" che restituisce un altro metodo .mount
// in questo modo l'applicazione che creiamo con Vue sarà agganciata al DOM
// da questo momento in poi tutto ciò che vive nel div id="app" sarà monitorato da Vue

// __________________________________________________________________________

createApp({
    data() {
      return {
        games: [
          {
            image: "img/01.webp",
            title: "Marvel's Spiderman Miles Morales",
            text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
          },
          {
            image: "img/02.webp",
            title: "Ratchet & Clank: Rift Apart",
            text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
          },
          {
            image: "img/03.webp",
            title: "Fortnite",
            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
          },
          {
            image: "img/04.webp",
            title: "Stray",
            text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
          },
          {
            image: "img/05.webp",
            title: "Marvel's Avengers",
            text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
          },
        ],
        currentIndex: 0,
      };
    },
    

    // prev + next scorrono e si resettano = ciclo infinito
    methods: {
      nextImg() {
        if (this.currentIndex < this.games.length - 1) {this.currentIndex++;} 
        else {this.currentIndex = 0;}
      },

      prevImg() {
        if (this.currentIndex > 0) {this.currentIndex--;}
        else {this.currentIndex = this.games.length - 1;}
      },
    },
  }).mount("#app");