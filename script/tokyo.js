
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
        'latin-name': 'Sensoji Temple',
        'japanese-name': "浅草寺",
        'image': 'images/sightseeing/sensoji_1.jpg',
        'link': 'sensoji.html'
    },
    {
        'latin-name': 'Tokyo Skytree',
        'japanese-name': '東京スカイツリー',
        'image': 'images/sightseeing/skytree_1.jpg',
        'link': 'skytree.html'
    },
    {
        'latin-name': "Tokyo National Museum",
        'japanese-name': "東京国立博物館",
        'image': 'images/sightseeing/nationalMuseum_1.jpg',
        'link': 'nationalMuseum.html'
    },
    {
        'latin-name': "Ghibli Museum",
        "japanese-name": "三鷹の森ジブリ美術館",
        "image": "images/sightseeing/ghibliMuseum_1.jpg",
        "link": "ghibliMuseum.html"
    },
    {
        "latin-name": "Yoyogi Park",
        "japanese-name": "代々木公園",
        "image": "images/sightseeing/yoyogi_1.jpg",
        "link": "yoyogi.html"
    },
    {
        "latin-name": "Tokyo Imperial Palace",
        "japanese-name": "皇居",
        "image": "images/sightseeing/imperialPalace_1.jpg",
        "link": "imperialPalace.html"
    },
    {
        'latin-name': "Tsukiji Outer Market",
        'japanese-name': "築地場外市場",
        'image': 'images/sightseeing/tsukijiMarket_1.jpg',
        'link': 'tsukijiMarket.html'
    },
    {
        "latin-name": "Imperial Palace East Gardens",
        "japanese-name": "皇居東御苑",
        "image": "images/sightseeing/imperialPalaceEastGardens_1.jpg",
        "link": "imperialPalaceEastGardens.html"
    },
    {
        "latin-name": "Hama Rikyu",
        "japanese-name": "浜離宮",
        "image": "images/sightseeing/hamaRikyu_1.jpg",
        "link": "hamaRikyu.html"
    },
    {
        "latin-name": "Koishikawa Korakuen",
        "japanese-name": "小石川後楽園",
        "image": "images/sightseeing/koishikawaKorakuen_1.jpg",
        "link": "koishikawaKorakuen.html"
    },
    {
        "latin-name": "Akihabara",
        "japanese-name": "秋葉原",
        "image": "images/sightseeing/akihabara_1.jpg",
        "link": "akihabara.html"
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
