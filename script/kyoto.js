
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
        'latin-name': 'Fushimi Inari Shrine',
        'japanese-name': "伏見稲荷大社",
        'image': 'images/sightseeing/fushimiInari_1.jpg',
        'link': 'fushimiInari.html'
    },
    {
        'latin-name': "Nijo Castle(Nijojo)",
        "japanese-name": "二条城",
        "image": "images/sightseeing/nijoCastle_1.jpg",
        "link": "nijoCastle.html"
    },
    {
        "latin-name": "Kyoto Railway Museum",
        "japanese-name": "",
        "image": "images/sightseeing/railwayMuseum_1.jpg",
        "link": "railwayMuseum.html"
    },
    {
        "latin-name": "Sento Imperial Palace",
        "japanese-name": "仙洞御所",
        "image": "images/sightseeing/sentoImperialPalace_1.jpg",
        "link": "sentoImperialPalace.html"
    },
    {
        "latin-name": "Nishiki Market",
        "japanese-name": "錦市場",
        "image": "images/sightseeing/nishikiMarket_1.jpg",
        "link": "nishikiMarket.html"
    },
    {
        "latin-name": "Kyoto Imperial Palace",
        "japanese-name": "京都御所",
        "image": "images/sightseeing/kyotoImperialPalace_1.jpg",
        "link": "kyotoImperialPalace.html"
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
