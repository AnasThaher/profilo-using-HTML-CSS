
console.log("js is run ");
  function toggleMenu(){
    let menutoggel = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');
    menutoggel.classList.toggle('active');
    menu.classList.toggle('active');

  }
  const scrollAnm = ScrollReveal({
    distance:'100px',
    duration:2000,
    rest:true,
    origin:'top',
    
  })
  scrollAnm.reveal('.home-text');
  scrollAnm.reveal('.home-imge',{delay:200});
  scrollAnm.reveal('.social',{delay:200});
  scrollAnm.reveal('.about-text',{});
  scrollAnm.reveal('.about-imge',{origin:'left'});
  scrollAnm.reveal('.heading',{});
  scrollAnm.reveal('.servises-content');
  scrollAnm.reveal('.work-img',{origin:'right'});
  scrollAnm.reveal('.work-text',{origin:'left'});
  scrollAnm.reveal('.app h1',{});
  scrollAnm.reveal('.app');
  scrollAnm.reveal('.contact-form',{});
  scrollAnm.reveal('form input',{delay:200});
  scrollAnm.reveal('form textarea',{delay:200});
