function calculateTip() {
    var billAmt = document.getElementById("amount").value;
    var serviceQual = document.getElementById("servQual").value;
    var numOfPeople = document.getElementById("ppl").value;
  
   
    if (billAmt === "" || serviceQual == 0) {
      alert("Please enter values");
      return;
    }
    
    if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
  
   
    var total = (billAmt * serviceQual) / numOfPeople;

    total = Math.round(total * 100) / 100;
    
    total = total.toFixed(2);
   
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip")= total;
  
  }
  
  
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  
  
  document.getElementById("cald").onclick = function() {
    calculateTip();
  
  };