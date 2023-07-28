const locationTemplate = document.querySelector("[data-location-template]");
const locationContainer = document.querySelector("[data-content-container]");
const searchInput = document.querySelector("[data-search]");

let locations = [];

searchInput.addEventListener('input', e =>{
    const value = e.target.value.toLowerCase();
    locations.forEach(location =>{
        const isVisible = location['latin-name'].toLowerCase().includes(value) || location['japanese-name'].toLowerCase().includes(value)
        console.log(isVisible)
        location.element.classList.toggle("hide", !isVisible);
    });
});
const data = [
    {
        "latin-name": "Korankei",
        "japanese-name": "香嵐渓",
        "image": "images/sightseeing/korankei_1.jpg",
        "link": "korankei.html"
    },
    {
        "latin-name": "Nagoya Castle",
        "japanese-name": "名古屋城",
        "image": "images/sightseeing/nagoyaCastle_1.jpg",
        "link": "nagoyaCastle.html"
    },
    {
        "latin-name": "Toyota Factory Tour and Museums",
        "japanese-name": "",
        "image": "images/sightseeing/toyotaMuseum_1.jpg",
        "link": "toyotaMuseum.html"
    },
    {
        "latin-name": "Tokugawa Art Museum",
        "japanese-name": "徳川美術館",
        "image": "images/sightseeing/tokugawaArtMuseum_1.jpg",
        "link": "tokugawaArtMuseum.html"
    },
    {
        "latin-name": "Nagashima Resort",
        "japanese-name": "",
        "image": "images/sightseeing/nagashimaResort_1.jpg",
        "link": "nagashimaResort.html"
    },
    {
        "latin-name": "SCMAGlEV and Railway Park",
        "japanese-name": "",
        "image": "images/sightseeing/scmaglev_1.jpg",
        "link": "scmaglev.html"
    }
];
locations = data.map(location =>{
    const box = locationTemplate.content.cloneNode(true).children[0];
    const link = box.querySelector('[data-link]');
    const image = box.querySelector("[data-image]");
    const latinName = box.querySelector("[data-latin-name]");
    const japName = box.querySelector('[data-japanese-name]');
    link.href = location.link;
    image.src = location.image;
    latinName.textContent = location["latin-name"];
    japName.textContent = location["japanese-name"];
    locationContainer.append(box);
    return{'latin-name': location["latin-name"], 'japanese-name': location["japanese-name"], element: box};
});
