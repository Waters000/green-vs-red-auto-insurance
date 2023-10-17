// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var prescriptionsEl = document.getElementsByClassName("prescriptions");
var pricingImage = document.getElementById("pricingImage");
var indivPricing = document.getElementById("indivPricing");
var specialWordEl = document.getElementById("specialWord");
var specialWordTwoEl = document.getElementById("specialWordTwo");



var specialWord = ["Florida ", "Louisiana ", "Deleware ", "Michigan ", "California ", "Kentucky ","Missouri ", "Nevada ", "New York ", "Nebraska ", "Colorado ", "New Jersey "]
var specialWordTwo = ["Alabama ", "Ohio ", "Maine ", "Idaho ", "Vermont ", "Oregon ","Indiana ", "Hawaii ", "New Hampshire ", "Iowa ", "Virginia ", "Alaska "]
var index = -1;
var indexTwo = -1;


n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

function spcecialWord() {

  var arrayLength = (specialWord.length - 1)

  if (index < arrayLength) { 
    index++;
     
  } else {
    index = 0
  }
  
  var word = specialWord[index]
  
 

  specialWordEl.textContent = word




//console.log(word)

}


function spcecialWordTwo() {

  var arrayLength = (specialWordTwo.length - 1)

  if (indexTwo < arrayLength) { 
    indexTwo++;
     
  } else {
    indexTwo = 0
  }
  
  var wordTwo = specialWordTwo[indexTwo]
 

  specialWordTwoEl.textContent = wordTwo




//console.log(word)

}




// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it


// shows modal when starting to search
function searchFake() {
    modal.style.display = "block";
    return
  }

// shows business pricing plan
function businessBtn() {
    pricingImage.style.display = "block"
    indivPricing.style.display = "none"
   
    }

    // shows individual pricing plan
  function individualBtn() {
        pricingImage.style.display = "none"
        indivPricing.style.display = "block"
        }



      spcecialWord()
        setInterval(spcecialWord, 1000);


        spcecialWordTwo()
        setInterval(spcecialWordTwo, 1000);