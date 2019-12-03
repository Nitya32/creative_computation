////$("#btn1").click(function(){console.log("btn1 is clicked!");});
//
//$("#btn1").click(function(){
//  alert("Hello World!");
//});
//
//$("#btn1").click(function(){
//	$("body").css("background-color", "red");
//});
//
//
//$("#show_btn").click(function(){
//  $("#show_target").show();
//});

//$("#button").click(function(){
//    $("#target").append("clicked!");
//});
////$("#button2").hover(function(){$("#target2".prepend("on");function(){$("#target2".prepend("off");)})});
//$("#button2").hover(function(){
//    $("#target2").prepend("on");
//},function(){
//    $("#target2").prepend("off");
//});
//$("#button2").click(function(){$("target3").toggleClass("animate_target");}); 
////$("window").resize(function(){$("console.log("resizing"))}));
//
//var window_width = window.innerWidth;
//console.log(window_width);
//if(window_width<1000){
//    console.log("width is less than 1000");
//    $("#target2").addClass("red");
//}
//$("#button3").click(function(){
//    alert("Hello World!");
//});
//$("button4").click(function(){console.log("Hello World!");});
//$("button3").hover(function(){$("body").toggleClass("red");});                              
//                            
              

$("#btn1").click(function(){
  $("#tn1").append("breath");
  });


$("#btn2").hover(function(){
  $("#tn2").prepend("in");
},function(){
  $("#tn2").prepend("out");
});


var target_top = $("#tn3").offset().top;
var sTop;
$(window).scroll(function(){
  console.log("scrolling");
  sTop = $(window).scrollTop();
  if(sTop >=target_top){
      console.log("scrolling");
    $("#tn3").addClass("purple");
  }});

var window_width;
$(window).resize(function(){
  console.log("resizing");
  window_width = $(window).width()
  if(window_width < 1000){
    $("#tn4").addClass("yellow");
  }
  // other response here  
});


$("#btn10").click(function(){
  alert("You will be the coolest human if you wear white shoes!");
});

$("#btn11").click(function(){
  console.log("You will be the coolest human if you wear white shoes!");
  });

$("#btn12").click(function(){
  $("#tn12").toggleClass("animated_tn12");
});

$("#btn13").click(function(){
  $("#tn13").toggleClass("show");
});



