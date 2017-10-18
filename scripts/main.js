$(function() {
  var $carouselContainer = $('.carousel');
  var $images = $('.image', $carouselContainer);
  var $circles = $('#dots .circle');
  var imageWidth = $images.first().width();
  var initialMargin = 0;
  var currentMargin = 0;
  var imageCount = $images.length;
  var maxMargin = imageWidth * (imageCount - 1);
  var circleCount = $circles.length;

  setNavigationCircle();
 
  function slide(pos) {
    $carouselContainer.animate({
      'margin-left': pos
    }, slideCallback);
  }
  
  function slideCallback(){
    setCurrentMargin();
    clearNavigationCircles();
    setNavigationCircle();
   
  }

  function setCurrentMargin() {
    currentMargin = parseInt($carouselContainer.css('margin-left'));
 }
 
 function clearNavigationCircles(){
    $.each($circles, function(index,value){
      $div = $('#'+value.id);
      removeCircleBackground($div);
    });
  }

  function setNavigationCircle(){
    var $div = "";
    if(currentMargin == 0){
      $div = $('#first_circle');
    } else if(currentMargin == -500){
      $div = $('#second_circle');
    } else if (currentMargin == -1000){
      $div = $('#third_circle');
    } else if (currentMargin == -1500){
      $div = $('#fourth_circle');
    } else if (currentMargin == -2000){
      $div = $('#fifth_circle');
    }
    setCircleBackground($div);
  }
  
  function setCircleBackground(param){
    $(param).addClass("circle-background"); 
  }
  
  function removeCircleBackground(param){
    $(param).removeClass("circle-background");
  }

  function prev() {
    var slideMargin = '+=' + imageWidth + 'px';
    
    if (currentMargin === initialMargin) {
      slideMargin = '-' + maxMargin + 'px';
    }

    slide(slideMargin);
  }

  function next() {
    var slideMargin = '-=' + imageWidth + 'px';
    
    if (currentMargin === -maxMargin) {
      slideMargin = initialMargin + 'px';
    }
    
    slide(slideMargin);
  }

  $('#next').on('click', next);
  $('#prev').on('click', prev);
  $('#do').on('click',clearNavigationCircles);
});