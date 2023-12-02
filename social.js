//Theme switching

//chech for saved 'lightMode' in localStorage
let lightMode = localStorage.getItem('light');
const body = document.body;
const lightModeToggle = document.querySelector('#light');
const lightBtn = 'asserts/light.png';
const darkBtn = 'asserts/dark.png';

const enablLightMode = () =>{
    //1. Add the class to the body
    document.bodt.classList.add('light');
    //2. Update the lightMode in the localStorage
    localStorage.setItem('lightMode', 'enabled');
}

const disenablLightMode = () =>{
    //1. Remove the class from the body
    document.bodt.classList.remove('light');
    //2. Update the lightMode in the localStorage
    localStorage.setItem('lightMode', 'null');
}

//If the user already visited the and enabled lightMode, start things off with it
if(lightMode === 'light-mode'){
    image.scr=lightBtn;
    body.classList.toggle('light');
}

//when someone clicks the button
lightModeToggle.addEventListener("click", () =>{
    if(image.src.endsWith(darkBtn)){
        image.src=lightBtn;
    }else{
        image.src=darkBtn;
    }
    body.classList.toggle('light');

    if(image.src.endsWith('lightBtn')){
        localStorage.setItem('light','light-mode')
    }else if(image.src.endsWith('darkBtn')){
        localStorage.setItem('light','dark-mode');
    }
});





fetch('info.json')
    .then(response => response.json())
    .then(data => showData(data));

function showData(data) {
    const cards = data["first_card"];
    console.log(cards);

    let sectionHTML = "";
    cards.forEach((banner) => {
        sectionHTML += `
            <div class ="sub-card" id="${banner["sec_id"]}" style="border-top: ${banner["border_color"]}">
                <div class="logo-section">
                    <img src="${banner['sec_logo']}" alt="">
                    <p class="username">${banner['sec_name']}</p>
                </div>

                <div class="num-text">
                    <p class="sec-num">${banner["sec_num"]}</p>
                    <p class="sec-text">${banner["sec_text"]}</p>
                </div>

                <div class="count-box"> 
                    <div class="arrow-direction" id="${banner["arrow_id"]}"></div>
                    <div class="counts"style="color: ${banner["sec_count_color"]}">${banner["sec_count"]}</div>
                </div>
            </div>
        `;
    });
    document.querySelector("first").innerHTML = sectionHTML;
}

fetch('info.json')
    .then(response => response.json())
    .then(detail => showDetails(detail));
function showDetails(detail) {
    const cards = detail["second_card"];
    console.log(cards);

    let divHTML = "";
    cards.forEach((overview) => {
        divHTML += `
            <div class ="mini-card" >
                <div class="logo-text">
                    <p class="up-text">${overview['up_text']}</p>
                    <img src="${overview['sec_logo']}" alt="">
                </div>

                <div class="num-arrow">
                    <p class="down-num">${overview["down_num"]}</p>
                    <div class="arr-add">
                        <div class="arrow-direction" id="${overview["arrow_id"]}" style="color:${overview["count_color"]}"></div>
                        <p class="down-add" id="increment" style="color:${overview["count_color"]}">${overview["down_add"]}</p>      
                    </div>
                </div>
            </div>

        `;
    });
    document.querySelector("second").innerHTML = divHTML;
}