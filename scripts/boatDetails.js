
//GENERATES BOAT DETAILS PAGE
const createBackToOverview = (name) => {
  const element = $('.back').append(`
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
      </svg>
      <div class="link-back">&nbsp Back to Overview &nbsp</div>
      <div>&nbsp ${name}</div>
    </div>
  `)
  return element;
}

const createRentalCard = (rentalData) => {
  const element = $('.rentalCard').append(`
    <div class="title">${rentalData.title}</div>
    <div class="rentalImage">
      <img src="${rentalData.imgSource}" alt="rental-item">
    </div>
    <div class='image-roll'>
      <img src="${rentalData.imgSource}" alt="rental-item">
      <img src="${rentalData.imgSource}" alt="rental-item">
      <img src="${rentalData.imgSource}" alt="rental-item">
      <img src="${rentalData.imgSource}" alt="rental-item">
      <img src="${rentalData.imgSource}" alt="rental-item">
      <img src="${rentalData.imgSource}" alt="rental-item">
      <img src="${rentalData.imgSource}" alt="rental-item">
    </div>
    <div class="card-details">
      <div class="details-col">
        <div class="brand-name">${rentalData.title}</div>
        <div class="detailed-info">
          Do you crave a life that knows no limit? Take your summer to the next level and live it up in our XT23, an all new crossover MasterCraft that welcomes wakeboards, surfboards, skis and whatever else you please! The XT23 is where classic traditional bow meets new progressives style lines. An Ilmor engine delivers the highest level of performance and is ideal for competitive to recreational water sports. Get ready to make some waves while also enjoying Gen 2 Surf System and a substantial 2600 pounds of ballast. Enjoy an industry-leading quality boat with your loved ones with the XT23.
        </div>
          <div class="perHour">
            <div class="perHrTitle">PER HOUR</div>
            <div class="time">
              <div>
                <div>8-10AM</div>
                <div class="perHrPrice">${rentalData.rates.hourly[0]}</div>
              </div>
              <div>
                <div>1 HOUR</div>
                <div class="perHrPrice">${rentalData.rates.hourly[1]}</div>
              </div>
              <div>
                <div>2 HOURS</div>
                <div class="perHrPrice">${rentalData.rates.hourly[2]}</div>
              </div>
              <div>
                <div>4 HOURS</div>
                <div class="perHrPrice">${rentalData.rates.hourly[3]}</div>
              </div>
              <div>
                <div>8 HOURS</div>
                <div class="perHrPrice">${rentalData.rates.hourly[4]}</div>
              </div>
            </div>
            <form action="/">
              <label>
                <input type="submit" value="&nbsp;&nbsp;&nbsp;&nbsp;BOOK HOURLY"></input>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
              </label>
            </form>
          </div>
      </div>
      <div class="specs-col">
        <div class="spec">SPECS</div>
        <div class="spec-table">
          <div>
            <div>Seating:</div>
            <div>Length:</div>
            <div>Ballast:</div>
            <div>Tower w/Shade:</div>
            <div>Tower Speakers:</div>
            <div>Engine:</div>
          </div>
          <div>
            <div>16</div>
            <div>23 ft 4in (7.11m)</div>
            <div>2660lbs</div>
            <div>Yes</div>
            <div>Yes</div>
            <div>Ilmore 5000 MPI VD 1.57</div>
          </div>
        </div>
          <div class="note">Note: Actual boat and specs may vary from pictures.</div>
        <div class="perDay">
          <div class="perDay-title">PER DAY</div>
          <div class="times">
            <div>3-6 DAYS</div>
            <div>7+ DAYS</div>
          </div>
          <div class="perDayPrices">
            <div>${rentalData.rates.daily[0]}</div>
            <div>${rentalData.rates.daily[1]}</div>
          </div>
          <form action="/">
          <label>
            <input type="submit" value="&nbsp;&nbsp;&nbsp;&nbsp;BOOK DAILY"></input>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>
          </label>
        </form>
        </div>
      </div>
    </div>
  `);
  return element;
}

$(document).ready(function() {
  const title = sessionStorage.getItem('title');
  const items = JSON.parse(sessionStorage.getItem('items'));
  let rentalInfo;
  for (const item of items) {
    if (item.title === title) {
      rentalInfo = item;    
    }
  }

  createBackToOverview(title);
  createRentalCard(rentalInfo);
  $('.back').on('click', function() {
    window.location.href = "/repository/templates/boatRentals.html"
  });

});