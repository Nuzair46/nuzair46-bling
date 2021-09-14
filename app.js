/*
--------------------------------------------------------------
Your code goes in this file
--------------------------------------------------------------
*/
const root = document.querySelector("#root");
const body = document.querySelector("body");

    const mainList = [
                        bling = create("BLING!", 'p'),
                        mainBody = create(null, 'div')
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
                                    submit = create('Submit','button')
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
                            black = create('black', 'option'),
                            green = create('green', 'option')
                        ]
                        appendChildren(coloring, colorList);

                    const isBlob = create(null,'input');
                    const blobLabel = create('Blob','label');
                    const notBlob = create(null,'input');
                    const nopeLabel = create('Nope','label');
                    const inputList = [naming, coloring, isBlob, blobLabel, notBlob, nopeLabel];

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

//attributes
naming.type = "text";
naming.placeholder = "Name your Bling.";

coloring.type = "select";
orange.value = "orange";
black.value = "black";
green.value = "green";

setAttributes(polaroid, {"type":"radio","name":"branding","value":"polaroid"});
setAttributes(tv, {"type":"radio","name":"branding","value":"tv"});
setAttributes(traitor, {"type":"radio","name":"branding","value":"traitor"});
setAttributes(fallGuy, {"type":"radio","name":"branding","value":"fallGuy"});
setAttributes(radio, {"type":"radio","name":"branding","value":"radio"});

setAttributes(isBlob, {"type":"radio","name":"blobCheck","value":"isBlob"});
setAttributes(notBlob, {"type":"radio","name":"blobCheck","value":"notBlob", "checked":"checked"});

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

//changing the main image with radio
document.querySelectorAll('input[name="branding"]').forEach((selector) => {
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
            blobImage.style.display = "block";
            blobImage.src = `./assets/images/blob.png`;
        }else{
            blobImage.style.display = "none";
        }
    });
});

// background color
coloring.addEventListener("change", (e) => {
    body.style.backgroundColor = e.target.value;
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

mainBody.style.display = "flex";
mainBody.style.justifyContent = "space-between";

image.width = "300";
blobImage.width = "500";



sizzle.style.fontSize = "30px";
make.style.fontSize = "60px";