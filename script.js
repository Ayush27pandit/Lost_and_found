document.addEventListener('DOMContentLoaded',function (){


const productContainer=document.querySelector(".product-list");
const productTemplate=document.querySelector("#product-template")
const items=[
    {
        name: "1st item",
        description:"About item 1 like where it was found",
        contact:"009329393",
        image:"path.....",
    },
    {
        name: "2nd item",
        description:"About item 2 like where it was found",
        contact:"00932239393",
        image:"path.....",
    },
    {
        name: "3rd item",
        description:"About item 3 like where it was found",
        contact:"009329393",
        image:"path.....",
    },
]

//for each function for cloning the template each time with different info

items.forEach(item=>{
    const instance = productTemplate.content.cloneNode(true);
    instance.querySelector('.product-image').src=item.image;
    instance.querySelector('.product-name').textContent=item.name;
    instance.querySelector('.product-contact').textContent=item.contact;
    instance.querySelector('.product-description').textContent=item.description;
    productContainer.appendChild(instance);
});

});