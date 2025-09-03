// =================================================================
// Part 1: Mastering JavaScript Basics (Variables, Conditionals)
// =================================================================

// Get a reference to the DOM elements
const ageInput = document.getElementById('age-input');
const checkAgeBtn = document.getElementById('check-age-btn');
const resultMessage = document.getElementById('result-message');

// Add a click event listener to the button (Part 4)
checkAgeBtn.addEventListener('click', () => {
    // Variable declaration and conversion
    let age = parseInt(ageInput.value);

    // Conditional logic (if/else)
    if (age >= 18) {
        resultMessage.textContent = "You are eligible to vote!";
        resultMessage.style.color = 'green';
    } else if (age > 0) {
        resultMessage.textContent = "You are not yet eligible to vote.";
        resultMessage.style.color = 'red';
    } else {
        resultMessage.textContent = "Please enter a valid age.";
        resultMessage.style.color = 'orange';
    }
});


// =================================================================
// Part 2: JavaScript Functions (Reusable Logic)
// =================================================================

/**
 * Function to calculate the sum of an array of numbers.
 * @param {Array<number>} items An array of numbers.
 * @returns {number} The total sum.
 */
function calculateTotal(items) {
    let total = 0;
    // We can use a forEach loop here (Part 3)
    items.forEach(item => {
        total += item;
    });
    return total;
}

/**
 * Function to toggle the visibility of an HTML element.
 * @param {HTMLElement} element The DOM element to toggle.
 */
function toggleContent(element) {
    // Check if the element has the 'toggle-hidden' class
    element.classList.toggle('toggle-hidden');
}


// =================================================================
// Part 3: JavaScript Loops (Repetition)
// =================================================================

// Example 1: Loop for dynamic content generation
const chores = ["Take out the trash", "Wash the dishes", "Walk the dog", "Mow the lawn"];
const choreList = document.getElementById('chore-list');

// Use a for...of loop to iterate through the chores array
for (const chore of chores) {
    const listItem = document.createElement('li'); // Create a new list item
    listItem.textContent = chore; // Set its text content
    choreList.appendChild(listItem); // Append it to the UL element
}

// Example 2: Loop for calculation (inside a function)
const prices = [15.99, 4.50, 20.00, 7.25, 12.00];
const totalCostSpan = document.getElementById('total-cost');

// Call the function from Part 2 and display the result
const total = calculateTotal(prices);
totalCostSpan.textContent = `$${total.toFixed(2)}`;


// =================================================================
// Part 4: Mastering the DOM with JavaScript (Interactivity)
// =================================================================

// 1. Change text content of an element
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Welcome to My Interactive JavaScript Project!';

// 2. Event Listener (Age Checker) is already in Part 1

// 3. Toggle a CSS class
const toggleContentBtn = document.getElementById('toggle-content-btn');
const toggleBox = document.getElementById('toggle-box');

toggleContentBtn.addEventListener('click', () => {
    // Call the toggle function from Part 2
    toggleContent(toggleBox);
});
