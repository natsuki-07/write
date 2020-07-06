'use strict';
{
  $('.humberger').on('click',function(){
    $('nav').toggleClass('open');
    $('.humberger').toggleClass('show');
  });
  
  $('.fa-search').on('click',function(){
   $('.header_form').toggleClass('click_form');
  });


  $('#home').hover(function(){
     $('#home').children('.nav_lists').children('li').removeClass('nav_list_item',2000);
  },function(){
    $('#home').children('.nav_lists').children('li').addClass('nav_list_item');
  });

  $('#page').hover(function(){
     $('#page').children('.nav_lists').children('li').removeClass('nav_list_item');
  },function(){
    $('#page').children('.nav_lists').children('li').addClass('nav_list_item');
  } );
} 