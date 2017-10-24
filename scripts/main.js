$(function() {
  var $carouselContainer = $('.carousel');
  var $images = $('.image', $carouselContainer);
  var $circles = "";
  var imageWidth = $images.first().width();
  var initialMargin = 0;
  var currentMargin = 0;
  var imageCount = $images.length;
  var maxMargin = imageWidth * (imageCount - 1);
  var circleCount = $circles.length;
  var $margins = [];

 createNavCircles();
 createListOfMargins();
 setNavigationCircle();
 advanceSlide();
 
   function advanceSlide(){
     next();
     var loop = setTimeout(advanceSlide, 5000);
     
     $('#stop').on('click',stopSlideShow);
     
     function stopSlideShow(){
       clearTimeout(loop);
     }
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
  
    function jumpTo(event){
     var temp = "";
     $.each($circles, function(index,value){
       if(event.target.id == value.id){
         temp = index;
       }
    });
    var margin = $margins[temp] + "px";
    slide(margin);

    }
 
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
    console.log(currentMargin);
  }



  function createListOfMargins(){
    $margins = [];
    var temp = initialMargin;
    for(var i = 0; i < imageCount; i++){
      $margins.push(temp);
      temp += imageWidth;
    }
    //add negatives to the margins
    $margins = $.map( $margins, function(val , i){
      if(val == 0){
        return val; 
      } else {
        return (val * -1);
      }
    });
    console.log($margins);
  }
   

  //Navigation Circles Functions

   function createNavCircles(){
    for(var i = 1; i <= imageCount;i++){
      $('#dots').append('<div id="circle'+i+'" class="circle"></div>');
    }
     $circles = $('#dots .circle');
   }

  function setNavigationCircle(){
    console.log("set navigation circle function");
    var temp = "";
    $.each($margins,function(index,value){
      if(currentMargin === value){
        temp = index;
      }
    });
    var active = $circles[temp].id;
    setCircleBackground($('#'+active));
  }
  
  function clearNavigationCircles(){
    $.each($circles, function(index,value){
      $div = $('#'+value.id);
      removeCircleBackground($div);
    });
  }
  
  function setCircleBackground(param){
    $(param).addClass("circle-background"); 
  }
  
  function removeCircleBackground(param){
    $(param).removeClass("circle-background");
  }
  $('#next').hover(test,test2);
  $('#next').on('click', next);
  $('#prev').on('click', prev);
  $('#dots').on('click', jumpTo);
  $('#do').on('click', doSomething);
  
  function test(event){
    $(this).css({opacity: 0.5});
  }
  
  function test2(event){
    $(this).css({opacity: 1});
  }
  
  function doSomething(){
    console.log($images);
    for(var i = 0; i <= $images.length - 1; i++){
      console.log($images[i]);
      var test = $images[i].src;
    }
     console.log(test);
     var x = $('<img src='+test+' />');
     console.log(x);
     console.log(x.src);
     $('#next').append($('<img src='+test+' />'));
   
  }
  
 
  
});