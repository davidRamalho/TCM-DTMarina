//CREATE RENTAL ELEMENTS 
const createRentalElement = (rentalInfo) => {
  const element = $('.items').append(`
    <div class="item ${rentalInfo.type}">
      <img src=${rentalInfo.imgSource} alt="rental-item">
      <div class="item-card">
        <h2 class="item-title">${rentalInfo.title}</h2>
        <p class="item-details">Do you crave a life that knows no limit? Take your summer to the next level and...<a href="/repository/templates/boatDetails.html">View Details</a> </p>
        <div class="rate-tables">
          <div class="item-rates">
            <div class="rate-type">PER HOUR</div>
            <div class="rate-rows">
              <div>8-10AM:</div>
              <div>${rentalInfo.rates.hourly[0]}</div>
            </div>
            <div class="rate-rows">
              <div>1HR:</div>
              <div>${rentalInfo.rates.hourly[1]}</div>
            </div>
            <div class="rate-rows">
              <div>2HRs:</div>
              <div>${rentalInfo.rates.hourly[2]}</div>
            </div>
            <div class="rate-rows">
              <div>4HRs:</div>
              <div>${rentalInfo.rates.hourly[3]}</div>
            </div>
            <div class="rate-rows">
              <div>8HRs:</div>
              <div>${rentalInfo.rates.hourly[4]}</div>
            </div>
            <form action="/">
              <input type="submit" value="BOOK HOURLY"></input>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
              </svg>
            </form>
          </div>
          <div class="item-rates">
            <div class="rate-type">PER DAY</div>
            <div class="rate-rows">
              <div>3-6 DAYS:</div>
              <div>${rentalInfo.rates.daily[0]}</div>
            </div>
            <div class="rate-rows">
              <div>7+ DAYS:</div>
              <div>${rentalInfo.rates.daily[1]}</div>
            </div>
            <form action="/">
              <input type="submit" value="BOOK DAILY"/>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
              </svg>
            </form>
          </div>
        </div>
      </div>
    </div>`);
  return element;
}

const generateRentalItems = (rentalDataArray) => {
  for (const rentalItem of rentalDataArray) {
    createRentalElement(rentalItem);
  }
}

//FAKE RENTAL DATA
const rentalData = [
  {
    type: 'wakesurf', 
    title: 'MasterCraftX24',
    imgSource: '/repository/images/boatRentals/MasterCraftX24.jpg', 
    rates: {
      hourly: ['$299', '$339', '$579', '$1,039', '$1,419'], 
      daily: ['$1,299', '$1,069']
    }
  }, 
  {
    type: 'bowrider', 
    title: 'Chaparral H20 19 Sport',
    imgSource: '/repository/images/boatRentals/ChaparralH2019Sport.jpg', 
    rates: {
      hourly: ['$299', '$339', '$579', '$1,039', '$1,419'], 
      daily: ['$1,299', '$1,069']
    }
  }, 
  {
    type: 'pontoon', 
    title: 'South Bay 525E Pontoon',
    imgSource: '/repository/images/boatRentals/SouthBayPontoon.jpeg', 
    rates: {
      hourly: ['$299', '$339', '$579', '$1,039', '$1,419'], 
      daily: ['$1,299', '$1,069']
    }
  }, 
  {
    type: 'jet-ski', 
    title: 'Yamaha VX Deluxe',
    imgSource: '/repository/images/boatRentals/YamahaVXDeluxe.jpg', 
    rates: {
      hourly: ['$299', '$339', '$579', '$1,039', '$1,419'], 
      daily: ['$1,299', '$1,069']
    }
  },   
  {
    type: 'jet-ski', 
    title: 'Sea-Doo GTI 90',
    imgSource: '/repository/images/boatRentals/Sea-DooGTI90.jpeg', 
    rates: {
      hourly: ['$299', '$339', '$579', '$1,039', '$1,419'], 
      daily: ['$1,299', '$1,069']
    }
  }
]

//CREATES FAQ ITEMS
const createFAQElement = (faqInfo) => {
  const element = $('div.faq').append(`
    <div class="faq-item">
      <div class="qNa">
        <h2>Q:&nbsp${faqInfo.question} </h2>
        <div class="answer hidden"><b>A:&nbsp</b> ${faqInfo.answer}</div>
      </div>
      <div class="faq-expand">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash hidden" viewBox="0 0 16 16">
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
        </svg>
      </div>
    </div>
  `)
  return element;
}

const generateFAQItems = (faqDataArray) => {
  for (const faq of faqDataArray) {
    createFAQElement(faq);
  }
}

//FAKE FAQ DATA
const faqData = [
  {
    question: 'IS THERE A DAMAGE DEPOSIT REQUIRED IN ORDER TO RENT A BOAT?',
    answer: 'Yes. For SeaDoos, Chaparrals, and Cobalts, there is a $500 damage deposit. For Tournament boats, there is a $1000 damage deposit.'
  }, 
  {
    question: 'IS THERE A DAMAGE DEPOSIT REQUIRED IN ORDER TO RENT A BOAT?',
    answer: 'Yes. For SeaDoos, Chaparrals, and Cobalts, there is a $500 damage deposit. For Tournament boats, there is a $1000 damage deposit.'
  }, 
  {
    question: 'IS THERE A DAMAGE DEPOSIT REQUIRED IN ORDER TO RENT A BOAT?',
    answer: 'Yes. For SeaDoos, Chaparrals, and Cobalts, there is a $500 damage deposit. For Tournament boats, there is a $1000 damage deposit.'
  }, 
  {
    question: 'IS THERE A DAMAGE DEPOSIT REQUIRED IN ORDER TO RENT A BOAT?',
    answer: 'Yes. For SeaDoos, Chaparrals, and Cobalts, there is a $500 damage deposit. For Tournament boats, there is a $1000 damage deposit.'
  }, 
  {
    question: 'IS THERE A DAMAGE DEPOSIT REQUIRED IN ORDER TO RENT A BOAT?',
    answer: 'Yes. For SeaDoos, Chaparrals, and Cobalts, there is a $500 damage deposit. For Tournament boats, there is a $1000 damage deposit.'
  }, 
  {
    question: 'IS THERE A DAMAGE DEPOSIT REQUIRED IN ORDER TO RENT A BOAT?',
    answer: 'Yes. For SeaDoos, Chaparrals, and Cobalts, there is a $500 damage deposit. For Tournament boats, there is a $1000 damage deposit.'
  }
];

//ISOTOPE FILTERING
$(document).ready(function() {
  generateRentalItems(rentalData);
  generateFAQItems(faqData);
  
  $('.faq-item').on('click', function() {
    const index = $('.faq-item').index(this)
    
    if ($(`.faq-item > div > div`).eq(index).hasClass('hidden')) {
      $(`.faq-item > div > div`).eq(index).removeClass('hidden');
      $( `.faq-expand > svg.bi-dash`).eq(index).removeClass('hidden');
      $( `.faq-expand > svg.bi-plus`).eq(index).addClass('hidden');
    } else {
      $(`.faq-item > div > div`).eq(index).addClass('hidden')
      $( `.faq-expand > svg.bi-dash`).eq(index).addClass('hidden');
      $( `.faq-expand > svg.bi-plus`).eq(index).removeClass('hidden');
    }
  });



  $(".items").isotope({
    itemSelector: ".item", 
    layoutMode: "fitRows",
    fitRows: {
      gutter: 40
    }
  });
  $(".menu ul li").click(function() {
    $(".menu ul li").removeClass("active");
    $(this).addClass("active");
  
    var selector = $(this).attr("data-filter")
  
    $(".items").isotope({
      filter: selector
    });
    return false;
  });
})