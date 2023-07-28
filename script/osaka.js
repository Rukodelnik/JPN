
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
        'latin-name': 'Universal Studios Japan',
        'japanese-name': "",
        'image': 'images/sightseeing/universalStudios_1.jpg',
        'link': 'universalStudios.html'
    },
    {
        "latin-name": "Minami(Namba)",
        "japanese-name": "ミナミ",
        "image": "images/sightseeing/minami_1.jpg",
        "link": "minami.html"
    },
    {
        "latin-name": "Osaka Aquarium Kaiyukan",
        "japanese-name": "海遊館",
        "image": "images/sightseeing/osakaAquarium_1.jpg",
        "link": "osakaAquarium.html"
    },
    {
        "latin-name": "Osaka Museum of History",
        "japanese-name": "大阪歴史博物館",
        "image": "images/sightseeing/osakaHistory_1.jpg",
        "link": "osakaHistory.html"
    },
    {
        "latin-name": "Tenjin Festival(Tenjin Matsuri)",
        "japanese-name": "天神祭",
        "image": "images/sightseeing/tenjinFestival_1.jpg",
        "link": "tenjinFestival.html"
    },
    {
        "latin-name": "Osaka Castle(Osakajo)",
        "japanese-name": "大阪城",
        "image": "images/sightseeing/osakaCastle_1.jpg",
        "link": "osakaCastle.html"
    },
    {
        "latin-name": "Sumiyoshi Taisha",
        "japanese-name": "住吉大社",
        "image": "images/sightseeing/sumiyoshiTaisha_1.jpg",
        "link": "sumiyoshiTaisha.html"
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
