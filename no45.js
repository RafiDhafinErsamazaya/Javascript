// Function to return an array with unique elements using the Set data structure
const unique_Elements = arr => [...new Set(arr)]

// Output the result of applying unique_Elements to an array with duplicate elements
console.log(unique_Elements([1, 2, 2, 3, 4, 4, 5]));

// Output the result of applying unique_Elements to an array without duplicate elements
console.log(unique_Elements([1, 2, 3, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6]));

// Output the result of applying unique_Elements to an array with negative and duplicate elements
console.log(unique_Elements([1, -2, -2, 3, 4, -5, -6, -5]));

