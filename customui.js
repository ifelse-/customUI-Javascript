function CustomUI(element, amount, customstyle) {
    this.element = element;
    this.amount = amount;
    this.customstyle = customstyle;

    console.log(this.element);
    console.log(this.amount);
    console.log(this.customstyle);


 var newDiv = document.getElementById(this.element);
 //alert("The content is " + theDiv.innerHTML);

 //console.log("this.element" + theDiv);

 //theDiv.className = theDiv.className + " otherclass";
 //console.log(theDiv.childNodes)
 //theDiv.classList.add("otherclass");
 //theDiv.nextElementSibling.style.display = 'none';
 //theDiv.parentNode.style.visibility = 'hidden'

//theDiv.lastElementChild.style.display = 'none';
var t = document.createElement("div");
newDiv.insertBefore(t, newDiv.firstChild);
//t.classList.add("checkboxbtn");

t.className = t.className + "checkboxbtn";

//Check for custom style
if(this.customstyle != "yes") {
  //Build object Style
 document.getElementById(this.element).firstChild.style.backgroundColor="white"; 
 document.getElementById(this.element).firstChild.style.border="1px solid #000";
 document.getElementById(this.element).firstChild.style.width="40px"; 
 document.getElementById(this.element).firstChild.style.height="40px"; 
 }

//Create element click 
t.onclick = function() { // Note this is a function
  // this.classList.toggle("active-checkbox");
 
  if ( t.className.match(/(?:^|\s)active-checkbox(?!\S)/) ) {
    t.className = t.className.replace( /(?:^|\s)active-checkbox(?!\S)/g , '' )
    t.nextElementSibling.checked = false;
    if(customstyle != "yes")
      document.getElementById(newDiv.id).firstChild.style.backgroundColor="white"; 

  } else {
    t.className += " active-checkbox";
    t.nextElementSibling.checked = true;
    if(customstyle != "yes")
      document.getElementById(newDiv.id).firstChild.style.backgroundColor="red"; 
  }
 
 };

}
CustomUI("checkboxele", 0, "no");