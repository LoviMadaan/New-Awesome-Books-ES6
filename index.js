/* eslint-disable no-undef */

import { Libraries, librariesContainer } from './modules/book.js';
import dateTime from './modules/date.js';
import onePage from './modules/class.js';

dateTime();
onePage();

const form = document.getElementById('myForm');

// innitialize form submit to create Library instance
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = Math.floor(Math.random() * 1000);
  const book = new Libraries(id, authorName.value, titleName.value);
  librariesContainer.push(book);
  Libraries.displayTheBooks();
  Libraries.clearGivenInput();
  Libraries.deleteTheBook();
  Libraries.addToLocalStorage(librariesContainer);
});
window.addEventListener('DOMContentLoaded', () => {
  Libraries.displayTheBooks();
  Libraries.deleteTheBook();
});