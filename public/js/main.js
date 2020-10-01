
// GLOBAL
var products=[];
var cartItems=[];
var cart_n = document.getElementById('cart_n');

var shirtDIV= document.getElementById("shirtDIV");
var pantsDIV= document.getElementById("pantsDIV");
var watchDIV= document.getElementById("watchDIV");

var SHIRT=[
    {name:'checked' ,price:1500},
    {name:'camourflage' ,price:1500},
    {name:'partywear' ,price:1200},
    {name:'formal' ,price:1600},
    {name:'Half-sleeve' ,price:1800},
    {name:'printed' ,price:2000}
];
var PANT=[
    {name:'trousers' ,price:1200},
    {name:'Chinos' ,price:2500},
    {name:'formals' ,price:2200}
];
var WATCH=[
    {name:'formal' ,price:7000},
    {name:'fancy' ,price:6000},
    {name:'digital' ,price:15000}
];

function HTMLshirtProduct(con){
    let URL = `../img/shirts/shirt${con}.jpg`;
    let btn = `btnShirt${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <p class="card-text">${SHIRT[con-1].name}</p>
                    <p class="card-text">Price: ${SHIRT[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${SHIRT[con-1].name}','${SHIRT[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary" ><a style="color:inherit;" href="/cart">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${SHIRT[con-1].name}','${SHIRT[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary" >Add to cart</button>
                        </div>
                        <small class="text-muted">Free shipping </small>
                    </div>
                </div>
            </div>
        </div>
    `
}
function HTMLpantsProduct(con){
    let URL = `../img/pants/pant${con}.jpg`;
    let btn = `btnPant${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <p class="card-text">${PANT[con-1].name}</p>
                    <p class="card-text">Price: ${PANT[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${PANT[con-1].name}','${PANT[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary" ><a href="/cart" style="color:inherit;">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${PANT[con-1].name}','${PANT[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary" >Add to cart</button>
                        </div>
                        <small class="text-muted">Free shipping </small>
                    </div>
                </div>
            </div>
        </div>
    `
}
function HTMLwatchProduct(con){
    let URL = `../img/watch/watch${con}.jpg`;
    let btn = `btnWatch${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <p class="card-text">${WATCH[con-1].name}</p>
                    <p class="card-text">Price: ${WATCH[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${WATCH[con-1].name}','${WATCH[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary" ><a href="/cart" style="color:inherit;">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${WATCH[con-1].name}','${WATCH[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary" >Add to cart</button>
                        </div>
                        <small class="text-muted">Free shipping </small>
                    </div>
                </div>
            </div>
        </div>
    `
}

function animation(){
    const toast=swal.mixin({
        toast:true,
        position:'top-end',
        showConfirmButton:false,
        timer:1000
    });
    toast({
        type:'success',
        title: 'Added to shopping cart'
    });
}

function cart(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products= JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products= JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animation();
}
function cart2(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products= JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products= JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display="none";
}


(()=>{
    for (let index = 1; index <=6; index++) {
        shirtDIV.innerHTML+=`${HTMLshirtProduct(index)}`;
    }
    for (let index = 1; index <=3; index++) {
        pantsDIV.innerHTML+=`${HTMLpantsProduct(index)}`;
        watchDIV.innerHTML+=`${HTMLwatchProduct(index)}`;
    }
    if (localStorage.getItem("cart")==null) {
        
    } else {
        products=JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }
})();