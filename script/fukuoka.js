
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
        "latin-name": "Seaside Momochi",
        "japanese-name": "シーサイドももち",
        "image": "images/sightseeing/seasideMomochi_1.jpg",
        "link": "seasideMomochi.html"
    },
    {
        "latin-name": "Shofukuji Temple",
        "japanese-name": "聖福寺",
        "image": "images/sightseeing/shofukujiTemple_1.jpg",
        "link": "shojukujiTemple.html"
    },
    {
        "latin-name": "Ohori Park",
        "japanese-name": "大濠公園",
        "image": "images/sightseeing/ohoriPark_1.jpg",
        "link": "ohoriPark.html"
    },
    {
        "latin-name": "Uminokamichi Seaside Park",
        "japanese-name": "海の中道海浜公園",
        "image": "images/sightseeing/uminokamichiSeasidePark_1.jpg",
        "link": "uminokamichiSeasidePark.html"
    },
    {
        "latin-name": "Food Stalls(Yatai)",
        "japanese-name": "屋台",
        "image": "images/sightseeing/foodStalls_1.jpg",
        "link": "foodStalls.html"
    },
    {
        "latin-name": "Hakata Gion Yamakasa Festival",
        "japanese-name": "博多祇園山笠",
        "image": "images/sightseeing/hakataGionYamakasa_1.jpg",
        "link": "hakataGionYamakasa.html"
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
