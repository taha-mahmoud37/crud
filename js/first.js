




var productContainer=[];

if(localStorage.getItem("productsData")!== null)
{
    
    productContainer=JSON.parse( localStorage.getItem("productsData"));
    displayProduct(); 
}

function addProduct()
{
   var productName= document.getElementById("productNameInp").value;
   var productPrice= document.getElementById("productPriceInp").value;
   var productCategory= document.getElementById("productCategoryInp").value;
   var productDesc= document.getElementById("productDescInp").value;
   
   var product=
   {
       name: productName,
       price: productPrice,
       category: productCategory,
       desc: productDesc,
   }
   
   productContainer.push(product);
   localStorage.setItem("productsData" , JSON.stringify(productContainer))
   displayProduct();
}


function displayProduct()
{
    var temp=``;
    for(var i=0 ; i<productContainer.length ; i++)
    {
        temp+=`<div class="col-md-3">
        <div class="products mb-4">
            <img src="image/4.jpeg" alt="Computer" class="img-fluid">
            <h4>`+productContainer[i].name+` <span class="badge badge-primary">`+productContainer[i].category+`</span> </h4>
            <p>`+productContainer[i].desc+`</p>
            <div class="price">`+productContainer[i].price+`</div>
            <button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger btn-sm">delete</button>
            <button onclick="updateProduct(`+i+`)" class="btn btn-outline-warning btn-sm">update</button>
        </div>

    </div>`
    }
    document.getElementById("productRow").innerHTML=temp;
}




function searchProduct(term)
{
   var temp=``;
   for(var i=0 ; i<productContainer.length ; i++)
   {
       if(productContainer[i].name.toLowerCase().includes(term.toLowerCase()))
       {
        temp+=`<div class="col-md-3">
        <div class="products">
            <img src="image/4.jpeg" alt="Computer" class="img-fluid">
            <h4>`+productContainer[i].name+` <span class="badge badge-primary">`+productContainer[i].category+`</span> </h4>
            <p>`+productContainer[i].desc+`</p>
            <div class="price">`+productContainer[i].price+`</div>
        </div>

    </div>`
       }
   }
   document.getElementById("productRow").innerHTML=temp;
}




function deleteProduct(index)
{
     productContainer.splice(index ,1);
    localStorage.setItem("productsData" , JSON.stringify(productContainer))
   displayProduct();

}

function updateProduct(x)
{
    productContainer.find(x.name&& x.category && x.desc && x.price);
    localStorage.setItem("productsData" , JSON.stringify(productContainer))
    displayProduct();
    document.getElementById("button").innerHTML="update";
 

}






