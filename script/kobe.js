
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
        "latin-name": "Kobe Beef",
        "japanese-name": "",
        "image": "images/sightseeing/kobeBeef_1.jpg",
        "link": "kobeBeef.html"
    },
    {
        "latin-name": "Arima Onsen",
        "japanese-name": "有馬温泉",
        "image": "images/sightseeing/arimaOnsen_1.jpg",
        "link": "arimaOnsen.html"
    },
    {
        "latin-name": "Kobe Earthquake Memorial Museum",
        "japanese-name": "",
        "image": "images/sightseeing/kobeEarthquakeMemorialMuseum_1.jpg",
        "link": "kobeEarthquakeMemorialMuseum.html"
    },
    {
        "latin-name": "Kobe Nunobiki Ropeway",
        "japanese-name": "神戸布引ロープウェイ",
        "image": "images/sightseeing/kobeNunobikiRopeway_1.jpg",
        "link": "kobeNunobikiRopeway.html"
    },
    {
        "latin-name": "Sorakuen Garden",
        "japanese-name": "相楽園",
        "image": "images/sightseeing/sorakuenGarden_1.jpg",
        "link": "sorakuenGarden.html"
    },
    {
        "latin-name": "Mount Rokko",
        "japanese-name": "六甲山",
        "image": "images/sightseeing/mountRokko_1.jpg",
        "link": "mountRokko.html"
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
