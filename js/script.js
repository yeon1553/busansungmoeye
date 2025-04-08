$(document).ready(function(){

  //menu
  $("nav>.main_menu>li").mouseenter(function(){
      $(".sub, .menu_bg").stop().slideDown();
  });

  $("nav>.main_menu>li").mouseleave(function(){
      $(".sub, .menu_bg").stop().slideUp();

      $(this).removeClass("on");
  });


  //keyboard event menu
  $("nav>.main_menu>li").focusin(function(){
      $(".sub, .menu_bg").slideDown();

      $("nav>.main_menu>li").removeClass("on");
      $(this).addClass("on");
  });


  $("nav>.main_menu>li:last-child").focusout(function(){
      $("nav>.main_menu>li").removeClass("on");
  });

  $("nav li:last-child li:last-child").focusout(function(){
      $(".sub, .menu_bg").slideUp();
  });

  //header end


  var swiper = new Swiper(".mySwiper_1", {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });

  // section_1 end


  var swiper = new Swiper('.mySwiper_2', {
      slidesPerView: 4,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  
  
    var swiper = new Swiper('.mySwiper_3', {
      slidesPerView: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  
  
    var swiper = new Swiper('.mySwiper_4', {
      slidesPerView: 2,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  
  
    var swiper = new Swiper('.mySwiper_5', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  
    // section_3 end


    var swiper = new Swiper(".mySwiper_6", {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


    var swiper = new Swiper(".mySwiper_7", {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


    var swiper = new Swiper(".mySwiper_8", {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // section_5 end


    $(".quick_menu").click(function(){

      $("html, body").animate({
          scrollTop: 0,
      }, 400);
    
    });
    
    // quick_menu end

}); //end