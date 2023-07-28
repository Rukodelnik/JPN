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
        "latin-name": "Peace Memorial Park",
        "japanese-name": "平和記念公園",
        "image": "images/sightseeing/peaceMemorialPark_1.jpg",
        "link": "peaceMemorialPark.html"
    },
    {
        "latin-name": "Mazda Museum",
        "japanese-name": "",
        "image": "images/sightseeing/mazdaMuseum_1.jpg",
        "link": "mazdaMuseum.html"
    },
    {
        "latin-name": "Hiroshima Castle",
        "japanese-name": "広島城",
        "image": "images/sightseeing/hiroshimaCastle_1.jpg",
        "link": "hirashimaCastle.html"
    },
    {
        "latin-name": "Shukkeien Garden",
        "japanese-name": "縮景園",
        "image": "images/sightseeing/shukkeienGarden_1.jpg",
        "link": "shukkeienGarden.html"
    },
    {
        "latin-name": "Downtown Hiroshima",
        "japanese-name": "",
        "image": "images/sightseeing/downtownHiroshima_1.jpg",
        "link": "downtownHiroshima.html"
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
