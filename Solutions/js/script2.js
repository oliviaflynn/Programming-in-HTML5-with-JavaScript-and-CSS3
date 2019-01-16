function confirmation() {

    var txt;

    if (confirm("Are you human?")) {
        txt = "You are human!";
      } else {
        txt = "You are a robot!";
      }

      document.getElementById("confirmbox").innerHTML = txt;
}

