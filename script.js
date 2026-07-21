
// ================= SHOP NOW =================

function scrollToShop() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}

// ================= CATEGORY FILTER =================

function filterProducts(category) {

    const products = document.querySelectorAll(".product-card");

    products.forEach((card) => {

        if (
            category === "all" ||
            card.classList.contains(category)
        ) {

            card.style.display = "block";

        }

        else {

            card.style.display = "none";

        }

    });

}

// ================= DRAWERS =================

const wishlistBtn = document.getElementById("wishlistBtn");

const wishlistDrawer =
document.getElementById("wishlistDrawer");

const closeWishlist =
document.getElementById("closeWishlist");

wishlistBtn.onclick = function () {

    wishlistDrawer.classList.add("active");

}

closeWishlist.onclick = function () {

    wishlistDrawer.classList.remove("active");

}

// ================= WISHLIST =================

let wishlist = JSON.parse(
localStorage.getItem("wishlist")
) || [];

updateWishlist();

function toggleWishlist(name, price) {

    const index = wishlist.findIndex(

        (item) => item.name === name

    );

    if (index === -1) {

        wishlist.push({

            name,
            price

        });

    }

    else {

        wishlist.splice(index, 1);

    }

    localStorage.setItem(

        "wishlist",

        JSON.stringify(wishlist)

    );

    updateWishlist();

}

function updateWishlist() {

    const list =

    document.getElementById("wishlistItems");

    list.innerHTML = "";

    wishlist.forEach((item) => {

        const div = document.createElement("div");

        div.style.marginBottom = "20px";

        div.innerHTML = `

        <h3>${item.name}</h3>

        <p>₹${item.price}</p>

        <button onclick="removeWishlist('${item.name}')">

        Remove

        </button>

        `;

        list.appendChild(div);

    });

    document.getElementById(

        "wishlistCount"

    ).innerText = wishlist.length;

}

function removeWishlist(name) {

    wishlist = wishlist.filter(

        (item) => item.name !== name

    );

    localStorage.setItem(

        "wishlist",

        JSON.stringify(wishlist)

    );

    updateWishlist();

}

// ================= CART DRAWER =================

const cartBtn = document.getElementById("cartBtn");

const cartDrawer =
document.getElementById("cartDrawer");

const closeCart =
document.getElementById("closeCart");

cartBtn.onclick = function(){

    cartDrawer.classList.add("active");

}

closeCart.onclick = function(){

    cartDrawer.classList.remove("active");

}

// ================= CART =================

let cart = JSON.parse(

localStorage.getItem("cart")

) || [];

updateCart();

// ================= ADD TO CART =================

function addToCart(name, price) {

    const existingItem = cart.find(

        (item) => item.name === name

    );

    if (existingItem) {

        existingItem.quantity++;

    }

    else {

        cart.push({

            name: name,

            price: price,

            quantity: 1

        });

    }

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

    updateCart();

}



// ================= UPDATE CART =================

function updateCart() {

    const cartItems =

    document.getElementById("cartItems");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item) => {

        total += item.price * item.quantity;

        const div = document.createElement("div");

        div.style.marginBottom = "20px";

        div.innerHTML = `

        <h3>${item.name}</h3>

        <p>

        ₹${item.price}

        </p>

        <p>

        Qty : ${item.quantity}

        </p>

        <button onclick="increaseQuantity('${item.name}')">

        +

        </button>

        <button onclick="decreaseQuantity('${item.name}')">

        -

        </button>

        <button onclick="removeCartItem('${item.name}')">

        Remove

        </button>

        <hr>

        `;

        cartItems.appendChild(div);

    });

    document.getElementById(

        "totalPrice"

    ).innerText =

    "Total : ₹" + total;

    document.getElementById(

        "cartCount"

    ).innerText = cart.length;

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

}

// ================= INCREASE QUANTITY =================

function increaseQuantity(name){

    const item = cart.find(

        (product)=> product.name===name

    );

    if(item){

        item.quantity++;

    }

    updateCart();

}

// ================= DECREASE QUANTITY =================

function decreaseQuantity(name){

    const item = cart.find(

        (product)=> product.name===name

    );

    if(item){

        if(item.quantity>1){

            item.quantity--;

        }

        else{

            cart = cart.filter(

                (product)=> product.name!==name

            );

        }

    }

    updateCart();

}

// ================= REMOVE CART ITEM =================

function removeCartItem(name){

    cart = cart.filter(

        (item)=> item.name !== name

    );

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

    updateCart();

}
function featuredFilter(category){

    filterProducts(category);

    document
    .getElementById("products")
    .scrollIntoView({
        behavior:"smooth"
    });

}




