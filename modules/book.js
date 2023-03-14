const libraryBooks = document.querySelector('[book-data]');
const titleName = document.getElementById('titleName');
const authorName = document.getElementById('authorName');

class Libraries {
  constructor(id, author, title) {
    this.id = id;
    this.author = author;
    this.title = title;
  }

  // For the Local Storage
  static addToLocalStorage = (librariesContainer) => {
    const storage = localStorage.setItem(
      'books',
      JSON.stringify(librariesContainer),
    );
    return storage;
  }

  static getLocalStorage = () => {
    const storage = localStorage.getItem('books') === null
      ? []
      : JSON.parse(localStorage.getItem('books'));
    return storage;
  }

  // display in the DOM
  static displayTheBooks = () => {
    /* eslint-disable no-use-before-define */
    const displayData = librariesContainer.map(
      (item) => `
        <div class='books'>
        <p> "${item.title}" by ${item.author} </p>
        <button class="delete-btn" data-id= ${item.id}>Delete</button>
        </div>
        `,
    );
    libraryBooks.innerHTML = displayData.join(' ');
  }

  // clear input once submited
  static clearGivenInput = () => {
    titleName.value = '';
    authorName.value = '';
  }

  // delete book from DOM and arraylibrar
  static deleteTheBook = () => {
    libraryBooks.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
      }
      const btnId = e.target.dataset.id;
      Libraries.removeFromLibraryArray(btnId);
    });
  }

  static removeFromLibraryArray = (id) => {
    let librariesContainer = Libraries.getLocalStorage();
    librariesContainer = librariesContainer.filter((item) => item.id !== +id);
    Libraries.addToLocalStorage(librariesContainer);
  }
}

// store values in a container referrenced by local storag
const librariesContainer = Libraries.getLocalStorage();

export { Libraries, librariesContainer };