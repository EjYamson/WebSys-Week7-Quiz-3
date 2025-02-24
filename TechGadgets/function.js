document.addEventListener("DOMContentLoaded", function () { const productName = document.getElementById("product-name").textContent; 
    const productPrice = parseFloat(document.getElementById("product-price").textContent.replace("$", ""));

    console.log(`Product: ${productName}, Price: $${productPrice}`);
    
    document.querySelector(".add-to-cart").addEventListener("click", function () {
   
        alert(`${productName} has been added to the cart!`);
    });
    
    window.updateImage = function (src) {
    
        document.getElementById("main-image").src = src;
    };
    
    });