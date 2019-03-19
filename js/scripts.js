// function MovieBook() {
//   this.movieTicket = []
// }
// MovieBook.prototype.addTicket = function (UserInput) {
//   this.movieTicket.push(UserInput);
// }

function Ticket(movie, time, adult, child, senior) {
  this.movie = movie;
  this.time = time;
  this.adult = adult;
  this.child = child;
  this.senior = senior;
}
Ticket.prototype.TicketPrice = function (adult, child, senior) {
  // if (this.ShowInput = "matinee") {
  //   var cost = this.adult * 8 + this.child * 3 + this.senior * 6;
  // } else if (this.ShowInput = "first-release") {
  //   var cost = this.adult * 12 + this.child * 7 + this.senior * 10;
  // } else {
  //   var cost = this.adult * 10 + this.child * 5 + this.senior * 8;
  // }
  var cost = this.adult + this.child + this.senior;
  return cost;
}

$(document).ready(function() {
  $('form').submit(function(event) {
  event.preventDefault();

  var MovieInput = $("#Movies").val();
  var ShowInput = $("input:radio[name=time]:checked").val();
  var AdultInput = Number($("input#adult-tickets").val());
  var ChildInput = Number($("input#child-tickets").val());
  var SeniorInput = Number($("input#senior-tickets").val());
  // var movieBook = [];
  var UserInput = new Ticket(MovieInput, ShowInput, AdultInput, ChildInput, SeniorInput);
  var cost = UserInput.TicketPrice(AdultInput, ChildInput, SeniorInput);
  alert(UserInput.TicketPrice(AdultInput, ChildInput, SeniorInput));
  // movieBook.push(UserInput);
  // var book = new MovieBook(UserInput);
  // book.addTicket(UserInput);
  // alert("Cost:"+UserInput.TicketPrice());
  // alert(nameInput);
  // $('.name').text(nameInput);
  // $('.sex').text(sexInput);
  // $('.radio').text(orientationInput);
  // $('#story').show();
  // });
  });
});
