//Lab 7
//1. Create several grocery item objects with properties of name and price.
//2. Store the grocery item objects in an array.
//3. Loop through the array and print out the name
//and price on a new line.
//4. Total up the amount with a label ‘total’.



var groceryList = [

{
	name: "Milk",
	price: 2

},

{
	name: "Cheese",
	price: 5

},

{
	name: "Cat",
	price: 300

}

];

//for loop
var total = 0;

for (var i = 0; i < groceryList.length; i++) {
  
  total+= groceryList[i].price;
  
  console.log(groceryList[i].name + " $" + groceryList[i].price);

  var printedList = document.createElement('div')

	printedList.innerHTML = groceryList[i].name + " $" + groceryList[i].price;
	document.body.appendChild(printedList);
	


	  
 }

//Total
var printedTotal = document.createElement('div')

	printedTotal.innerHTML = "Total $" + total;
	printedTotal.innerHTML = "Total $" + total;
	document.body.appendChild(printedTotal);


function addToList() {
 var newItemName = document.getElementByID("name").value; 


 var newItemPrice= document.getElementByID("price").value; 

 var object = {
 	name: newItemName,
 	price: newItemPrice
 };


}
	


//console.log("total $" + total);


// Add






