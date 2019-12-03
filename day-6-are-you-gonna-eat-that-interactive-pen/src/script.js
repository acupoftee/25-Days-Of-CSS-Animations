var directions = ["look-right", "look-left"];
// from orignal implementation
// var directions = ["look-right", "look-left", "look-down", "look-up", "look-bottom-right", "look-bottom-left", "look-top-right", "look-top-left"];
function removeClasses() {
  for (var x = 0; x < directions.length; x++) {
    $(".head").removeClass(directions[x]);
    $(".hair").removeClass(directions[x]);
    $(".face").removeClass(directions[x]);
    $(".neck").removeClass(directions[x]);
  }
}
function direction(e) {
  //look left
  if (e.clientX <= (window.innerWidth / 2)) {
    removeClasses();
    $(".head").addClass("look-left");
    $(".hair").addClass("look-left");
    $(".face").addClass("look-left");
    $(".neck").addClass("look-left");
  }

  //look right
  if (e.clientX >= window.innerWidth - (window.innerWidth / 2)) {
    removeClasses();
    $(".head").addClass("look-right");
    $(".hair").addClass("look-right");
    $(".face").addClass("look-right");
    $(".neck").addClass("look-right");
  }
  
  //TODO: resolve afro lag
  // look down
  // if (e.clientY >= window.innerHeight - (window.innerHeight / 2.5)) {
  //   removeClasses();
  //   // $(".head").addClass("look-down");
  //   // $(".hair").addClass("look-down");
  //   $(".face").addClass("look-down");
  //  //$(".neck").addClass("look-down");
  // }
  
//    //look up
//   if (e.clientY <= (window.innerHeight / 2.5)) {
//     removeClasses();
//     // $(".head").addClass("look-up");
//     // $(".hair").addClass("look-up");
//     $(".face").addClass("look-up");
//     //$(".neck").addClass("look-up");
//   }
//   //look bottom right
//   if(e.clientY >= (window.innerHeight - (window.innerHeight/2.5)) && e.clientX >= (window.innerWidth-(window.innerWidth/3))) {
//     removeClasses();
//     //$(".head").addClass("look-bottom-right");
//     $(".face").addClass("look-bottom-right");
//     // $(".neck").addClass("look-bottom-right");
//     // $(".hair").addClass("look-bottom-right");
//   }
  
//   // look bottom left
//    if(e.clientY >= (window.innerHeight - (window.innerHeight/2.5)) && e.clientX <= (window.innerWidth/3)) {
//     removeClasses();
//     //$(".head").addClass("look-bottom-left");
//     $(".face").addClass("look-bottom-left");
//     //$(".neck").addClass("look-bottom-left");
//     //$(".hair").addClass("look-bottom-left");
//   }
  
//    // look top right
//     if(e.clientY <= (window.innerHeight/2.5) && e.clientX >= (window.innerWidth - (window.innerWidth/3))) {
//     removeClasses();
//     //$(".head").addClass("look-top-right");
//     $(".face").addClass("look-top-right");
//     //$(".neck").addClass("look-top-right");
//     //$(".hair").addClass("look-top-right");
//   }
//   if( e.clientY <= ((window.innerHeight/2.5)) &&  e.clientX <= window.innerWidth/3) {
//     //$(".head").addClass("look-top-left");
//     $(".face").addClass("look-top-left");
//     //$(".neck").addClass("look-top-left");
//     //$(".hair").addClass("look-top-left");
//   }
  
  // if (
  //   e.clientX > (window.innerWidth / 3) &&
  //   e.clientX < (window.innerWidth - (window.innerWidth / 3)) &&
  //   e.clientY > (window.innerHeight / 2.5) &&
  //   e.clientY < (window.innerHeight - (window.innerHeight / 2.5))
  // ) {
  //   removeClasses();
  //   //console.log("center");
  // }
}
document.addEventListener("mousemove", function(e) {
  direction(e);
});
