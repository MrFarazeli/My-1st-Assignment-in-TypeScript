// Questions #1
let personName: string = "Imran Khan";
console.log(`'${personName}', will you become a prime minister of Pakistan ?`);
console.log();

// Questions #2
let Name: string = "m.amir";
let lowercaseName = Name.toLowerCase();
let uppercaseName = Name.toUpperCase();
let titlecaseName = toTitleCase(Name);
console.log("Lowercase:", lowercaseName);
console.log("Uppercase:", uppercaseName);
console.log("Titlecase:", titlecaseName);
console.log();

// Function to convert to Title Case
function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

// Questions #3
let quote: string = "Religion should not be used as a tool to gain power, rather it should be a means to attain spiritual enlightenment and serve humanity.";
let author: string = "Sain GM Syed";
console.log(`${author} once said, "${quote}"`);
console.log();

// Questions #4 
let famous_person: string = "Sain GM Syed";
let quote_message: string = "Religion should not be used as a tool to gain power, rather it should be a means to attain spiritual enlightenment and serve humanity.";
let message: string = `${famous_person} once said, "${quote_message}"`;
console.log(message);

// Question #5
let person_Name: string = "\t\n  Javed Miadad  \n\t";
console.log("Name with whitespace:", person_Name);
let strippedName: string = person_Name.trim();
console.log("Stripped name:", strippedName);
console.log();

// Question #6
console.log("Addition:", 5 + 3);
console.log("Subtraction:", 10 - 2);
console.log("Multiplication:", 4 * 2);
console.log("Division:", 16 / 2);
console.log();

// Question #7
console.log(4 + 4);
console.log(2 * 4);
console.log(11 - 3);
console.log(32 / 4);
console.log();

// Question #8
let favoriteNumber: number = 9;
let message_: string = `My favorite number is ${favoriteNumber}.`;
console.log(message_);
console.log();

// Question #9 

// Program by Faraz Ali
// Date: 02/19/2024

// This program asks a question to a person specified by name,
// inquiring whether they will become the prime minister of Pakistan.

// Define the name of the person
//let personName: string = "Imran Khan";

// Ask the question with the person's name included
//console.log(`'${personName}', will you become a prime minister of Pakistan ?`);

// Question #10
let names: string[] = ["Zeeshan", "Mavia", "Ali", "Shahzad", "Waqar"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
console.log();

// Question #11
let names_: string[] = ["Zeeshan", "Mavia", "Ali", "Shahzad", "Waqar"];
for (let i = 0; i < names_.length; i++) {
  console.log(`Hello, ${names[i]}! Have a great day!`);
}
console.log();

// Question #12
let teams: string[] = ["Karachi Kings", "Newzeland", "Royal Challengers Bangalore", "Kolkata Knight Riders", "england"];
for (let i = 0; i < teams.length; i++) {
  console.log(`I aspire to play for ${teams[i]} in cricket.`);
}
console.log();
// Question #13
let guestList: string[] = ["GM Syed", "Imran Khan", "M.amir"];
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.`);
}
console.log();
// Question #14
let guest_List: string[] = ["GM Syed", "Imran Khan", "M.amir"];
console.log("Original Guest List:");
for (let i = 0; i < guest_List.length; i++) {
  console.log(`${i + 1}. ${guest_List[i]}`);
}
// Assume one guest can't make it, and you need to invite someone else
let originalGuestIndex: number = 1; // Assuming Marie Curie can't make it
let newGuest: string = "Meer Murtaza"; // New guest to be invited

// Update the guest list with the new invitation
guestList[originalGuestIndex] = newGuest;

// Print the updated guest list with the new invitation
console.log("\nUpdated Guest List:");
for (let i = 0; i < guestList.length; i++) {
  console.log(`${i + 1}. ${guestList[i]}`);
}
console.log();

// Question #15
// Define the original array of guests
let guestList_: string[] = ["GM Syed", "Meer Murtaza", "M.amir"];

// Print the original guest list
console.log("Original Guest List:");
for (let i = 0; i < guestList_.length; i++) {
  console.log(`${i + 1}. ${guestList_[i]}`);
}

// Inform people that you found a bigger dinner table
console.log("\nGreat news! I found a bigger dinner table!");

// Add one new guest to the beginning of the array
guestList.unshift("Bashir Khan Qureshi");

// Add one new guest to the middle of the array
let newGuest_: string = "Shanwaz Bhutto"; // New guest to be added to the middle
let middleIndex: number = Math.floor(guestList.length / 2); // Calculate the middle index
guestList.splice(middleIndex, 0, newGuest_);

// Use append() to add one new guest to the end of your list
guestList.push("Imad Wasim");

// Print a new set of invitation messages for each person in your list
console.log("\nNew Set of Invitation Messages:");
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.`);
}
console.log();

//Question #16
// Define the original array of guests
let guestList__: string[] = ["Bashir Khan Qureshi", "GM Syed", "Shanwaz Bhutto", "Meer Murtaza Bhutto", "M.amir", "Imad Wasim"];

// Print the original guest list
console.log("Original Guest List:");
for (let i = 0; i < guestList__.length; i++) {
  console.log(`${i + 1}. ${guestList__[i]}`);
}

// Print a message saying that you can invite only two people for dinner
console.log("\nSorry, due to unforeseen circumstances, I can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guestList__.length > 2) {
  let removedGuest = guestList__.pop(); // Remove the last guest from the list
  console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

// Print a message to each of the two people still on your list
console.log(`\nDear ${guestList__[0]},\nYou're still invited to dinner.`);
console.log(`Dear ${guestList__[1]},\nYou're still invited to dinner.`);

// Remove the last two names from your list to make it empty
guestList__.pop();
guestList__.pop();

// Print your list to make sure you actually have an empty list at the end of your program
console.log("\nUpdated Guest List:");
//console.log(guestList__);
console.log();
