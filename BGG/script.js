var css = document.querySelector("h3"); // getting the h3 element
var color1 = document.querySelector(".color1"); // getting the color input with the class of color1
var color2 = document.querySelector(".color2"); // getting the color input with the class of color2
var body = document.getElementById("gradient"); // getting the body element which was given the id 'gradient'
var hxbtn = document.getElementById("hexbtn"); //getting the hexbtn element
var clr1;
var clr2;
function setGradient() {  //sets the gradient 
	body.style.background =   // pulls the body element's background from style/css
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value 
	+ ")";//putting in these strings and the values of the input into the body's background in css/style... changes the background's gradient
  	hexclr();
	//css.textContent = body.style.background + ";"; //putting the value of the body's style's background into the h3 element
}

color1.addEventListener("input", setGradient); //adding eventlistener so if you change the input the set gradient function will be called

color2.addEventListener("input", setGradient); //adding eventlistener so if you change the input the set gradient function will be called

randombtn.addEventListener("click", rndmGrdnt); // adding eventlistener so if you click the button the rndmGrdnt function will be called... randomly setting the background gradient

hexbtn.addEventListener("click", whch);
/*Below you will find the 3 files for the Background Generator. A few things you can try:

1. Write code so that the colour inputs match the background generated on the first page load. 
2. Display the initial CSS linear gradient property on page load.*/
/*color1.value="#0000ff"; // starts with the value of blue
color2.value="#ff0000"; // starts with the value of red
setGradient(); //sets the gradient to those colors
*/
//3. BONUS: Add a random button which generates two random numbers for the colour inputs.
function rndmGrdnt (){ //funst randomly sets the background gradient
	var rndmclr = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]; // an array of numbers & letters that make up hex colors
	var clr="#"; //var that will hold the color in it
	var x=0; // var to keep track of which color we are changing
	for (var i = 5; i >= 0; i--) {//loop to get the numbers and letters to make the hex color
		var rndm =  Math.floor(Math.random () * 16);// variable randomly assigned a number between 0 & 15
    	clr += rndmclr[rndm]; // adding the section (of the rndm value) of the array to the clr variable
    	if (i===0 && x===0){ // checking if the hex color is complete(has 6 letters & numbers) and which color we are on
    		color1.value=clr; // assigning the value of clr to color1.value
    		clr1=clr;
    		//console.log(clr); 
    		x=1; //moving to the next color
    		i=6; // resetting i but putting at 6 as it will subtract one right after this, ensuring it will runs the correct number of times for color2
    		clr="#"; //resetting the clr variable
    	} else if (i===0 && x===1) { //checking if the clr variable has all 6 numbers&letter and if we are on the second color
    		color2.value=clr; // assigning the value of clr to color2.value
    		clr2=clr;
    		//console.log(clr); 		
    	}
	}
	setGradient(); //setting the background gradient to the new colors
}

rndmGrdnt();//randomly setting the background color when the page loads... er reads through the javascript as it loads
 var whchbtn=0;
 function whch(){
 	
 	if (whchbtn===0){
		 whchbtn=1;
	} else{
	 	  whchbtn=0;
	 }
	hexclr();
 }
function hexclr(){
     if (whchbtn===0){
		 css.textContent = "linear-gradient(to right, " + clr1+ ", " + clr2+ "); //in hex color"; //showing body.style.background content but with hex values
		 hxbtn.textContent="Show RBG Color Values";
	} else{
	 	 css.textContent = body.style.background + "; //in RGB color"; //putting the value of the body's style's background back into the h3 element with rgb color values
	 	  hxbtn.textContent="Show HEX Color Values";
	 } 
}