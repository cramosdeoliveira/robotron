const btnOrderByPrice = document.getElementById('btnOrdenarPorPreco')

btnOrderByPrice.addEventListener('click', orderBooksByPrice)

function orderBooksByPrice() {
  let booksSorted = books.sort((a,b) => a.preco - b.preco)  
  booksView(booksSorted)
}

