
  // JavaScript personalizado para la validación del formulario
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  // Validación del formulario
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Por favor, complete todos los campos del formulario.");
      return;
  }

  // Envío del formulario
  alert("El formulario se envió correctamente.");
  document.getElementById("myForm").reset();
});

