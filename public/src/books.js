// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  let foundAuthor = authors.find((author) => author.id === id);
  return foundAuthor;
}

function findBookById(books, id) {
  let foundBook = books.find((book) => book.id === id);
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
  let both = [];
  let notReturned = books.filter((book) => book.borrows[0].returned === false);
  both.push(notReturned);
  let returned = books.filter((book) => book.borrows[0].returned === true);
  both.push(returned);
  return both;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    /*
      {
        id: "5f446f2ea6b68cf6f85f6e28",
        returned: true,
      },
    */
    // find the associated account using .find()
    const account = accounts.find((account) => {
      return account.id === borrow.id;
    })

    return {
      ...borrow,
      ...account
    } 
  })
  .slice(0, 10)
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
