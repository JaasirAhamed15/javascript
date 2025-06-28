
const red =document.querySelector('.red');
const cyan =document.querySelector('.cyan');
const violet =document.querySelector('.violet');
const orange =document.querySelector('.orange');
const pink =document.querySelector('.pink');

const center =document.querySelector('.center');

console.log(window.getComputedStyle(red).backgroundColor);


const getBgcolor =(selectelemnet)=>{
    return window.getComputedStyle(selectelemnet).backgroundColor;
};
// console.log(getBgcolor(red));

// var redelementcolor =getBgcolor(red);

// red.addEventListener('mouseenter',()=>{
//     center.style.background = redelementcolor;
// });


var color=getBgcolor(pink);

pink.addEventListener("click",()=>{
    center.style.background = color;
});

const magiccolorchanger=(element,color)=>{

    return element.addEventListener("mouseenter",()=>{
        center.style.background = color;
    });


}

magiccolorchanger(red,getBgcolor(red));
