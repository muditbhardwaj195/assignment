$(document).ready(function(){
   AOS.init();
  
  var temp1=0;
  var temp2=0;
  var temp3=0;

  $(window).scroll(function(){
    $('#abcd1').each(function(){
      if(isScrolledIntoView($(this))){
        if(temp1%2==0)
        {
          console.log('called it');
          move1();
          move2();
          temp1=temp1+1;
        }
      }
      else if(temp1%2==1)
      {
        temp1=temp1+1;
      }
    });

    $('#abcd2').each(function(){
      if(isScrolledIntoView($(this))){
        if(temp2%2==0)
        {
          console.log('called it');
          move3();
          move4();
          temp2=temp2+1;
        }
      }
      else if(temp2%2==1)
      {
        temp2=temp2+1;
      }
    });

    $('#abcd3').each(function(){
      if(isScrolledIntoView($(this))){
        if(temp3%2==0)
        {
          console.log('called it');
          move5();
          move6();
          temp3=temp3+1;
        }
      }
      else if(temp3%2==1)
      {
        temp3=temp3+1;
      }
    });
  });
  

});
function isScrolledIntoView(elem){
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};

//for progress bar

function move1() {
  var elem = document.getElementById("progressbar1");
  var width = 1;
  var id = setInterval(frame, 30);
  function frame() {
    if (width >= 80) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
} 

function move2() {
  var elem = document.getElementById("progressbar2");
  var width = 1;
  var id = setInterval(frame, 30);
  function frame() {
    if (width >= 75) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
} 

function move3() {
  var elem = document.getElementById("progressbar3");
  var width = 1;
  var id = setInterval(frame, 30);
  function frame() {
    if (width >= 60) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
} 

function move4() {
  var elem = document.getElementById("progressbar4");
  var width = 1;
  var id = setInterval(frame, 30);
  function frame() {
    if (width >= 65) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
} 

function move5() {
  var elem = document.getElementById("progressbar5");
  var width = 1;
  var id = setInterval(frame, 30);
  function frame() {
    if (width >= 75) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
} 

function move6() {
  var elem = document.getElementById("progressbar6");
  var width = 1;
  var id = setInterval(frame, 30);
  function frame() {
    if (width >= 70) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
} 