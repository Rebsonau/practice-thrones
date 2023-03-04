// All of the below is using an array within a variable. Within this array I start with 4 objects

const character = [
    {firstName: "Ned", house: "Stark", houseWords: "Winter is coming", houseSigil: "Direwolf"},
    {firstName: "Robert", house: "Baratheon", houseWords: "Ours is the fury", houseSigil: "Stag"},
    {firstName: "Tywin", house: "Lannister", houseWords: "Hear me roar", houseSigil: "Lion"},
    {firstName: "Daenerys", house: "Targaryen", houseWords:"Fire and blood", houseSigil: "Three-headed Dragon"}
];

// checking how the console log displays - changed to hide in output
// console.log(character)

// Checking how the console log displays when the array is selected - changed to hide in output
// console.log(character[0])

// Checking how the console log displays keys within the object
console.log("House:", character[0].house);
console.log("House Words:", character[0].houseWords);

// Checking how the console log displays a sentence
console.log("The leader of house", character[0].house, "is", character[0].firstName, ". The house sigil is a", character[0].houseSigil, "and the house words are", character[0].houseWords, ".");
console.log("The leader of house", character[1].house, "is", character[1].firstName, ". The house sigil is a", character[1].houseSigil, "and the house words are", character[1].houseWords, ".");
console.log("The leader of house", character[2].house, "is", character[2].firstName, ". The house sigil is a", character[2].houseSigil, "and the house words are", character[2].houseWords, ".");
console.log("The leader of house", character[3].house, "is", character[3].firstName, ". The house sigil is a", character[3].houseSigil, "and the house words are", character[3].houseWords, ".");

// Correcting character name
const correctedName = character[0].firstName = "Eddard";
console.log("Corrected Name:", correctedName);

// Checking sentence has the updated name
console.log("The leader of house", character[0].house, "is", character[0].firstName, ". The house sigil is a", character[0].houseSigil, "and the house words are", character[0].houseWords, ".");

// Adding a key to each object within the array
character[0].houseSeat = "Winterfell";
character[1].houseSeat = "Stormsend";
character[2].houseSeat = "Lannisport";
character[3].houseSeat = "Dragonstone";

console.log(character[3]);

// Is it possible to add a key/value to every object within an array at once?
// Is it also possible that the value is different for each object?

// Adding another house to the end of the array
character.push({firstName: "Mace", house: "Tyrell", houseWords: "Growing strong", houseSigil: "Golden rose", houseSeat: "Highgarden"});

console.log(character[4]);

// Adding another house to the start of the array

character.unshift({firstName: "Balon", house: "Greyjoy", houseWords: "We do not sow", houseSigil: "Golden kraken", houseSeat: "Pyke"});
console.log(character[0]);

// Checking the first sentence of the array [0] now that we have a new object in this position

console.log("The leader of house", character[0].house, "is", character[0].firstName, ". The house sigil is a", character[0].houseSigil, "and the house words are", character[0].houseWords, ".");

// Add a new empty character into the third position of the array
character.splice(2, 0, {firstName: "", house: "", houseWords: "", houseSigil: "", houseSeat: ""});
console.log(character[2]);

// Add values to each key within the empty character at position [2]
character[2].firstName = "Doran";
character[2].house = "Martell";
character[2].houseWords = "Unbowed, unbent, unbroken";
character[2].houseSigil = "Gold spear piercing a red sun";
character[2].houseSeat = "Sunspear";

console.log(character[2]);
console.log("The leader of house", character[2].house, "is", character[2].firstName, ". The house sigil is a", character[2].houseSigil, "and the house words are", character[2].houseWords, ".");

// Checking if another method for adding values to an empty object is possible - method is good and cleaner
character.splice(4, 0, {firstName: "", house: "", houseWords: "", houseSigil: "", houseSeat: ""});
console.log(character[4]);
character[4] = {firstName: "Maege", house: "Mormont", houseWords: "Here we stand", houseSigil: "Black bear", houseSeat: "Bear island"};
console.log(character[4]);

// Checking if a slice works in a console log - changed to hide in output for next check
console.log(character.slice(2, 5));

// Creating a variable with a slice to then output to console log
const charSlice = character.slice(1, 4);
console.log(charSlice);

// Console log for everything to check it is all as it should be
console.log("Every character:", character)

// Adding quotations to the house motto in the sentence using a backslash \ before the " as the string itself is using the same quotation marks
console.log("The leader of house", character[2].house, "is", character[2].firstName, ". The house sigil is a", character[2].houseSigil, "and the house words are \"", character[2].houseWords, "\".");

// Checking capitalisation of every letter to a value within an object (within the array)
const seatCap = character[6].houseSeat.toUpperCase();
console.log("House seat:", seatCap);

// Checking number of letters in key/value within an object
const firstNameLength = character[1].firstName.length;
console.log("First name length:", firstNameLength);

// Output all of the values within an object (Capitalisation of 'Object' is critical)
// Step one: separate one specific character to get the values for and create a variable for them
const stepOne = character[4];
// Step two: created a variable to give me each value
const stepTwo = Object.values(stepOne);
// Step three: console log the above variable to output all of the info I am looking for
console.log(stepTwo);

// Can I replicate the above using less steps? YES
console.log(Object.values(character[0]));

// Lets do the same as above but instead of the values I will display the keys (therefore it doesn't matter which position I pick within the array as they are all the same)
console.log(Object.keys(character[0]));

// Can I find a way to tell me how many values are within an object?
// console.log(Object.keys(character[7].length)); Doesn't work
console.log(Object.keys(character[3]).length);
// ^^ The .length must be outside of the brackets in which we select the location within the array