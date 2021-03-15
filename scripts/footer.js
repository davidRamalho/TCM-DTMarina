// CREATES FOOTER
const createFooter = () => {
  const element = $('.footer').append(`
    <div class="footer-content">
      <div class="contact-info">
        <img src="/repository/images/home/Downtown-Marina-Logo.svg" alt="logo">
        <div class="contact-row">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3 footer-icon" viewBox="0 0 16 16">
            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
          <div><b>Open 7 days a week<br> Boating season: May - Sept</b></div>
        </div>
        <div class="contact-row">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill footer-icon" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          <div>210 Bernard Ave,<br> Kelowna BC V1Y 1H2</div>
        </div>
        <div class="contact-row">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill footer-icon" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>
          <div>250-763-5599</div>
        </div>
        <div class="contact-row">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill footer-icon" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
          </svg>
          <div>info@downtownmarina.ca</div>
        </div>
      </div>
      <div class="footer-links">
        <a href="/repository/templates/boatRentals.html"><b>BOAT RENTALS</b></a>
        <a href="/"><b>BOAT TOURS</b></a>
        <a href="/"><b>MOORAGE</b></a>
        <a href="/"><b>FUEL + RETAIL</b></a>
        <a href="/"><b>PHOTOS</b></a>
        <a href="/"><b>CONTACT</b></a>
        <a href="/"><b>PRIVACY POLICY</b></a>
        <a href="/"><b>TERMS OF SERVICE</b></a>
      </div>
      <div class="footer-links2">
        <a href="/"><b>NEWS + TIPS</b></a>
        <a href="/" class="tips">COVID-19 UPDATE</a>
        <a href="/" class="tips">BOATING FAQ</a>
        <a href="/" class="tips">SEADOO RENTAL FAQ</a>
        <a href="/" class="tips">MOORAGE + FUEL STATION NEWS</a>
        <a href="/" class="tips">OKANAGAN LAKE INFO</a>
        <a href="/" class="tips">THINGS TO DO</a>
        <a href="/" class="tips">ABOUT US</a>
      </div>
    </div>
    <img class="sun" src="/repository/images/home/Doodle-Sun.svg" alt="sun-doodle">
    <img class="surfboard" src="/repository/images/home/Doodle-Surfboard.svg" alt="surf-doodle">`);
  return element;
}


$(document).ready(function() {
  createFooter();
});