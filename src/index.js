// Function that initializes everything once the page loads
const init = () => {
  //Select the form element on the page 
  const inputForm = document.querySelector(`form`);

  //Add an event listener to handle form submission
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault(); //Prevent the form from refreshing the page
   
    // Get the value entered in the input field with ID #searchByID
    const input = document.querySelector('input#searchByID');
   
    // Send a GET request to fetch movie data using the entered ID
    fetch(`http://localhost:3000/movies/${input.value}`)
      .then(response => response.json()) // Parse the JSON response
      .then(data => {
        // Select the elements where movie details will be displayed
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        // Update the DOM with the movie's title and summary
        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
};

// Run the init function after the HTML content is fully loaded
document.addEventListener('DOMContentLoaded', init);
  
