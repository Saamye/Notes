//declare the element reference
const fetchBtn = document.getElementById("fetchBtn");
const fetchMultipleBtn = document.getElementById("fetchMultipleBtn");
const searchInput = document.getElementById("searchInput");
const themeToggle = document.getElementById("themeToggle");
const userContainer = document.getElementById("userContainer");
const loader = document.getElementById("loader");


// additional features

const ex1Btn = document.getElementById("ex1Btn");
const ex2Btn = document.getElementById("ex2Btn");
const ex3Btn = document.getElementById("ex3Btn");
const exerciseResult = document.getElementById("exerciseResult");

// add the eventlisteners for the new functionality

ex1Btn.addEventListener("click", exercise1);
ex2Btn.addEventListener("click", exercise2);
ex3Btn.addEventListener("click", exercise3);


// initialize an array to store the fetched users
let users = []

//attach the Eventlisteners
fetchBtn.addEventListener("click", fetchUsers(1));
fetchMultipleBtn.addEventListener("click", fetchUsers(5));
searchInput.addEventListener("input", filterUsers);
themeToggle.addEventListener("change", toggleTheme);

const fetchUsers = (count) => {
    users = [];
    userContainer.innerHTML = "";
    loader.style.display = "block";
    axios
        .get(`https://randomuser.me/api/results=${count}`)
        .then((response) => {
            loader.style.display = "none";
            users = response.data.results;
            renderUsers(users);
        });
        .catch((error) => {
            loader.style.display = "none";
            userContainer.innerHTML = "<p> Error fetching data </p>";
            console.error(error);
        });

}

const filterUsers = () => {
    let term = searchInput.value.toLowerCase();
    let filtered = users.filter((u) => {

    })
};

const toggleTheme = () => {

};

const renderUsers = (list) => {
    userContainer.innerHTML = "";
    list.forEach((user) => {
        let card = document.createElement("div");
        card.className = "user-card";
        card.innerHTML = `
        <img src="${user.picture.medium}" alt="user-picture" />
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>${user.location.city} ${user.location.country}</p>
        <p>${user.dob.age}</p>
        <p>${user.email}</p>
        <p>${user.phone}</p>

        `;
        userContainer.appendChild(card);


    });
};

//Task 8

function exercise1() {
    userContainer.innerHTML = "";
    exerciseResult.textContent = "";
    loader.style.display = "block";

    axios
        .get("https://randomuser.me/api/?results=5&nat=US")
        .then((response) => {
            loader.style.display = "none";
            users = response.data.result;
            renderUsers(users);
        })
        .catch((error) => {
            loader.style.display = "none";
            userContainer.innerHTML = "<p> Error Loading Users </p>";
            console.log("Exercise 1 Error", error);
        })
};
