// Variables
const productos = [
    { id: 1, nombre: "Zapatillas Nike 1", precio: 1500, imagen: "zapatillas_nike_1 - copia.jpeg" },
    { id: 2, nombre: "Zapatillas Nike 2", precio: 2000, imagen: "zapatillas_nike_2 - copia.jpeg" },
    { id: 3, nombre: "Zapatillas Adidas 1", precio: 1800, imagen: "adidas_niños - copia.jpeg" },
    { id: 4, nombre: "Zapatillas Adidas 2", precio: 2200, imagen: "adidas - copia.jpeg" },
  ];
  
  const carrito = [];
  
  // Función para agregar un producto al carrito
  function agregarAlCarrito(id) {
    const producto = productos.find((p) => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
  }
  
  // Función para actualizar el contenido del carrito en el DOM
  function actualizarCarrito() {
    const carritoElement = document.getElementById("carrito");
  
    // Vaciar el contenido anterior del carrito
    carritoElement.innerHTML = "";
  
    // Agregar los productos al carrito
    carrito.forEach((producto) => {
      const productoElement = document.createElement("li");
      productoElement.classList.add("list-group-item");
      productoElement.innerText = producto.nombre;
      carritoElement.appendChild(productoElement);
    });
  
    // Calcular el precio total
    const totalElement = document.getElementById("total");
    const total = carrito.reduce((suma, producto) => suma + producto.precio, 0);
    totalElement.innerText = total;
  }
  
  // Event Listener para el botón "Agregar al carrito"
  const botonesAgregarCarrito = document.querySelectorAll(".btn-primary");
  botonesAgregarCarrito.forEach((boton, index) => {
    boton.addEventListener("click", function () {
      const productoId = index + 1;
      agregarAlCarrito(productoId);
    });
  });
  
  // Event Listener para el botón "Vaciar"
  const botonVaciar = document.getElementById("boton-vaciar");
  botonVaciar.addEventListener("click", function () {
    carrito.length = 0;
    actualizarCarrito();
  });
  
  // Ejecutar la función de actualización del carrito inicialmente
  actualizarCarrito();
  