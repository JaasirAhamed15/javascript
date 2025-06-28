
const courses=[
    {
        name:"Complete Reactjs coursse",
        price:"2.3",
    }
    ,
    {
        name:"Complete Angularjs coursse",
        price:"2.5",
    },
    {
        name:"Complete Nodejs coursse",
        price:"2.7",
    },
    {
        name:"Complete Python coursse",
        price:"2.9",
    },
    {
        name:"Complete Java coursse",
        price:"3.0",
    }
]

function generateList(){
    const ul=document.querySelector(".list-group");
    const span=document.createElement("span");
    ul.innerHTML=""
    courses.forEach(courses=>{
        const li=document.createElement("li");
        li.classList.add("list-group-item");
        const name=document.createTextNode(courses.name)
        li.appendChild(name);

        
        span.classList.add("float-right");
        const price=document.createTextNode(`$ ${courses.price}`);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);


    });
}

// generateList();

window.addEventListener("load",generateList);

const button=document.querySelector(".sort-btn");

button.addEventListener("click",()=>{
    courses.sort((a,b)=>a.price- b.price );
    generateList();
})