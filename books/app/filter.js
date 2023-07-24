const allBtns = document.querySelectorAll('.btn')
const booksAllValuesAvailables = document.getElementById('valor_total_livros_disponiveis')

allBtns.forEach(btn => btn.addEventListener('click', booksFilter))

function booksFilter() {
  const elementBtn = document.getElementById(this.id).value  
  console.log(elementBtn);
  const filtered = elementBtn !== 'disponivel' ? filterByCount() :  filterByCategory(elementBtn)
  booksView(filtered)
  const finalValue = sumAllBooksValues(filtered)  
  if (elementBtn !== 'disponivel') {
    elementAllValuesAvailables(finalValue)
  }
}

function filterByCount() {
  return books.filter(book => book.quantidade > 0);
}

function filterByCategory(category) {
  books.filter(book => book.categoria == category)
  
}

function elementAllValuesAvailables(finalValue) {
  booksAllValuesAvailables.innerHTML = `
  <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${finalValue}</span></p>
  </div>
  `
}

allBtns.forEach(btn => btn.addEventListener('click', booksFilter))