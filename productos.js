// Función para agregar un producto a la lista de deseos
function addToWishlist(productName) {
    var wishlist = document.getElementById("wishlist");
    var newWishlistItem = document.createElement("li");
    newWishlistItem.innerHTML = "\n      <span>".concat(productName, "</span>\n      <button class=\"wishlist-button\" onclick=\"removeFromWishlist(this)\">\n        <i class=\"fas fa-times\"></i> Eliminar\n      </button>\n    ");
    wishlist.appendChild(newWishlistItem);
}
// Función para eliminar un producto de la lista de deseos
function removeFromWishlist(button) {
    var wishlistItem = button.parentNode;
    if (wishlistItem.parentNode) {
        wishlistItem.parentNode.removeChild(wishlistItem);
    }
}
