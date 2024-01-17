let ul = document.getElementById("caption");
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((element) => {
    let liItems = document.createElement("li");
    liItems.textContent = "Item : " + element;
    // Style Li 
    liItems.style.listStyleType = "square";
    liItems.style.color = "orange";
    liItems.style.margin = "3%";
    liItems.style.fontSize = "20px";
    liItems.style.fontFamily = "Helvetica";

    //  Hover effect
    liItems.addEventListener("mouseover", () => {
        liItems.style.listStyleType = "circle";
        liItems.style.color = "green";
        liItems.style.fontSize = "30px";

    });

    //  Remove Effect
    liItems.addEventListener("mouseout", () => {
        liItems.style.listStyleType = "square";
        liItems.style.color = "orange";
        liItems.style.margin = "3%";
        liItems.style.fontSize = "20px";
        liItems.style.fontFamily = "Helvetica";
    });
    //  Remove Item 
    // liItems.addEventListener("mouseout", () => {
    //     liItems.remove();
    // });
    ul.appendChild(liItems);
});


// Show user name

document.getElementById("showName").onclick = () => {
    let value = document.getElementById("username").value;
    let title = document.getElementById("result");
    title.innerHTML = value;
    document.getElementById("username").value = '';
};
