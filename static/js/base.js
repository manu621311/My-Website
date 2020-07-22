function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  $('.navs').click(function(){
    var $x=$(this).next().attr("class");
    $('.'+$x).toggle();
    var $y=$(this).children();
    $($y).children().toggleClass("fa fa-angle-right")
    $($y).children().toggleClass("fa fa-angle-down")
  }); 
  /*$('.dropdown').hover(function(){ 
    $('.dropdown-toggle', this).trigger('click'); 
  });*/
  $(function(){
    $('.dropdown').hover(function() {
        $('.dropdown-toggle',this).addClass('open');
    },
    function() {
        $(this).removeClass('open');
    });
});