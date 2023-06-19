// Selecciona el formulario por su ID y agrega un evento de escucha para el evento de envío (submit)
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Evita que el formulario se envíe y se refresque la página

    // Lógica de envío del formulario aquí
});

// Selecciona el botón "addToCart" por su ID y agrega un evento de escucha para el evento de clic (click)
document.getElementById("addToCart").addEventListener("click", function() {
    // Obtiene los valores seleccionados de los elementos de formulario: size, color y brand
    var size = document.getElementById("size").value;
    var color = document.getElementById("color").value;
    var brand = document.getElementById("brand").value;

    // Construye un mensaje con los detalles del producto seleccionados
    var message = "Detalles del producto seleccionados:\n\nTalla: " + size + "\nColor: " + color + "\nMarca: " + brand;

    // Muestra una alerta con el mensaje de detalles del producto
    alert(message);
});

// Selecciona el enlace "cartLink" por su ID y agrega un evento de escucha para el evento de clic (click)
document.getElementById("cartLink").addEventListener("click", function(event) {
    event.preventDefault();
    // Evita que el enlace se comporte como un enlace normal y no se refresque la página

    // Lógica para el enlace del carrito de compras aquí
});
