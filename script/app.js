
(function() {
 
  initInternationalClocks();
  
  initLocalClocks();
  
  moveSecondHands();
  
  setUpMinuteHands();
setInterval(function() {
    showImages();
}, 5000);
})();


 function getTimes() {
  moment.tz.add([

    'America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0'
    ]);
  var now = new Date();
  
  var times = [
    
    {
      jsclass: 'js-new-york',
      jstime: moment.tz(now, "America/New_York")
    }
  ];
  return times;
}


function initInternationalClocks() {
  
  var times = getTimes();
  for (i = 0; i < times.length; ++i) {
    var hours = times[i].jstime.format('h');
    var minutes = times[i].jstime.format('mm');
    var seconds = times[i].jstime.format('ss');

    var degrees = [
      {
        hand: 'hours',
        degree: (hours * 30) + (minutes / 2)
      },
      {
        hand: 'minutes',
        degree: (minutes * 6)
      },
      {
        hand: 'seconds',
        degree: (seconds * 6)
      }
    ];
    for (var j = 0; j < degrees.length; j++) {
      var elements = document.querySelectorAll('.active .' + times[i].jsclass + ' .' + degrees[j].hand);
      for (var k = 0; k < elements.length; k++) {
        	elements[k].style.webkitTransform = 'rotateZ('+ degrees[j].degree +'deg)';
          elements[k].style.transform = 'rotateZ('+ degrees[j].degree +'deg)';
         
          if (degrees[j].hand === 'minutes') {
            elements[k].parentNode.setAttribute('data-second-angle', degrees[j + 1].degree);
          }
      }
    }
  }

  var elements = document.querySelectorAll('.clock');
  for (var l = 0; l < elements.length; l++) {
    elements[l].className = elements[l].className + ' show';
  }
}


function initLocalClocks() {
  
  var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();

  
  var hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ];
 
  for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll('.local .' + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
        
        if (hands[j].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }
    }
  }
}


function moveSecondHands() {
  var containers = document.querySelectorAll('.bounce .seconds-container');
  setInterval(function() {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 6;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
      containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
    }
  }, 1000);
  for (var i = 0; i < containers.length; i++) {
    
    var randomOffset = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    containers[i].style.transitionDelay = '0.0'+ randomOffset +'s';
  }
}


function setUpMinuteHands() {
  
  var containers = document.querySelectorAll('.minutes-container');
  var secondAngle = containers[containers.length - 1].getAttribute('data-second-angle');
  console.log(secondAngle);
  if (secondAngle > 0) {
   
    var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
    console.log(delay);
    setTimeout(function() {
      moveMinuteHands(containers);
    }, delay);
  }
}


function moveMinuteHands(containers) {
  for (var i = 0; i < containers.length; i++) {
    containers[i].style.webkitTransform = 'rotateZ(6deg)';
    containers[i].style.transform = 'rotateZ(6deg)';
  }
  
  setInterval(function() {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 12;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
      containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
    }
  }, 60000);
}

function showImages() {
    var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();
    console.log(hours, minutes, seconds);
    if(hours == 19) {
       
        document.querySelector('.image_18').classList += " show";
    }
}



$(".one").mouseover(function(){
  $(".image_one").toggleClass("plastic_show");
});

$(".one").mouseout(function(){
  $(".image_one").toggleClass("plastic_show");
});

$(".two").mouseover(function(){
    $(".image_two").toggleClass("plastic_show");
});

$(".two").mouseout(function(){
  $(".image_two").toggleClass("plastic_show");
});

$(".three").mouseover(function(){
  $(".image_two").toggleClass("plastic_show");
});

$(".three").mouseout(function(){
  $(".image_two").toggleClass("plastic_show");
});

$(".four").mouseover(function(){
 $(".image_two").toggleClass("plastic_show");
});

$(".four").mouseout(function(){
  $(".image_two").toggleClass("plastic_show");
});

$(".five").mouseover(function(){
$(".image_two").toggleClass("plastic_show");
});

$(".five").mouseout(function(){
  $(".image_two").toggleClass("plastic_show");
});

$(".six").mouseover(function(){
  $(".image_two").toggleClass("plastic_show");
});

$(".six").mouseout(function(){
  $(".image_two").toggleClass("plastic_show");
});

$(".seven").mouseover(function(){
$(".image_two").toggleClass("plastic_show");
});

$(".seven").mouseout(function(){
  $(".image_two").toggleClass("plastic_show");
});

$(".eight").mouseover(function(){
  $(".image_two").toggleClass("plastic_show");
});$(".image_two").toggleClass("plastic_show");
$(".eight").mouseout(function(){
 $(".image_two").toggleClass("plastic_show");
});

$(".nine").mouseover(function(){
  $(".image_two").toggleClass("plastic_show");
});
$(".nine").mouseout(function(){
  $(".image_two").toggleClass("plastic_show");
});

$(".ten").mouseover(function(){
  $(".image_two").toggleClass("plastic_show");
});
$(".ten").mouseout(function(){
  $(".image_two").toggleClass("plastic_show");
});

$(".eleven").mouseover(function(){
 $(".image_two").toggleClass("plastic_show");
});
$(".eleven").mouseout(function(){
$(".image_two").toggleClass("plastic_show");
});

$(".twelve").mouseover(function(){
 $(".image_two").toggleClass("plastic_show");
});
$(".twelve").mouseout(function(){
  $(".image_two").toggleClass("plastic_show");
});

