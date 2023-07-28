
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
        "latin-name": "Shiroi Koibito Park",
        "japanese-name": "白い恋人パーク",
        "image": "images/sightseeing/shiroiKoibitoPark_1.jpg",
        "link": "shiroiKoibitoPark.html"
    },
    {
        "latin-name": "Sapporo Beer Museum",
        "japanese-name": "サッポロビール博物館",
        "image": "images/sightseeing/sapporoBeerMuseum_1.jpg",
        "link": "sapporoBeerMuseum.html"
    },
    {
        "latin-name": "Mount Moiwa",
        "japanese-name": "藻岩山",
        "image": "images/sightseeing/mountMoiwa_1.jpg",
        "link": "mountMoiwa.html"
    },
    {
        "latin-name": "Historic Village of Hokkaido",
        "japanese-name": "開拓の村",
        "image": "images/sightseeing/historicVillageHokkaido_1.jpg",
        "link": "historicVillageHokkaido.html"
    },
    {
       "latin-name": "Moerenuma Park",
       "japanese-name": "モエレ沼公園",
       "image": "images/sightseeing/moerenumaPark_1.jpg",
       "link": "moerenumaPark.html" 
    },
    {
        "latin-name": "Sapporo Snow Festival",
        "japanese-name": "さっぽろ雪まつり",
        "image": "images/sightseeing/sapporoSnowFestival_1.jpg",
        "link": "sapporoSnowFestival.html"
    },
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
