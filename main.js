/*pagina carrusel*/
document.addEventListener("DOMContentLoaded", function() {
    const imageSlider = document.getElementById("imageSlider");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const images = imageSlider.getElementsByClassName("img");
    
    let currentImageIndex = 0;
    const totalImages = images.length;

    // Función para avanzar a la siguiente imagen
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        updateSlider();
    }
   
    // Función para retroceder a la imagen anterior
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        updateSlider();
    }
 
    // Agregar manejadores de eventos a los botones
    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", prevImage);
  

    // Función para actualizar el carrusel
    function updateSlider() {
        for (let i = 0; i < totalImages; i++) {
            images[i].style.display = "none";
        }
        
        for (let i = 0; i < 1; i++) {
            const index = (currentImageIndex + i) % totalImages;
            images[index].style.display = "block";
        }
    }

    // Mostrar la primera imagen al cargar la página
    updateSlider();
});