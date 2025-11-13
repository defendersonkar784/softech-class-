
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  if (mainNav.style.display === 'flex') {
    mainNav.style.display = 'none';
  } else {
    mainNav.style.display = 'flex';
    mainNav.style.flexDirection = 'column';
    mainNav.style.position = 'absolute';
    mainNav.style.right = '20px';
    mainNav.style.top = '64px';
    mainNav.style.background = 'white';
    mainNav.style.padding = '12px';
    mainNav.style.borderRadius = '8px';
    mainNav.style.boxShadow = '0 10px 30px rgba(11,18,32,0.08)';
  }
});


document.getElementById('year').textContent = new Date().getFullYear();


document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();

  if (!name || !phone || !email || !msg) {
    alert('कृपया सभी फ़ील्ड भरें।');
    return;
  }

  alert('धन्यवाद ' + name + '! आपकी जानकारी मिल गयी है. हम जल्द ही संपर्क करेंगे।');

  this.reset();
});


const reviews = document.querySelectorAll('.reviews-slider .review');
let rIndex = 0;
function showReview(i){
  reviews.forEach((r, idx) => {
    r.style.display = idx === i ? 'block' : 'none';
  });
}
if (reviews.length){
  showReview(rIndex);
  setInterval(() => {
    rIndex = (rIndex + 1) % reviews.length;
    showReview(rIndex);
  }, 4000);
}

