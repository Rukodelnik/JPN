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
        "latin-name": "Shinyokohama Ramen Museum",
        "japanese-name": "新横浜ラーメン博物館",
        "image": "images/sightseeing/ramenMuseum_1.jpg",
        "link": "ramenMuseum.html"
    },
    {
        "latin-name": "Cup Noodles Museum",
        "japanese-name": "安藤百福発明記念館",
        "image": "images/sightseeing/cupNoodlesMuseum_1.jpg",
        "link": "cupNoodlesMuseum.html"
    },
    {
        "latin-name": "Zoorasia",
        "japanese-name": "ズーラシア",
        "image": "images/sightseeing/zoorasia_1.jpg",
        "link": "zoorasia.html"
    },
    {
        "latin-name": "Yokohama Chinatown",
        "japanese-name": "横浜中華街",
        "image": "images/sightseeing/yokohamaChinatown_1.jpg",
        "link": "yokohamaChinatown.html"
    },
    {
        "latin-name": "Minato Mirai 21",
        "japanese-name": "みなとみらい 21",
        "image": "images/sightseeing/minatoMirai21_1.jpg",
        "link": "minatoMirai21.html"   
    },
    {
        "latin-name": "Sankeien Garden",
        "japanese-name": "三溪園",
        "image": "images/sightseeing/sankeienGarden_1.jpg",
        "link": "sankeienGarden.html"
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
