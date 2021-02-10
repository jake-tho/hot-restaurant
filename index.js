$("#submit").on("click", function(event) {
    event.preventDefault();
    var newReservation = {
        name: $("#name").val().trim(),
        phone: $("#phone").val().trim(),
        email: $("#email").val().trim(),
        uniqueid: $("#uniqueid").val().trim()
    };


$.post("/sendres", newReservation)
     .then(function(data) {
    console.log("make.html", data);
    alert("Adding reservations...");
    });
});
