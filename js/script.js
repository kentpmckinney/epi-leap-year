function isLeapYear(year) {

  if (isNaN(year)) return null;

  console.log("isLeapYear()")

  return false;


}

$(document).ready(function(){


  $("#form").submit(function(e){

    let year = $("#year").val();
    let span = document.createElement("span")
    span.innerText = isLeapYear(year) ? `${year} is a leap year!` : `${year} is not a leap year`;
    $("#result").append(span);
    e.preventDefault();

  });


});