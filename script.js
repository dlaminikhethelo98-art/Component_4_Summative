//  Starter Array - Do Not Edit this, only manipulate by adding more visitors

// "export" makes the variables and functions modules. Do not remove it.
// Export does not change how variables and functions work. 

export let customers = [];

// =======================================
// QUESTION 1
// =======================================

//Fetch The DOM Elements
export const customerInput = getElementbyId ("customerInput");
export const addBtn = getElementbyId ("addButton");
export const customerList = etElementbyId("customerList");
export const counter = getElementbyId("counter");

// Complete this function

export function addCustomer()
{

    // Retrieve the customer's name

let customersName = customerInput.value;

    // Add customer to array

 customer.push(CustomerName)

    // Clear the textbox

    customerInput.value="";


    // Call displayCustomers()
 displayCustomers();
     function displayCustomers() {
customerList.innerHTML = "";

for (let customer of customers) {
customerList.innerHTML += `<li>${customer}</li>`;
}
}


}

// =======================================
// QUESTION 2
// Complete this function
// =======================================

export function displayCustomers()
{

    // Clear the list

function displayCustomers(){
customerList.innerHTML="";

    // Loop through the array

for (let customers of customer){

    }

        // Create a list item
customerList.innerHTML+='<li>${customer}</li>';


        // Display customer
counter.textContent=customer.length;


        // Add list item to UL
customerList.addCustomer



    // Update customer counter



}


// ================================
//  DO NOT EDIT LINE 78 AND LINE 81
// =================================

// Do not remove this line 
displayCustomers();

// Event Listener
addBtn.addEventListener("click", addCustomer);