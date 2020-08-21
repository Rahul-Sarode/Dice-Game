
// 1st Dice
var randomNumber1;

randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;

var imagesSource1="images/dice"+randomNumber1+".png";

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", imagesSource1);


// 2nd Dice

var randomNumber2;

randomNumber2=Math.random();
randomNumbe2=Math.floor(randomNumber2*6)+1;

imagesSource2="images/dice"+randomNumbe2+".png";

var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", imagesSource2);

// Heading Change

if(imagesSource1>imagesSource2){
  document.querySelector("h1").innerHTML="Player 1 Win ";
}

else if(imagesSource1<imagesSource2){
  document.querySelector("h1").innerHTML="Player 2 Win!"
}

else{

    document.querySelector("h1").innerHTML="Draw"
}

// Button Click

document.querySelector("button").addEventListener("click", refreshPage);

function refreshPage(){
    window.location.reload();
  }
