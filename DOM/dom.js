// let newDiv = document.createElement('div')
// document.body.append(newDiv)
// let btn = document.createElement("button")
// btn.innerHTML="Click"
// newDiv.appendChild(btn)
// btn.style.backgroundColor="red"
// btn.style.border="none"
// btn.style.padding="10px 25px"
// btn.style.fontSize="1.5em"
// btn.style.color="White"
// btn.style.borderRadius="10px"
// btn.setAttribute("id","btn")

// btn.addEventListener("click",()=>{
//     if(btn.innerHTML==="Click"){
//         btn.innerText="Clicked"
//         btn.style.backgroundColor="blue"
//     }
//     else{
//         btn.innerText="Click"
//         btn.style.backgroundColor="red"
//     }
// })

// let input = document.createElement("input")
// input.setAttribute("type","text")
// input.setAttribute("id","userName")
// input.setAttribute("placeholder","Enter the userName")
// let h1 = document.createElement("h2")
// newDiv.appendChild(h1)
// newDiv.appendChild(input)

// input.addEventListener('change',()=>{
//     h1.innerHTML = input.value
// })


let btn = document.getElementById("btn")

const clicks = ()=>{
    if(btn.innerHTML==="Click"){
        btn.innerText="Clicked"
        btn.style.backgroundColor="blue"
    }
    else{
        btn.innerText="Click"
        btn.style.backgroundColor="red"
    }
}

let input = document.getElementById("inputs")

const changes= ()=>{
    console.log(input.value);    
}