function promptbox() {
    var person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
      document.getElementById("promptresult").innerHTML =
      "Hello " + person + "! How are you today?";
    }
  }