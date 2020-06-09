function validateForm() {
    var x = document.forms["Formu"]["nombre"].value;
    var y = document.forms["Formu"]["cui"].value;
    if (x == "") {
      alert("No escribió nombre");
      return false;
    }
    if (y == "") {
        alert("No escribió CUI");
        return false;
      }
  }