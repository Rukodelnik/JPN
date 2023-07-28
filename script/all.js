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
        'latin-name': 'Fushimi Inari Shrine',
        'japanese-name': "伏見稲荷大社",
        'image': 'images/sightseeing/fushimiInari_1.jpg',
        'link': 'fushimiInari.html'
    },
    {
        'latin-name': 'Universal Studios Japan',
        'japanese-name': "",
        'image': 'images/sightseeing/universalStudios_1.jpg',
        'link': 'universalStudios.html'
    },
    {
        'latin-name': "Tsukiji Outer Market",
        'japanese-name': "築地場外市場",
        'image': 'images/sightseeing/tsukijiMarket_1.jpg',
        'link': 'tsukijiMarket.html'
    },
    {
        'latin-name': "Nijo Castle(Nijojo)",
        "japanese-name": "二条城",
        "image": "images/sightseeing/nijoCastle_1.jpg",
        "link": "nijoCastle.html"
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
    },
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
    },
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
