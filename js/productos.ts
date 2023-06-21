// Función para agregar un producto a la lista de deseos
function addToWishlist(productName: string) {
    const wishlist = document.getElementById("wishlist") as HTMLUListElement;
    const newWishlistItem = document.createElement("li");
    newWishlistItem.innerHTML = `
      <span>${productName}</span>
      <button class="wishlist-button" onclick="removeFromWishlist(this)">
        <i class="fas fa-times"></i> Eliminar
      </button>
    `;
    wishlist.appendChild(newWishlistItem);
  }
  
  // Función para eliminar un producto de la lista de deseos
  function removeFromWishlist(button: HTMLButtonElement) {
    const wishlistItem = button.parentNode as HTMLLIElement;
    if (wishlistItem.parentNode) {
      wishlistItem.parentNode.removeChild(wishlistItem);
    }
  }
  