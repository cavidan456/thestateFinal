// api link https://655dd2b79f1e1093c599f093.mockapi.io/products

const products = document.getElementById("products")
const btn = document.getElementById("btn")

let limit = 3
let page = 1

async function  getProducts() {
    skip =(limit -1)*page
    const response =await axios.get(`https://655dd2b79f1e1093c599f093.mockapi.io/products/?limit=${limit}&page=${page}&skip=${skip}`)
    const data = response.data
    db= data 
     db.forEach(item => {
        let cartbox= document.createElement("div")
        cartbox.className ="col-4"
        cartbox.innerHTML = `
        <div class="cart-style">
        <img src="${item.image}" alt="product-img">
        <p>${item.description}</p>
        <p>${item.title}</p>
        <button onclick="addToBasket(${item.id})">ADD TO BASKET</button>
        </div>`
        products.appendChild(cartbox);
     });
     page++
}

btn.addEventListener("click" , getProducts)

function addToBasket(itemId){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(db.find(item=> item.id == itemId))
    localStorage.setItem("cart" , JSON.stringify(cart))
    
}

getProducts()