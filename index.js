const calendar = new VanillaCalendar({
    selector: "#myCalendar",
    onSelect: (data, elem) => {
        selectedDate = new Date(data.date).toISOString().split('T')[0];
        // alert(`Vous avez selectionnéle ${selectedDate}`)
        displayMovie(selectedDate)
    },
     months: [
        "Janvier",
        "Fevrier",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Aout",
        "Septembre",
        "Octobre",
        "Novembre",
        "Decembre",
    ],
    shortWeekday: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],

});
let selectedDate = {};
const movieForm = document.querySelector('#movie-form');
movieForm.addEventListener('submit', addMovie);

function addMovie(e) {
    e.preventDefault();
    const formData = new FormData(movieForm);
    const title = formData.get('title');
    const year = formData.get('year');
    const duration = formData.get('duration');
    const genre = formData.getAll('genre');
    console.log('movie',{title,year,duration,genre,selectedDate});
}
function displayMovie(date) {
    let movies = JSON.parse(localStorage.getItem('movie')) || [];
    let movie = movies.find(m => {
        return m.selectedDate === date;
    });
    console.log("movie",movie);
}