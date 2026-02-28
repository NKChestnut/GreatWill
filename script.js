document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Get the values from the form
    const itemName = e.target.querySelector('input[type="text"]').value;
    const itemPrice = e.target.querySelector('input[type="number"]').value;
    const itemImage = document.getElementById('file-upload').files[0];

    if (itemImage) {
        const reader = new FileReader();

        // 2. Convert the image file into a URL we can display
        reader.onload = function(event) {
            const imageUrl = event.target.result;

            // 3. Create the HTML for the new product card
            const newCard = document.createElement('div');
            newCard.className = 'product-card';
            
            // Note: We use '#' for the link since a new HTML file doesn't exist yet
            newCard.innerHTML = `
                <a href="#">
                    <img src="${imageUrl}" alt="${itemName}" class="product-img">
                    <h3>${itemName}</h3>
                    <p>$${parseFloat(itemPrice).toFixed(2)}</p>
                </a>
                <button class="cart-btn">Add to Cart</button>
            `;

            // 4. Add the card to the shop gallery
            document.getElementById('product-grid').appendChild(newCard);

            // 5. Clear the form
            document.getElementById('uploadForm').reset();
            alert("Success! Your " + itemName + " has been posted to the shop.");
        };

        reader.readAsDataURL(itemImage);
    } else {
        alert("Please select a photo first!");
    }
});
