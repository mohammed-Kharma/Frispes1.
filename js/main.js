$(function(){
  // $(".number").counterUp({
  //   delay:10,
  //   time:2000
  // });
  $(window).scroll(function(){
    if(this.scrollY >56){
      $("header").addClass("fixed");
    }else{
      $("header").removeClass("fixed");
    }
  });
  $(".click1").click(function(){
    $(".ber-left .line-bg").css({
      "height":"30%"
    });
    // $(".span1 span").append("0");
  });
  $(".click2").click(function(){
    $(".ber-left .line-bg").css({
      "height":"40%"
      
    });
    // $(".span1 span").append("1");

  });
  $(".click3").click(function(){
    $(".ber-left .line-bg").css({
      "height":"60%"
    })
  });
  $(".click4").click(function(){
    $(".ber-left .line-bg").css({
      "height":"80%"
    })
  });
  $(".click5").click(function(){
    $(".ber-left .line-bg").css({
      "height":"100%"
    })
  });
  $(".carousel-control-next").click(function(){
    $(".ber .line").css({
      "width":"+=33%"
    })
  });
  $(".carousel-control-prev").click(function(){
    $(".ber .line").css({
      "width":"-=33%"
    })
  });
});
// strad js
// -----------------------------------------------------------------------------



