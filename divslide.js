let currentPage = 1; // Pagina corrente
const totalPages = 5; // Numero totale di pagine

function showPage(pageNumber) {
  // Nasconde tutte le pagine
  document.querySelectorAll('.video-container').forEach(page => {
    page.classList.remove('active');
  });

  // Mostra solo la pagina desiderata
  document.getElementById(`div${pageNumber}`).classList.add('active');
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

// Mostra la prima pagina inizialmente
showPage(currentPage);
