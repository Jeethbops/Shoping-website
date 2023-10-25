// var productData = {
//   "id": "1",
//   "name": "Men Navy Blue Solid Sweatshirt",
//   "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
//   "photos": [
//     "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
//     "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
//     "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
//     "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
//     "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
//   ],
//   "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
//   "size": [
//     1,
//     1,
//     0,
//     1,
//     0
//   ],
//   "isAccessory": false,
//   "brand": "United Colors of Benetton",
//   "price": 2599
// }
// for(var i=0;i<1;i++){
var footerElement = document.getElementById("footer")
footerElement.innerHTML += `
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
var idInLocalStorage = localStorage.getItem("id")
$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + idInLocalStorage, function (response) {
  var productData = response;
  console.log(productData)

  var productSectionElement = document.getElementById("product");


  var leftElement = document.createElement("div");
  leftElement.className = "left-column"
  var leftImgElement = document.createElement("img");
  leftImgElement.id = "productImg"
  leftImgElement.src = productData.preview
  leftElement.append(leftImgElement);

  var rightElement = document.createElement("div");
  rightElement.className = "right-column"
  var productdescriptionElement = document.createElement("div");
  productdescriptionElement.className = "product-description"
  var h1Element = document.createElement("h1");
  h1Element.id = "name"
  h1Element.innerText = productData.name
  var h4Element = document.createElement("h4");
  h4Element.id = "brand"
  h4Element.innerText = productData.brand
  var h3Element = document.createElement("h3");
  var h3TextNode = document.createTextNode("Price : Rs ");
  h3Element.appendChild(h3TextNode);
  var spanElement = document.createElement("span");
  spanElement.innerText = productData.price
  h3Element.append(spanElement);

  productdescriptionElement.append(h1Element, h4Element, h3Element);


  var descriptionElement = document.createElement("div");
  descriptionElement.className = "description"
  var h3DescriptionElement = document.createElement("h3");
  h3DescriptionElement.innerText = "Description"
  var pElement = document.createElement("p");
  pElement.id = "description"
  pElement.innerText = productData.description


  var previewElement = document.createElement("div");
  previewElement.className = "product-preview";
  var paraElement = document.createElement("h3");
  paraElement.innerText = 'Product Preview';
  previewElement.appendChild(paraElement);
  var divPreviewImage = document.createElement("div");
  divPreviewImage.className = "previewImg";


  var btnElement = document.createElement('div');
  btnElement.className = 'btn';
  btnElement.innerHTML += `</div>
<button id="cartbtn" onclick="addToCart()">Add to Cart</button>
</div>`
  // var buttonElement = document.createElement('button')
  // buttonElement.id = "add-to-cart";
  // buttonElement.innerHTML ='Add To cart';
  // btnElement.appendChild(buttonElement);



  descriptionElement.append(h3DescriptionElement, pElement, previewElement, divPreviewImage, btnElement);
  rightElement.append(productdescriptionElement, descriptionElement);
  productSectionElement.append(leftElement, rightElement);

  var productPreviewElement = document.getElementsByClassName("previewImg")[0]


  for (let i = 0; i < productData.photos.length; i++) {
    var smallImg = document.createElement("img");
    smallImg.id = "img" + i
    smallImg.src = productData.photos[i];
    if (i == 0) {
      smallImg.classList.add("active");
    }
    smallImg.onclick = function () {
      AddActiveClass(i)
    }
    productPreviewElement.appendChild(smallImg);

  }



  function AddActiveClass(num) {

    var previousActiveImage = document.getElementsByClassName("active")[0];
    previousActiveImage.classList.remove("active")

    var activeCard = document.getElementById("img" + num)
    activeCard.classList.add("active")

    var productImageElement = document.getElementById("productImg");
    productImageElement.src = productData.photos[num]
  }
})

var count = JSON.parse(localStorage.getItem("cartCount"))
var cartCountElement = document.getElementById("cart-count")
if (count == null) {
    var countInitial = 0
    count = localStorage.setItem("cartCount", JSON.stringify(countInitial))
    cartCountElement.innerText = countInitial
}
// funtion to add to cart


var itemsfromstorage = JSON.parse(localStorage.getItem("cart"))
function addToCart() {
  $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + idInLocalStorage, function (response) {
    var cartData = response

    if (itemsfromstorage == null) {
      var cartitems = []
      cartitems.push(cartData)
      localStorage.setItem("cart",JSON.stringify(cartitems))
    }

    else {
      var cartprod = JSON.parse(localStorage.getItem("cart"))
      cartprod.push(cartData)
      localStorage["cart"] = JSON.stringify(cartprod)
    }
  })
  count = JSON.parse(localStorage.getItem("cartCount"))
  count += 1
  localStorage.setItem("cartCount", count)
  cartCountElement.innerText = JSON.parse(count)
}
cartCountElement.innerText = JSON.parse(count)
