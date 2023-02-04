const render = document.getElementById("render");

const urls = [
    [
        "Account",
        "Wikipedia",
        "GitHub",
        "BBC",
        "Translate",
        "Reddit",
        "Crunchyroll",
        "Gogoanime",
        "MyAnimeList",
        "hanime.tv"
    ],
    [
        "https://myaccount.google.com",
        "https://en.wikipedia.org/wiki/Main_Page",
        "https://github.com",
        "https://www.bbc.com/news",
        "https://translate.google.co.in/",
        "https://www.reddit.com/",
        "https://www.crunchyroll.com/videos/popular",
        "https://www1.gogoanime.bid",
        "https://myanimelist.net/",
        "https://hanime.tv/"
    ]
]

for(let i = 0; i < urls[0].length; i++){
    const h3 = document.createElement("p");
    const a = document.createElement("a");
    a.href = urls[1][i];
    a.innerHTML = urls[0][i];
    a.className = "link";
    a.target = "_blank";
    h3.appendChild(a);
    render.appendChild(h3)
}
