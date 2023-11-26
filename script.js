document.addEventListener('DOMContentLoaded',function (){

    lucide.createIcons();
const productContainer=document.querySelector(".product-list");
const productTemplate=document.querySelector("#product-template")
const items=[
    {
        name: "Rudra Singh",
        description:"Water bottle,red colored cap, green leaves printed.Found at Canteen",
        contact:9900233321,
        image:"assets/bottle.jpg",
    },
    {
        name: "Aditya Verma",
        description:"About item 2 like where it was found",
        contact:823325211,
        image:"assets/bag.jpg",
    },
    {
        name: "Naveen Yadav",
        description:"About item 3 like where it was found",
        contact:864345631,
        image:"assets/keys.webp",
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