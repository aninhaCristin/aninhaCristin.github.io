const pages = [
    {
        "title": "Aninha Hot",
        "qnt_images": 5,
        "folder": "main",
        "info": [
            "PIJAMA APERTADO", "DIABINHA", "PRETINHO BÁSICO", 
            "PRAIANA", "FLORZINHA"
        ]
    }, 

    {
        "title": "Aninha Hot - Pijama Apertado",
        "qnt_images": 10,
        "folder": "pijama",
        "info": [
            "Semi", "Semi", "Semi",
            "Nude", "Nude", "Nude",
            "Nude", "Nude", "Nude",
            "Nude"
        ]
    }, 

    {
        "title": "Aninha Hot - Diabinha",
        "qnt_images": 11,
        "folder": "diabinha",
        "info": [
            "Semi", "Semi", "Nude",
            "Nude", "Nude", "Semi/Nude",
            "Semi/Nude", "Semi/Nude", "Semi",
            "Vídeo", "Vídeo"
        ]
    }, 

    {
        "title": "Aninha Hot - Pretinho Básico",
        "qnt_images": 13,
        "folder": "pretinho_basico",
        "info": [
            "Semi", "Semi", "Semi",
            "Semi", "Semi", "Semi",
            "Semi", "Nude", "Nude",
            "Nude", "Nude", "Nude", 
            "Vídeo"
        ]
    }, 

    {
        "title": "Aninha Hot - Praiana",
        "qnt_images": 7,
        "folder": "praiana",
        "info": [
            "Semi", "Semi", "Nude",
            "Semi", "Nude", "Semi",
            "Nude"
        ]
    },

    {
        "title": "Aninha Hot - Florzinha",
        "qnt_images": 15,
        "folder": "Florzinha",
        "info": [
            "Semi", "Semi", "Semi",
            "Semi", "Nude", "Semi",
            "Nude", "Nude", "Semi",
            "Nude", "Nude", "Nude",
            "Nude", "Nude", "Vídeo" 
        ]
    }
]

const home = document.querySelector('main');
const ids = ["id_1", "id_2", "id_3", "id_4", "id_5"];

let index = 0;
let run = true;
let page_now;

function switch_page(id) {
    if (id == page_now) {
        return 0;
    }

    html = ""
    attrs = pages[id];

    for (let i = 0; i < attrs["qnt_images"]; i++) {
        if (id == 0) {
            html += `<div class="square" id="id_${i+1}" onclick="switch_page(${i+1})">`;
        } else {
            html += `<div class="pic">`;
        }
        html += `<img src="images/${attrs["folder"]}/image_${i+1}.jpg" />`;
        html += `<p class="baseboard">${attrs["info"][i]}</p>`;
        html += `</div>`;
    }

    document.title = attrs["title"];
    home.innerHTML = html;
    window.scrollTo(0, 0);

    if (id == 0 && run == true) {
        animation_run();
    }

    if (id != 0) {
        run = false;
    } else {
        run = true;
    }

    page_now = id;
}

function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}

async function animation_run() {
    while (true) {
        while (true) {
            try {
                await sleep(10);
                element = document.getElementById(ids[index]);
                element.style.animation = "pulse 1.5s linear";
                break;
            }
            catch {}
        }

        index = (index + 1) % ids.length;

        await sleep(1500);

        while (true) {
            try {
                await sleep(10);
                element.style.animation = "none";
                break;
            }
            catch {}
        }

        await sleep(250);
    }
}