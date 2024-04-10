const container = document.querySelector("#container");
const deleteBtn = document.querySelectorAll("#delete")
const listN = document.getElementById("newItem");
const itemInput = document.getElementById("name");



btn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    const newDelete = document.createElement("button");
    const inputText = itemInput.value.trim();
    newItem.textContent = inputText;
    newDelete.textContent = "delete";
    newDelete.className = "delete";

    newItem.appendChild(newDelete);
    container.appendChild(newItem);
    
})

container.addEventListener("click", (event) => {
    if(event.target.className === "delete") {
        event.target.parentElement.remove();
    }
})







// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";
// container.appendChild(content);

// const para = document.createElement("p");
// para.classList.add("para");
// para.textContent = "Hi I am red!";
// container.appendChild(para);

// const blue = document.createElement("h3");
// blue.classList.add("bluey");
// blue.textContent = "I'm the blue h3";
// container.appendChild(blue)

// const divBorder = document.createElement("div")
// divBorder.classList.add("borderDiv");
// container.appendChild(divBorder);


// const newHeading = document.createElement("h1");
// newHeading.classList.add("newHeading");
// newHeading.textContent = "I'm in the div";
// divBorder.appendChild(newHeading);

// const newPara = document.createElement("p");
// newPara.classList.add("newPara");
// newPara.textContent = "ME TOO!";
// divBorder.appendChild(newPara);




// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.