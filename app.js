
// footer text start-------
var messages = [
  "Welcome to Javeri Accessories",
  "Worldwide Shipping Available",
  "We are happy to help! WhatsApp: +923268947900"
];

var index = 0;
var footerMessage = document.getElementById("footerMessage");

function showNextMessage() {
  footerMessage.style.opacity = 0;
  footerMessage.style.transform = "translateY(-20px)"; 

  setTimeout(function() {
    footerMessage.innerHTML = messages[index];
    footerMessage.style.transform = "translateY(20px)";
    footerMessage.style.opacity = 0;

    setTimeout(function() {
      footerMessage.style.transform = "translateY(0)";
      footerMessage.style.opacity = 1;
    }, 50);

    index = (index + 1) % messages.length;
  }, 800); 
}

footerMessage.innerHTML = messages[index];
footerMessage.style.textAlign = "center";
footerMessage.style.padding = "8px";
footerMessage.style.transition = "all 0.8s ease-in-out"; 
index++;

setInterval(showNextMessage, 4000);


// footer text end ---------




// about text start----

var aboutText = document.getElementById("aboutText");
var aboutBtn = document.getElementById("aboutBtn");

var lessText = `
<p class="text-center">
  Shop beautiful artificial jewellery in Pakistan — from trendy 
  <a class="text-dark" href="#">earrings</a> and chic 
  <a class="text-dark" href="#">bangles</a> to <br> classic 
  <a class="text-dark" href="#">rings</a> today with timeless elegance.
</p>`;

var moreText = `
<p>
      Shop beautiful artificial jewellery in Pakistan — from trendy 
      <a class="text-dark" href="#">earrings</a> and chic 
      <a class="text-dark" href="#">bangles</a> to  classic 
      <a class="text-dark" href="#">rings</a> today with timeless elegance.
    </p>
     <p>
    At Javeri Accessories, we create premium artificial bridal jewellery that gracefully merges traditional<br>
    craftsmanship with modern fashion aesthetics. Browse our exquisite bridal jewellery sets online,<br>
    including mehndi jewellery, jhoomar tikkas, bridal gold necklace sets, and more available across Pakistan.<br>
    Whether preparing for your nikah, baraat, or walima, our curated bridal collections feature bridal costume<br>
    jewellery, choker sets, kundan necklaces, and elegant designer pieces crafted with precision and detail.<br>
    From delicate ornaments to statement bridal jewellery sets, each design captures timeless elegance to<br>
    complement your perfect bridal look.
  </p>
  
  <p>
    Our online bridal jewellery collection in Pakistan includes gold-plated bridal sets, artificial earrings,<br>
    calligraphy lockets, silver malas, bridal anklets, and nose rings – carefully designed to complete every<br>
    bride’s dream wedding style. Shop online effortlessly to discover top-quality artificial jewellery in<br>
    Pakistan with transparent prices, nationwide fast delivery, and reliable customer care. Whether based in<br>
    Lahore, Karachi, or Islamabad, our bridal sets blend luxury and trend, delivered straight to your door with convenience.
  </p>
  
  <p>
    Recognized among the best artificial jewellery brands in Pakistan, Javeri Accessories stands out for refined<br>
    craftsmanship, contemporary necklace designs, and affordable bridal jewellery sets. For those looking for<br>
    Indian-inspired jewellery in Pakistan, gold-plated bridal sets, or elegant white bridal collections, our<br>
    platform offers an unmatched selection. We provide jewellery for brides, bridesmaids, and families seeking<br>
    artistic designs that bring sparkle and sophistication to wedding celebrations.
  </p>
  
  <p>
    Join hundreds of satisfied brides across Pakistan who trust Javeri Accessories for premium bridal jewellery<br>
    online. Explore trending jewellery designs, from modern minimal pieces to royal traditional sets, and elevate<br>
    your wedding style with the finest artificial jewellery in Pakistan. From calligraphy lockets to silver<br>
    jewellery, our collections suit every occasion, style, and budget.
  </p>
  
  <p>
    Experience elegance and affordability with our handpicked artificial jewellery in Pakistan inspired by rich<br>
    heritage and timeless design. Whether searching for bridal jewellery wholesale in Pakistan, kundan sets, or<br>
    top artificial jewellery brands, Javeri Accessories offers variety, quality, and value. We proudly feature<br>
    gold-plated jewellery, artificial bangles, and bridal sets that reflect true Pakistani artistry. Trusted among<br>
    Pakistani jewellery brands, our store makes online jewellery shopping in Pakistan easy, secure, and enjoyable.
  </p>
  
  <p>
    Discover intricately designed accessories ideal for formal events and festive occasions. Our extensive<br>
    jewellery collection ensures you find a piece for every look. Complete your bridal style with authentic<br>
    kundan earrings, classic necklaces, and ring designs that highlight tradition with elegance. Explore unique<br>
    jewellery at wholesale prices and enjoy a seamless online shopping experience built for modern Pakistani brides.
  </p>
  
  <p>
    If you’re searching for gold-plated jewellery in Pakistan or exploring stylish artificial jewellery online,<br>
    Javeri Accessories delivers beauty and authenticity. From bridal jewellery sets to kundan malas, our online<br>
    jewellery store in Pakistan is your trusted destination. Discover exquisite artificial bridal jewellery,<br>
    wedding sets, and affordable gold-plated collections — crafted to make every bride shine with unmatched grace.
  </p>`


function toggleText() {
  if (aboutBtn.textContent === "Read More") {
    aboutText.innerHTML = moreText;
    aboutBtn.textContent = "Read Less";
  } else {
    aboutText.innerHTML = lessText;
    aboutBtn.textContent = "Read More";
  }
}

// about text end----
