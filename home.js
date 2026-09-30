let productsContainer = document.getElementById("products");

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {

        data.products.forEach(product => {

            productsContainer.innerHTML += `
                <div>
                    <img src="${product.thumbnail}" width="150">

                    <h2>${product.title}</h2>

                    <p>${product.description}</p>

                    <p>Price: $${product.price}</p>

                    <p>Category: ${product.category}</p>
                </div>
            `;

        });

    })
    .catch(error => {
        console.log(error);
    });