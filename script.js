// Array containing various themes
const themes = ["Crafting", "Social Club", "Photography", "Sports Club", "Health Clinic", "Book Club", "Mechanic", "Restaurant", "Space", "Photography", "Nature Reserve", "Food", "Travel"];

// Function to simulate spinning wheel and select a random theme
function spin() {
    // Get the HTML element with the id "spinner"
    const spinner = document.getElementById("spinner");
    
    // Duration for which the wheel will spin before stopping
    const spinDuration = 3000;

    // Number of frames per second for the spinning animation
    const framesPerSecond = 10;

    // Set up interval to change displayed theme at a rate determined by frames per second
    const frameInterval = setInterval(() => {
        // Generate a random index to select a random theme from the array
        const randomIndex = Math.floor(Math.random() * themes.length);
        // Get the selected theme
        const selectedTheme = themes[randomIndex];
        // Display the selected theme in the spinner element
        spinner.textContent = selectedTheme;
    }, 1000 / framesPerSecond);

    // Stop spinning after the specified spin duration
    setTimeout(() => {
        // Clear the interval to stop the spinning animation
        clearInterval(frameInterval);
        // Generate a random index for the final selected theme
        const finalRandomIndex = Math.floor(Math.random() * themes.length);
        // Get the final selected theme
        const finalSelectedTheme = themes[finalRandomIndex];
        // Display the final selected theme in the spinner element
        spinner.textContent = finalSelectedTheme;
    }, spinDuration);
}
