
var count = JSON.parse(localStorage.getItem("cartCount"))
var cartCountElement = document.getElementById("cart-count")
if (count == null) {
    cartCountElement.innerText = 0
} else {
    cartCountElement.innerText = count
}


// to get the ids of the cart items


var cartItems = JSON.parse(localStorage.getItem("cart"))
// var differentProducts = []
var similarProducts = []
var cartProductIds = []
var differentCartItems=[]
for (var i = 0; i < cartItems.length; i++) {
    cartProductIds.push(cartItems[i].id)
}


// for pushing only the diff products
for(var k=0;k<cartProductIds.length;k++){
    var isInclude = false
    if(differentCartItems.includes(cartProductIds[k])){
        isInclude = true
    }
    if(!isInclude){
        differentCartItems.push(cartProductIds[k])
        
    }
}


// to push similar products
var nummberOfSimlarProducts = []
for(var i=0;i<differentCartItems.length;i++){
    var count = 0
    for(var j=0;j<cartProductIds.length;j++){
        if(differentCartItems[i]==cartProductIds[j]){
            count+=1
        }
    }
    nummberOfSimlarProducts.push(count)
}


$("#differentcount").text(parseInt(differentCartItems.length))

var totalAmount = document.getElementById("total-amount")
var totalCost = 0
var cardListElement = document.getElementById("card-list")
var cartItems = JSON.parse(localStorage.getItem("cart"))

for (var i = 0; i < differentCartItems.length; i++) {
    $.ajax({
        url: "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" +differentCartItems[i],
        type: 'GET',
        async: false, // Set this to false to make it synchronous
        success: function(data) {
            var cartData = data
  cardListElement.innerHTML += `
            <div class="checkout-card">
                                <div>
                                    <img class="checkout-product-img"
                                        src=${cartData.preview} />
                                </div>
                                <div>
                                    <h4>${cartData.name}</h4>
                                    <p>x${nummberOfSimlarProducts[i]}</p>
                                    <p>
                                        <span>Amount: Rs</span>
                                        <span>${cartData.price}</span>
                                    </p>
                                </div>
                            </div> `
                
                totalCost+=(cartData.price*parseInt(nummberOfSimlarProducts[i]))
                totalAmount.innerText=totalCost
        }
})
}
function orderPlaced(){
    if($("#differentcount").text()==0){
        $("#href").attr("href","cart.html")
        alert("Your Cart is Empty!!")
    }else{
        $("#href").attr("href","order.html")
        localStorage.removeItem("cart")
        localStorage.removeItem("id")
        localStorage.removeItem("cartCount")
    }
}
