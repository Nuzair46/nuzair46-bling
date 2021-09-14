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
                        cardBoard = create(null, 'div')
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
                            orange = create('orange', 'option'),
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
    element.style.top = "1px";
    element.style.right = "1px";
    element.addEventListener("click", (e) => {
        cardBoard.removeChild(document.getElementById(`${element.id}`));
        delete cardBoardList[element.id - 1];
    })
}

//attributes
naming.type = "text";
naming.placeholder = "Name your Bling.";

coloring.type = "select";
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

root.style.padding = "10px 200px";
root.style.color = "#202020";

bling.style.fontSize = "35px";
bling.style.fontWeight = "900"
bling.style.textAlign = "center";
bling.style.textShadow = "4px 4px 1px orange"

mainBody.style.display = "flex";
mainBody.style.justifyContent = "space-between";

mainBody.style.margin = "100px 0";

currentOutput.style.width = "500px";
currentOutput.style.height = "500px";
currentOutput.textAlign = "center";
currentOutput.position = "relative";

title.style.textAlign = "center";
title.style.fontSize = "65px";
title.style.height = "65px";
title.style.fontWeight = "900";
title.style.textShadow = "3px 3px 5px black"

image.width = "300";
image.style.height = "auto";
blobImage.width = "500";

image.style.display = "block";
image.style.margin = "100px";
image.style.zIndex = 2;
image.style.position = "absolute";

blobImage.style.position = "relative";

sizzle.style.fontSize = "30px";

make.style.fontSize = "60px";
make.style.padding = "10px 0 50px 0";
make.style.fontWeight = "700";

buttons.style.margin = "25px 0";
inputs.style.margin = "50px 0";

cardBoard.style.display = "flex";
cardBoard.style.flexWrap = "wrap";
cardBoard.style.justifyContent = "space-between";

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
    element.style.margin = "30px";
    element.style.width = "500px";
    element.style.height = "500px";
    element.style.backgroundColor = body.style.backgroundColor;
    element.style.borderRadius = "15px";
    element.style.border = "solid #202020 3px";
    element.style.boxShadow = "4px 4px 10px black"
}

function darkButtons(element){
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