var footerElement = document.getElementById("footer")
footerElement.innerHTML+=`
        <div>
            <p id="footer-heading">Online store</p>
            <a href="" class="footer-link">Men Clothing</a>
            <a href="" class="footer-link">Women Clothing</a>
            <a href="" class="footer-link">Men Accessories</a>
            <a href="" class="footer-link">Women Accessories</a>
        </div>
        <div>
            <p id="footer-heading">Helpful Links</p>
            <a href="" class="footer-link">Home</a>
            <a href="" class="footer-link">About</a>
            <a href="" class="footer-link">Contact</a>
        </div>
        <div>
            <p id="footer-heading">Partners</p>
            <a href="" class="footer-link">Zara</a>
            <a href="" class="footer-link">PANTALOONS</a>
            <a href="" class="footer-link">LEVIS</a>
            <a href="" class="footer-link">Ucb</a>
            
        </div>
        <div>
            <p id="footer-heading">Address</p>
            <p class="footer-link">Building 101</p>
            <p class="footer-link">Central Avenue</p>
            <p class="footer-link">LA - 902722</p>
            <p class="footer-link">UNITED STATES</p>
        </div>
`
var clothingSection = document.getElementById("clothing-section");
var accessorySection = document.getElementById("accessory-section");
//   function renderCard(productImage,productName,productBrand,productPrice){
//   var productCard =  document.createElement("div");
//   productCard.className = "product-card"
//   productCard.id = productList[i].id
//   // for( var i = 1 ; i < productList.length ; i++ ){
//   productCard.onclick = function( ){
//     location.assign("http://127.0.0.1:5500/2page.html")
//   }


//   var productImageElement = document.createElement("img");
//   productImageElement.className = "product-image"
//   productImageElement.src = productImage
//   productCard.appendChild(productImageElement);
//   var productDetails = document.createElement("div");
//   productDetails.className = "product-details"
//   var productNameElement = document.createElement("h3");
//   productNameElement.className = "product-name"
//   productNameElement.innerText = productName
//   var productBrandElement = document.createElement("h4");
//   productBrandElement.className = "product-brand"
//   productBrandElement.innerText = productBrand
//   var productPriceElement = document.createElement("h5");
//   productPriceElement.className = "product-price"
//   productPriceElement.innerText = "Rs " + productPrice
//   productDetails.append(productNameElement,productBrandElement,productPriceElement);
//   productCard.appendChild(productDetails);
//   return productCard
//   }

//   for( var i = 0 ; i < productList.length ; i++ ){
//    var productCard =  renderCard( productList[i].preview ,  productList[i].name , productList[i].brand , productList[i].price );
//    if( productList[i].isAccessory == true ){
//     accessorySection.appendChild(productCard)
//    }else{
//     clothingSection.appendChild(productCard)
//    }
//   }


// }

// )
$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/", function (response) {
  var productData = response;
  for (var i = 0; i < productData.length; i++) {
    if (productData[i].isAccessory == false) {
      clothingSection.innerHTML +=
        `<div class="product-card" id="${productData[i].id}" onclick="clickedOnTheProduct(${productData[i].id})">
            <a href="2page.html?p=${productData[i].id}">
                <img src="${productData[i].preview}" class="product-image"/>
            </a>
            <div class="product-details">
                <h3 class="product-name">${productData[i].name}</h3>
                <h4 class="product-brand">${productData[i].brand}</h4>
                <h5 class="product-price">Rs ${productData[i].price}</h5>
            </div>
        </div>`
    } else {
      accessorySection.innerHTML +=
        `<div class="product-card" id="${productData[i].id}" onclick="clickedOnTheProduct(${productData[i].id})">
            <a href="2page.html?p=${productData[i].id}">
                <img src="${productData[i].preview}" class="product-image"/>
            </a>
            <div class="product-details">
                <h3 class="product-name">${productData[i].name}</h3>
                <h4 class="product-brand">${productData[i].brand}</h4>
                <h5 class="product-price">Rs ${productData[i].price}</h5>
            </div>
        </div>`

    }
  }
})

// for count

var count = JSON.parse(localStorage.getItem("cartCount"))
var cartCountElement = document.getElementById("cart-count")
if (count == null) {
    var countInitial = 0
    count = localStorage.setItem("cartCount", JSON.stringify(countInitial))
    cartCountElement.innerText = countInitial
}

function clickedOnTheProduct(id) {
  localStorage.setItem("id", id)
}

var count = JSON.parse(localStorage.getItem("cartCount"))
var cartCountElement = document.getElementById("cart-count")
if(count == null){
    cartCountElement.innerText = 0
}else{
    cartCountElement.innerText = count
}







