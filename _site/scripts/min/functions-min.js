$(document).ready(function(){var e=$(".accordion-target"),t=$(".accordion-sub");t.hide(),e.click(function(a){a.preventDefault(),t.slideUp(180),e.removeClass("active"),$(this).hasClass("active")?($(this).removeClass("active").next(".accordion-sub").slideUp(180),$(this).children(".target-indicator").text("+")):($(this).next(".accordion-sub").slideToggle(180),$(this).toggleClass("active"),$(".target-indicator").text("+"),$(this).children(".target-indicator").text("-"))}),$(".accordion-sub a").click(function(e){e.preventDefault(),$(this).toggleClass("active")}),$(".side-nav-menu-target").on("click",function(){var e=$(".side-nav-menu-target"),t=$(".side-nav-sub-menu"),a=$(this),i=a.hasClass("active");e.removeClass("active"),t.removeClass("show"),i||(a.toggleClass("active"),a.next(t).toggleClass("show"))})});