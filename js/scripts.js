//Business Logic



// var factorial = function(number) {
//   number * all numbers < number && > 0
// };
//  = number - 1 * number > 0
//Front End Logic



$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var total = 1
    var factor = parseInt($("input#number").val());
    for (var i = factor; i >= 1; i --) {
        total *= i;
      }
      $(".result").text(total);
  });

});
