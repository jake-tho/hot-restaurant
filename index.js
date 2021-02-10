$("#add-btn").on("click", function(event) {
    event.preventDefault();
    var newReservation = {
        name: $("#name").val().trim(),
        phone: $("#phone").val().trim(),
        email: $("#email").val().trim(),
        uniqueid: $("#uniqueid").val().trim()
    };

      // Question: What does this code do??
$.post("/sendres", newReservation)
     .then(function(data) {
    console.log("make.html", data);
    alert("Adding reservations...");
    });
});
