var divs = document.getElementById("crypto-div");

var prescipsList = document.getElementById("presscritions-list");


function searchPrescriptions() {
  //alert('this is window')
    var input = document.getElementById("search");
   // console.log(input.value)


  var characters = input.value;

 lengthChar = characters.toString().length

  //console.log(lengthChar)





  if (lengthChar > 0) {
    console.log("styping started")
    prescipsList.style.display = "block" 

  } else {
    prescipsList.style.display = "none" 

  }



   var divs = document.getElementsByClassName("prescriptions");
  //console.log("this is div : " + number)
   //  divs.style.display = "none";
    filter = input.value.toUpperCase();
    for (i = 0; i < divs.length; i++) {
      h2 = divs[i].getElementsByTagName("p")[0];
   //   console.log("line 14: " + h2)
      txtValue = h2.innerText;
    //  console.log(txtValue)
  
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        divs[i].style.display = "";
      } else {
        divs[i].style.display = "none";
      }
    }
  }