let currentPage = 1; // Pagina corrente
const totalPages = 5; // Numero totale di pagine

const previewSlideshow = document.getElementById("preview-slideshow");

function addPreviewItem(src, onclickFunction) {
  const previewItem = document.createElement("div");
  previewItem.classList.add("preview-item");
  previewItem.innerHTML = `<img src="${src}" onclick="${onclickFunction}">`;
  previewSlideshow.appendChild(previewItem);
}

function showPage(pageNumber) {
  // Nasconde tutte le pagine
  document.querySelectorAll('.video-container').forEach(page => {
    page.classList.remove('active');
  });

  // Mostra solo la pagina desiderata
  document.getElementById(`div${pageNumber}`).classList.add('active');

  // Aggiorna la pagina corrente
  currentPage = pageNumber;

  // Aggiorna l'anteprima
  updatePreview();
}

function goToDiv(divNumber) {
  showPage(divNumber);
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
  // Rimuovi tutte le miniature
  while (previewSlideshow.firstChild) {
    previewSlideshow.removeChild(previewSlideshow.firstChild);
  }

  // Aggiungi nuove miniature
  for (let i = 1; i <= totalPages; i++) {
    const src = `DEVMAN980/Diapositiva${i}.JPG`;
    const onclickFunction = `goToDiv(${i})`;
    addPreviewItem(src, onclickFunction);
  }
}

// Inizializza l'anteprima
updatePreview();

// Mostra la prima pagina inizialmente
showPage(currentPage);
