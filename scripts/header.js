// CREATES HEADER
const createHeader = () => {
  const element = $('.header').append(`
    <div class="logo">
      <img src="/Elements/00 Global/Downtown-Marina-Logo.svg" alt="logo">
    </div>
    <nav class="nav">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link" href="/">BOAT RENTALS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">BOAT TOURS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">MOORAGE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">FUEL + RETAIL</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">PHOTOS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">NEWS + TIPS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">CONTACT</a>
        </li>
      </ul>
    </nav>
    <div class="book">
      <div class="hang10">
        <img src="/Elements/00 Global/Doodle-Hang-Loose.svg" alt="hangLoose">
      </div>
      <a href="/" class="book-link">BOOK ONLINE</a>
    </div>`);
  return element;
}


$(document).ready(function() {
  createHeader();
});