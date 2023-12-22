document.addEventListener('DOMContentLoaded', function () {
  let currentPage = 1; // Pagina corrente
  const totalPages = 4; // Numero totale di pagine

  function showPage(pageNumber) {
    document.querySelectorAll('.video-container').forEach(page => {
      page.classList.remove('active');
    });

    document.getElementById(`div${pageNumber}`).classList.add('active');

    currentPage = pageNumber;
    updatePreview();
  }

  function goToDiv(page) {
    showPage(page); // Rimuove i primi tre caratteri ("div") dall'id
  }
  

function goToPrevious(page) {
  if (page > 1) {
    showPage(page - 1);
  }
}

function goToNext(page) {
  if (page < totalPages) {
    showPage(page + 1);
  }
}

function updatePreview() {
  const previewImages = document.querySelectorAll('.image-item');

  previewImages.forEach((image, index) => {
    image.classList.remove('active');
    if (index + 1 === currentPage) {
      image.classList.add('active');
    }
  });
}

// Inizializza l'anteprima
updatePreview();

// Mostra la prima pagina inizialmente
showPage(currentPage);
});