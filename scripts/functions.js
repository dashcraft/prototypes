
$(document).ready(function(){

  var $accordionTarget = $('.accordion-target');
  var $accordionSub = $('.accordion-sub');

  $accordionSub.hide();

  $accordionTarget.click(function(e){
    e.preventDefault();
    $accordionSub.slideUp(180);
    $accordionTarget.removeClass('active');
    if($(this).hasClass('active')) {
      $(this).removeClass('active').next('.accordion-sub').slideUp(180);
      $(this).children(".target-indicator").text("+");
    }else {
      $(this).next(".accordion-sub").slideToggle(180);
      $(this).toggleClass('active');
      $(".target-indicator").text("+");
      $(this).children(".target-indicator").text("-");
    }
  });
  $('.accordion-sub a').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
  });

// = = = = Side Nav = = = = //

  $('.side-nav-menu-target').on('click',function(){
    var $menuTarget = $('.side-nav-menu-target');
    var $subMenu = $('.side-nav-sub-menu');
    var $this = $(this);
    // Remove Classes Globaly to close all the drawers
    var isActive = $this.hasClass('active');
    $menuTarget.removeClass('active');
    $subMenu.removeClass('show');

    if(!isActive){
      // Toggle Classes on clicked element
      $this.toggleClass('active');
      $this.next($subMenu).toggleClass('show');
    }

  });
});
