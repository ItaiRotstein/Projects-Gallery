'use strict'

var timeNow = Date.now()
console.log(timeNow);

const gProjects = [
    {
        id: "minesweeper",
        name: "Minesweeper",
        title: "Sweep The Mines",
        desc: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
        url: "https://itairotstein.github.io/Minesweeper/",
        img: "img/portfolio/minesweeper.png",
        client: 'Coding Academy',
        category: 'Computer Games',
        publishedAt: 1649069289179,
        labels: ["mines", "firstsprint"],
    },
    {
        id: "cinema",
        name: "Cinema Booking",
        title: "Book Cinema Seats",
        desc: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
        url: "https://itairotstein.github.io/Cinema-Booking-Project/",
        img: "img/portfolio/cinema.png",
        client: 'Coding Academy',
        category: 'Business Apps',
        publishedAt: 1649076486735,
        labels: ["seats", "booking"],
    },
    {
        id: "chess-moves",
        name: "Chess Moves",
        title: "Game Of Kings",
        desc: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
        url: "https://itairotstein.github.io/Chess-Moves/",
        img: "img/portfolio/chess-moves.png",
        client: 'Coding Academy',
        category: 'Computer Games',
        publishedAt: 1649077096044,
        labels: ["chess", "games"],
    },
    {
        id: "pac-man",
        name: "Pac-Man",
        title: "Run For Your Life",
        desc: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
        url: "https://itairotstein.github.io/Pac-Man/",
        img: "img/portfolio/pac_man.png",
        client: 'Coding Academy',
        category: 'Computer Games',
        publishedAt: 1649077096044,
        labels: ["pacman", "games"],
    },
    {
        id: "picture-game",
        name: "Picture Game",
        title: "Click The Right Answer",
        desc: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
        url: "https://itairotstein.github.io/The-Picture-Game/",
        img: "img/portfolio/picture_game.png",
        client: 'Coding Academy',
        category: 'Computer Games',
        publishedAt: 1649077096044,
        labels: ["pictures", "games"],
    },
    {
        id: "touch-the-nums",
        name: "Touch The Nums",
        title: "Count & Click",
        desc: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
        url: "https://itairotstein.github.io/Touch-The-Nums/",
        img: "img/portfolio/touch_numbers.png",
        client: 'Coding Academy',
        category: 'Computer Games',
        publishedAt: 1649077096044,
        labels: ["numbers", "games"],
    },
]
function getProjects() {
    return gProjects
}




