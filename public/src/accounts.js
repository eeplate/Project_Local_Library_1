// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  let foundId = accounts.find((account) => account.id === id);
  return foundId;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  const borrowsArrays = books.map((book) => book.borrows);
  //console.log(borrowsArrays);
  let flattenedBorrows = [].concat.apply([], borrowsArrays);
  //console.log(flattenedBorrows);
  let result = flattenedBorrows.filter((borrow) => borrow.id === account.id);
  //console.log(result);
  return result.length;
}



function getBooksPossessedByAccount(account, books, authors) {
  //using account id, find which books are currently checked out
  //by that account. return array of book objects and authors.
  //author needs to be embedded in the book object.

  //retrieves all books that are currently borrowed by the passed in account 
  let matchedBooks = books.filter((book) => {
    return book.borrows[0].id === account.id});

  //iterates over matchedBooks and maps values to a new return object object
  return matchedBooks.map(matchedBook => {
    //finds the author that matches the matchedBook and stores them to matchedAuthor
    const matchedAuthor = authors.find((author) => {
      return author.id === matchedBook.authorId
    })

    return {...matchedBook, author: matchedAuthor}
  });
 }




module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
