/*
--------------------------------------------------------------
Your code goes in this file
--------------------------------------------------------------
*/
const root = document.querySelector("#root");

    const mainList = [
                        bling = create("BLING!", 'h3'),
                        detail = create(null, 'div'),
                        options = create(null, 'div')
    ];
        const detailList = [
                            sizzle = create('Sizzle your Life','span'),
                            make = create('Make a Card' ,'h1')
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
                    blue = create('blue', 'option'),
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

    appendChildren(root, mainList);

    const output = create(null,'div');
        const outList = [
            title = create(null, 'h1'),
            image = create(null, 'img'),
            blobImage = create(null, 'img')
        ];
        appendChildren(output, outList);

    root.appendChild(output);


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
blue.value = "blue";
black.value = "black";
green.value = "green";

polaroid.type = "radio";
tv.type = "radio";
traitor.type = "radio";
fallGuy.type = "radio";
radio.type = "radio";

polaroid.name = "type"
tv.name = "type"
traitor.name = "type"
fallGuy.name = "type"
radio.name = "type"

polaroid.value = "polaroid"
tv.value = "tv"
traitor.value = "traitor"
fallGuy.value = "fallGuy"
radio.value = "radio"

isBlob.type = "radio";
notBlob.type = "radio";
isBlob.name = "blobCheck";
notBlob.name = "blobCheck";
isBlob.value = "isBlob";
notBlob.value = "notBlob";

//event listeners 

// changing the image title with input
naming.addEventListener("input", (e) => {
    title.textContent = e.target.value
});

//changing the main image with radio
document.querySelectorAll('input[name="type"]').forEach((selector) => {
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