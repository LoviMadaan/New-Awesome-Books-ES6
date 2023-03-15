const book = document.querySelector('.list-one');
const addNew = document.querySelector('.add-new');
const contacts = document.querySelector('.contact-btn');
const bookContainer = document.getElementById('bookContainer');
const contactsContainer = document.getElementById('contact');
const adForm = document.getElementById('addForm');

const onePage = () => {
  book.addEventListener('click', () => {
    bookContainer.style.display = 'block';
    adForm.style.display = 'none';
    contactsContainer.style.display = 'none';
  });

  addNew.addEventListener('click', () => {
    bookContainer.style.display = 'none';
    adForm.style.display = 'block';
    contactsContainer.style.display = 'none';
  });

  contacts.addEventListener('click', () => {
    contactsContainer.style.display = 'block';
    bookContainer.style.display = 'none';
    adForm.style.display = 'none';
  });
};

export default onePage;