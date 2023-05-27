function openLinkedInProfile() {
    window.open("https://www.linkedin.com/in/sidi-mohamed-ebnou-424711269/", "_blank", "width=800,height=600");
}

function calculateGainOrLoss() {
    var costPrice = parseFloat(document.getElementById("costPrice").value);
    var sellingPrice = parseFloat(document.getElementById("sellingPrice").value);

    var result = document.getElementById("result");

    if (isNaN(costPrice) || isNaN(sellingPrice)) {
      result.textContent = "Please enter valid values.";
    } else {
      var percentage = ((sellingPrice - costPrice) / costPrice) * 100;
      result.textContent = "Percentage Gain/Loss: " + percentage.toFixed(2) + "%";
    }
}