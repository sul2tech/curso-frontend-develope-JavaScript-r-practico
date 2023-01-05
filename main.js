const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

/*Menenu burger*/ 
const burgerMenu = document.querySelector('.burgerMenu');

/*Mobail Menu*/
const mobileMenu = document.querySelector('.mobile-menu');

/*Product datil*/

const menuCardIcon = document.querySelector('.navbar-shopping-cart')
const productDetails = document.querySelector('.product-detail');


navEmail.addEventListener("click", toggleDesktopMenu);

burgerMenu.addEventListener('click', toggleMobileMenu);

menuCardIcon.addEventListener("click", toggleCardAside)

// cardcontainer

const cardContainer = document.querySelector(".cards-container")



function toggleDesktopMenu () {

    const isAsideClosed = productDetails.classList.contains('inactive')

    if (!isAsideClosed) {
        productDetails.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}


function toggleMobileMenu () {

    const isAsideClosed = productDetails.classList.contains('inactive')

    if (!isAsideClosed) {
        productDetails.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')

}

function toggleCardAside () {

    
    const isMobilMenuClosed = mobileMenu.classList.contains('inactive')

    
    if(!isMobilMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    
    productDetails.classList.toggle('inactive');
    
}

// Section productos

const productList = [];

productList.push({
    name: "bike",
    price: 120,
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Pantalla",
    price: 220,
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "MacBook A1",
    price: 1200,
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


// Recorrer el array



function productlength(arr) {

    for (product of  arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const img = document.createElement("img");
        img.setAttribute("src", product.Image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement("figure");
        const productImgCard = document.createElement("img");
        productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img)
        productCard.appendChild(productInfo)
    
        cardContainer.appendChild(productCard)
    }
    
}

productlength(productList)
