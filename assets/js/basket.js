const products = document.getElementById("products")


function getProducts() {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    products.innerHTML = ' '
    cart.map ((item , index) =>{
        let cartbox = document.createElement("div")
        cartbox.innerHTML = `
        <div class="cart-style">
        <img src="${item.image}" alt="product-img">
        <p>${item.description}</p>
        <p>${item.title}</p>
        <button onclick="deleyt(${index})">delete</button>
        </div>`
        products.appendChild(cartbox)
    })
}
getProducts()

function deleyt(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.splice(index , 1)
    localStorage.setItem("cart" , JSON.stringify(cart))
    getProducts()
}