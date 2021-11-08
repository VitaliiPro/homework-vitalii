const baseUrl = "https://swapi.dev/api/";
const button = document.getElementById("information");
const persons = document.getElementById("persons");
const planets = document.getElementById("planets");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const input = document.getElementById("input");
const pageNumber = document.getElementById("page-number");
let currentPage = 1;

const getPersons = () =>{
    if (input.value === '1' || input.value === '2' || input.value === '3' || input.value === '4' || input.value === '5' || input.value === '6') {
        persons.innerHTML = 'loading...';
    } else {
        persons.innerHTML = 'Please, enter film from 1 to 6';
        return;
    }
    persons.innerHTML = 'loading...';
    axios
        .get(`${baseUrl}/films/2`)
        .then((response) => {
            response.data.characters.map((item) => {
                getInfo(item);
            });
            persons.innerHTML = "";
        })
        .catch((error) => {
            console.log("Error: ", error);
        })
}

button.onclick = getPersons;

const getInfo = (link) => {
    axios
        .get(link)
        .then((response) => {
            const name = response.data.name;
            const birthYear = response.data.birth_year;
            let gender = response.data.gender;
            if (gender === 'male') {
                gender = `<img src="./img/male.png" width="25px" alt="male">`;
            } else if (gender === 'female') {
                gender = `<img src="./img/female.png" width="25px" alt="female">`;
            } else {
                gender = `<img src="./img/hermaphrodite.png" width="25px" alt="hermaphrodite">`;
            }
            const info = `
            <div class="information-person">
            <h1>${name}</h1>
            <p>Birth Year: ${birthYear}</p>
            <p>Gender: ${gender}</p>
            </div>
        `;

        persons.innerHTML += info;
        })
        .catch((error) => {
            console.log("Error: ", error);
        })
}

const getPlanets = () => {
    planets.innerHTML = "Loading...";
    pageNumber.innerHTML = currentPage;
    axios
        .get(`${baseUrl}/planets/?page=${currentPage}`)
        .then((response) => {
            const listElems = response.data.results.map((item) => `
                <li>${item.name}</li>
            `)
            planets.innerHTML = listElems.join('');
        })
        .catch((err) => {
            console.log("Error:", err);
        });
}

getPlanets();

prevButton.addEventListener('click', () => {
    if (currentPage === 1) return;
    currentPage -= 1;
    getPlanets();
});
nextButton.addEventListener('click', () => {
    if (currentPage === 6) return;
    currentPage += 1;
    getPlanets();
});