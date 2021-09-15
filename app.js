/*
--------------------------------------------------------------
Your code goes in this file
--------------------------------------------------------------
*/
const root = document.querySelector("#root");
const body = document.querySelector("body");
const cardBoardList = [];

    const mainList = [
                        bling = create("BLING!", 'p'),
                        mainBody = create(null, 'div'),
                        cardBoard = create(null, 'div'),
                        footer = create(null, 'div')
    ];
        const mainBodyList = [
                        leftSide = create(null, 'div')
        ];
            const leftSideList = [
                            detail = create(null, 'div'),
                            options = create(null, 'div')
            ];
                const detailList = [
                                    sizzle = create('Sizzle your Life','span'),
                                    make = create('Make a Card' ,'p')
                ];

                appendChildren(detail, detailList);

                const optionList = [
                                    buttons = create(null, 'div'),
                                    inputs = create(null, 'div'),
                                    submitImage = create(null,'img')
                ];

                    const buttonList = [
                                        polaroid = create(null,'input'),
                                        polaroidLabel = create('Polaroid','label'),
                                        tv = create(null,'input'), 
                                        tvLabel = create('TV','label'),
                                        traitor = create(null,'input'), 
                                        traitorLabel = create('Traitor','label'),
                                        fallGuy = create(null,'input'), 
                                        fallGuyLabel = create('Fall Guy','label'),
                                        radio = create(null,'input'),
                                        radioLabel = create('Radio','label')
                                    ];

                    appendChildren(buttons, buttonList);
                    
                    const naming = create(null,'input');
                    const coloring = create(null,'select');
                        //create more colors later
                        const colorList = [
                            orange = create('Orange', 'option'),
                            aliceblue = create('AliceBlue', 'option'),
                            bisque = create('Bisque', 'option'),
                            magenta = create('Magenta', 'option'),
                            purple = create('Purple', 'option'),
                        ]
                        appendChildren(coloring, colorList);
                    const blobNode = create(null,'span');
                        const blobList = [
                            isBlob = create(null,'input'),
                            blobLabel = create('Blob','label'),
                            notBlob = create(null,'input'),
                            nopeLabel = create('Nope','label'),
                        ];
                    
                        appendChildren(blobNode, blobList);

                    const inputList = [naming, coloring, blobNode];

                    appendChildren(inputs, inputList);

                appendChildren(options, optionList);  
            
            appendChildren(leftSide, leftSideList);
        
        appendChildren(mainBody, mainBodyList);

        const footerList = [
            credits = create("🖤Credits:", 'p'),
            pol = create("Polaroid","a"),
            tve = create("TV","a"),
            tra = create("Traitor","a"),
            fal = create("Fall Guy","a"),
            rad = create("Radio","a")
        ];

        appendChildren(footer, footerList);

    appendChildren(root, mainList);

    const currentOutput = create(null,'div');
        const outList = [
            title = create(null, 'p'),
            image = create(null, 'img'),
            blobImage = create(null, 'img')
        ];
        appendChildren(currentOutput, outList);

    mainBody.appendChild(currentOutput);

//function to create element with textContent if needed
function create(text,type){
    var element = document.createElement(type);
    if (!(text === null)){
        element.textContent = text;
    }
    return element;
}

//function to append a list of children to a parent
function appendChildren(parent, children){
    children.forEach(function (child) {
        parent.appendChild(child);
    })
}

// card maker 
function makeCard(rawCard){
    let card = create(null, 'div');
    let deleteButton = create(null,'img');
    deleteButtonStuff(deleteButton);
    card.innerHTML = rawCard.innerHTML;
    card.style.position = "relative";
    card.appendChild(deleteButton);
    cardStyler(card);
    cardBoardList.push(card);
    appendChildren(cardBoard, cardBoardList);
    setAttributes(card, {"id":cardBoardList.length});
    setAttributes(deleteButton, {"id":cardBoardList.length});
}

function deleteButtonStuff(element){
    element.src = './assets/images/icon_delete.png';
    element.width = "65"
    element.style.position = "absolute";
    element.style.top = "-30px";
    element.style.right = "-30px";
    shrink(element)
    element.addEventListener("click", (e) => {
        cardBoard.removeChild(document.getElementById(`${element.id}`));
        delete cardBoardList[element.id - 1];
    })
}

//attributes
naming.type = "text";
naming.placeholder = "Name your Bling.";

coloring.type = "select";
coloring.style.cursor = "pointer";
//solution to fix glossy on safari from https://newbedev.com/how-can-i-remove-the-gloss-on-a-select-element-in-safari-on-mac
coloring.style.webkitAppearance = "none";
coloring.style.background = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%238C98F2'><polygon points='0,0 100,0 50,50'/></svg>") no-repeat`;
coloring.style.backgroundSize = "10px";
coloring.style.backgroundPosition = "calc(100% - 4px)";
coloring.style.backgroundRepeat = "no-repeat";
coloring.style.backgroundColor = "whitesmoke";

blobList.forEach((element) => {
    element.style.cursor = "pointer";
});

orange.value = "orange";
aliceblue.value = "aliceblue";
bisque.value = "bisque";
magenta.value = "magenta";
purple.value = "purple";

setAttributes(polaroid, {"type":"radio","name":"branding","value":"polaroid","id":"po"});
setAttributes(tv, {"type":"radio","name":"branding","value":"tv","id":"tv"});
setAttributes(traitor, {"type":"radio","name":"branding","value":"traitor","id":"tr"});
setAttributes(fallGuy, {"type":"radio","name":"branding","value":"fallGuy","id":"fa"});
setAttributes(radio, {"type":"radio","name":"branding","value":"radio","id":"ra"});

setAttributes(polaroidLabel, {"name":"brand","for":"po"});
setAttributes(tvLabel, {"name":"brand","for":"tv"});
setAttributes(traitorLabel, {"name":"brand","for":"tr"});
setAttributes(fallGuyLabel, {"name":"brand","for":"fa"});
setAttributes(radioLabel, {"name":"brand","for":"ra"});

setAttributes(isBlob, {"type":"radio","name":"blobCheck","value":"isBlob" ,"id":"bl"});
setAttributes(notBlob, {"type":"radio","name":"blobCheck","value":"notBlob", "checked":"checked","id":"no"});

setAttributes(blobLabel, {"name":"blober","for":"bl"});
setAttributes(nopeLabel, {"name":"blober","for":"no"});

// function to set multiple attributes for radio element
function setAttributes(element, attrs) {
    for(var key in attrs) {
      element.setAttribute(key, attrs[key]);
    }
}

//event listeners 

// changing the image title with input
naming.addEventListener("input", (e) => {
    title.textContent = e.target.value
});

submitImage.src = `./assets/images/camera.png`;
submitImage.width = "60";

//changing the main image with radio
document.querySelectorAll('input[name="branding"]').forEach((selector) => {
    selector.style.display = "none";
    selector.addEventListener("click", (e) => {
        let selected =  e.target.value;
        const images = {
            "polaroid": "polaroid.png",
            "tv": "tv.png",
            "traitor": "among-us.png",
            "fallGuy": "fall-guy-01.png",
            "radio": "radio-02.png"
        }
        image.src = `./assets/images/${images[selected]}`;
    });
});

// blob or nope?
document.querySelectorAll('input[name="blobCheck"]').forEach((selector) => {
    selector.addEventListener("click", (e) => {
        if(e.target.value === "isBlob"){
            currentOutput.appendChild(blobImage)
            blobImage.src = `./assets/images/blob.png`;
        }else{
            currentOutput.removeChild(blobImage)
        }
    });
});

// background color
coloring.addEventListener("change", (e) => {
    body.style.backgroundColor = e.target.value;
    currentOutput.style.backgroundColor = e.target.value;
    // also set the button bgc when the body bgc change.
    document.querySelectorAll('label[name="brand"]').forEach((label) => {
        if (label.style.color != "whitesmoke"){
            label.style.backgroundColor = e.target.value;
        }
    });
});

//make card
submitImage.addEventListener("click", () => {
    makeCard(currentOutput);
})

//styling
//initial body color.
body.style.backgroundColor = "orange";
body.style.fontFamily = "Montserrat";
body.style.overflowX = "hidden";
root.style.padding = "10px 100px";
root.style.color = "#202020";
root.style.overflowX = "hidden";

bling.style.fontSize = "35px";
bling.style.fontWeight = "900"
bling.style.textAlign = "center";
bling.style.textShadow = "4px 4px 1px orange"

mainBody.style.display = "flex";
mainBody.style.justifyContent = "space-between";

mainBody.style.margin = "100px 0";

currentOutput.style.width = "350px";
currentOutput.style.height = "500px";
currentOutput.textAlign = "center";
currentOutput.position = "relative";

title.style.textAlign = "center";
title.style.fontSize = "65px";
title.style.height = "65px";
title.style.wordWrap = "break-word";
title.style.zIndex = 3;
title.style.position = "relative";
title.style.fontWeight = "900";
title.style.textShadow = "3px 3px 5px black"

image.width = "300";
image.style.height = "auto";
blobImage.width = "350";

image.style.display = "block";
image.style.margin = "10px";
image.style.zIndex = 2;
image.style.position = "absolute";

blobImage.style.position = "relative";

sizzle.style.fontSize = "30px";

make.style.fontSize = "60px";
make.style.padding = "10px 0 50px 0";
make.style.fontWeight = "700";

buttons.style.margin = "25px 0";
buttons.style.display = "flex";
buttons.style.flexWrap = "wrap";
inputs.style.margin = "50px 0";
inputs.style.display = "flex";
inputs.style.flexWrap = "wrap";

cardBoard.style.display = "flex";
cardBoard.style.flexWrap = "wrap";
cardBoard.style.justifyContent = "space-around";

footer.style.justifyContent = "center";
footer.style.display = "flex";
footer.style.flexWrap = "wrap";
footer.style.marginTop = "50px"; 

footerList.forEach((element)=>{
    element.style.margin = "1px 5px";
    element.style.fontWeight = "bold";
    if(element.textContent !== "🖤Credits:"){
        element.href = "#";
        element.style.textDecoration = "none";
        element.style.color = "inherit";
        grow(element, 1.1);
    }
})

buttonList.forEach((element) => {
    element.style.marginRight = "30px";
})
inputList.forEach((element) => {
    element.style.marginRight = "30px";
})

blobList.forEach((element) => {
    element.style.marginRight = "10px";
})

darkMode(naming);
darkMode(coloring);
darkMode(blobNode);
darkButtons(naming);
darkButtons(coloring);
darkButtons(blobNode);
darkButtons(submitImage);
removeOutline(naming);
removeOutline(coloring);

document.querySelectorAll('label[name="brand"]').forEach((selector) => {
    darkButtons(selector);
});

document.querySelectorAll('input[name="branding"]').forEach((selector) => {
    selector.addEventListener("click", (e) => {
        document.querySelectorAll('label[name="brand"]').forEach((label) => {
            reverseMode(label);
        });
        let currentLabel = document.querySelector(`label[for="${selector.id}"]`);
        darkMode(currentLabel);
    });
});

function darkMode(element){
    element.style.color = "whitesmoke";
    element.style.backgroundColor = "#202020";
}

function reverseMode(element){
    element.style.color = "#202020";
    element.style.backgroundColor = body.style.backgroundColor;
}

function cardStyler(element){
    //element.style.margin = "30px";
    //element.style.width = "500px";
    //element.style.height = "500px";
    //if(windowSize720.matches){
        element.style.margin = "10px 10px";
        element.style.width = "320px";
        element.style.height = "400px"; 
    //}
    element.style.backgroundColor = body.style.backgroundColor;
    element.style.borderRadius = "15px";
    element.style.border = "solid #202020 3px";
    element.style.boxShadow = "4px 4px 10px black"
    grow(element, 1.01);
}

function darkButtons(element){
    element.style.marginTop = "20px"
    element.style.padding = "15px"
    element.style.fontSize = "15px"
    element.style.borderRadius = "15px";
    element.style.border = "solid #202020 3px";
    element.style.boxShadow = "4px 4px 10px black"
}

function removeOutline(element){
    element.addEventListener("focus", (e) => {
        e.target.style.outline = "none";    
    });
};

// shrink buttons on hover
buttonList.forEach((element) => {
    shrink(element);
})
shrink(submitImage);

function shrink(element){
    element.style.verticalAlign = "middle";
    element.style.webkitTransform = "perspective(1px) translateZ(0)";
    element.style.transform = "perspective(1px) translateZ(0)";
    
    element.style.webkitTransitionDuration = "0.3s";
    element.style.transitionDuration = "0.3s";
    element.style.webkitTransitionProperty = "transform";
    element.style.transitionProperty = "transform";

    element.addEventListener("mouseenter", (e) =>{
        element.style.webkitTransform = "scale(0.9)";
        element.style.transform = "scale(0.9)";
        element.style.cursor = "pointer";
    })
    element.addEventListener("mouseleave", (e) =>{
        element.style.webkitTransform = "scale(1)";
        element.style.transform = "scale(1)";
    })
}

function grow(element, scale){
    element.style.verticalAlign = "middle";
    element.style.webkitTransform = "perspective(1px) translateZ(0)";
    element.style.transform = "perspective(1px) translateZ(0)";
    
    element.style.webkitTransitionDuration = "0.3s";
    element.style.transitionDuration = "0.3s";
    element.style.webkitTransitionProperty = "transform";
    element.style.transitionProperty = "transform";

    element.addEventListener("mouseenter", (e) =>{
        element.style.webkitTransform = `scale(${scale})`;
        element.style.transform = `scale(${scale})`;
        element.style.cursor = "pointer";
    })
    element.addEventListener("mouseleave", (e) =>{
        element.style.webkitTransform = "scale(1)";
        element.style.transform = "scale(1)";
    })
}

// styles that change with screen size
let windowSize1024 = window.matchMedia("(max-width: 1024px)");
reArrange1024(windowSize1024);
windowSize1024.addEventListener('resize', reArrange1024);
function reArrange1024(size){
    if (size.matches){
        mainBody.style.flexDirection = "column";
        mainBody.style.alignItems = "center";

        cardBoard.style.flexDirection = "column";
        cardBoard.style.alignItems = "center";
    }
}

let windowSize720 = window.matchMedia("(max-width: 720px)");
reArrange720(windowSize720);
windowSize720.addEventListener('resize', reArrange720);

function reArrange720(size){
    if (size.matches){
        currentOutput.style.marginTop = "50px";
        currentOutput.style.width = "350px";
        currentOutput.style.height = "400px";
        image.width = "300";
        blobImage.width = "300";
        image.style.margin = "10px";
        root.style.padding = "10px 25px";
    }
}

let windowSize1025 = window.matchMedia("(min-width: 1025px)");
reArrange1025(windowSize1025);
windowSize1025.addEventListener('resize', reArrange1025);

function reArrange1025(size){
    if (size.matches){
        root.style.padding = "10px 100px";
        mainBody.style.flexDirection = "row";
        mainBody.style.justifyContent = "space-between";

        cardBoard.style.flexDirection = "row";
        cardBoard.style.justifyContent = "space-around";
    }
}

// refresh on window resize using chromium tools. Comment the following line to avoid refresh on resize.
//window.onresize = () => location.reload();
window.onresize = () => {
    reArrange720(window.matchMedia("(max-width: 720px)"));
    reArrange1024(window.matchMedia("(max-width: 1024px)"));
    reArrange1025(window.matchMedia("(min-width: 1025px)"));
}