  /*===========================================
	=     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky-menu");
		$('.scroll-to-target').removeClass('open');
        $("#header-fixed-height").removeClass("active-height");

	} else {
		$("#sticky-header").addClass("sticky-menu");
		$('.scroll-to-target').addClass('open');
        $("#header-fixed-height").addClass("active-height");
	}
});
/*===========================================
	=    		Mobile Menu			      =
=============================================*/
//SubMenu Dropdown Toggle
if ($('.tgmenu__wrap li.menu-item-has-children ul').length) {
    console.log($('.tgmenu__wrap li.menu-item-has-children ul').length);
      $('.tgmenu__wrap .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="plus-line"></span></div>');
  }
  
  //Mobile Nav Hide Show
  if ($('.tgmobile__menu').length) {
  
      var mobileMenuContent = $('.tgmenu__wrap .tgmenu__main-menu').html();
      $('.tgmobile__menu .tgmobile__menu-box .tgmobile__menu-outer').append(mobileMenuContent);
  
      //Dropdown Button
      $('.tgmobile__menu li.menu-item-has-children .dropdown-btn').on('click', function () {
          $(this).toggleClass('open');
          $(this).prev('ul').slideToggle(300);
      });
      //Menu Toggle Btn
      $('#toggleButton').on('click', function () {
          $('body').addClass('mobile-menu-visible');
      });
  
      //Menu Toggle Btn
      $('.tgmobile__menu-backdrop, .tgmobile__menu .close-btn').on('click', function () {
          $('body').removeClass('mobile-menu-visible');
      });
  };
  
  /*=============================================
  =     Offcanvas Menu      =
  =============================================*/
  $(".menu-tigger").on("click", function () {
      $(".offCanvas__info, .offCanvas__overly").addClass("active");
      return false;
  });
  $(".menu-close, .offCanvas__overly").on("click", function () {
      $(".offCanvas__info, .offCanvas__overly").removeClass("active");
  });
 