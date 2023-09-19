function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }




  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });





  const counters = document.querySelectorAll('.counter')

  counters.forEach(counter => {
      counter.innerText = '0'
  
      const updateCounter = () => {
          const target = +counter.getAttribute('data-target')
          const c = +counter.innerText
  
          const increment = target / 200
  
          if(c < target) {
              counter.innerText = `${Math.ceil(c + increment)}`
              setTimeout(updateCounter, 1)
          } else {
              counter.innerText = target
          }
      }
  
      updateCounter()
  })
  
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



const carouselContainer = document.querySelector('.carousel-container');
let animationDuration = 5; // Default animation duration in seconds

function updateAnimationDuration(duration) {
    const animationStyle = `slide ${duration}s linear infinite`;
    carouselContainer.style.animation = animationStyle;
}

// Call the function with the initial animation duration
updateAnimationDuration(animationDuration);

// You can later update the animation duration as needed
animationDuration = 3; // For example, change the duration to 3 seconds
updateAnimationDuration(animationDuration);
























