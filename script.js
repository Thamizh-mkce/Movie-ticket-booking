document.addEventListener("DOMContentLoaded", function () {
  var movieSelect = document.getElementById("movieSelect");
  var showtimeSelect = document.getElementById("showtimeSelect");
  var bookingDetails = document.getElementById("bookingDetails");
  var bookButton = document.getElementById("bookButton");

  var showtimes = {
    movie1: ["12:00 PM", "03:00 PM", "06:00 PM"],
    movie2: ["01:00 PM", "04:00 PM", "07:00 PM"],
    movie3: ["02:00 PM", "05:00 PM", "08:00 PM"],
  };

  movieSelect.addEventListener("change", function () {
    var selectedMovie = movieSelect.value;
    showtimeSelect.innerHTML =
      '<option value="">--Select a Showtime--</option>';
    if (selectedMovie) {
      showtimes[selectedMovie].forEach(function (time) {
        var option = document.createElement("option");
        option.value = time;
        option.textContent = time;
        showtimeSelect.appendChild(option);
      });
      showtimeSelect.disabled = false;
    } else {
      showtimeSelect.disabled = true;
    }
    bookingDetails.textContent = "Please select a movie and showtime.";
    bookButton.disabled = true;
  });

  showtimeSelect.addEventListener("change", function () {
    var selectedMovie = movieSelect.value;
    var selectedShowtime = showtimeSelect.value;
    if (selectedMovie && selectedShowtime) {
      bookingDetails.textContent = `You have selected ${selectedMovie.replace(
        "movie",
        "Movie "
      )} at ${selectedShowtime}.`;
      bookButton.disabled = false;
    } else {
      bookingDetails.textContent = "Please select a movie and showtime.";
      bookButton.disabled = true;
    }
  });

  bookButton.addEventListener("click", function () {
    alert("Tickets booked successfully!");
  });
});
