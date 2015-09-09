$(document).delegate('#info_page', 'pagebeforeshow', function () {
   $('.right_side_content h2').html(" ");
});

//----------------------------------------------------

$(document).delegate('#info_page', 'pageshow', function () {
	getInfo2();

});




function getInfo2(){
  widthInfo();
  heightPage()
  var dts = localStorage.getItem('dta');

  var dtsT = localStorage.getItem('dtaT');
  $('.right_side_content h2').remove();
  $('.right_side_content').prepend('<h2></h2>');

  $('.right_side_content h2').prepend(dtsT);
  
  $('.right_side_content').children('.swiper-slide').each(function() {
      if ($(this).attr('data-s') != dts) {
       $(this).hide();
        //$(this).show();
        
      }else{
        $(this).show();

      };
  });

};

