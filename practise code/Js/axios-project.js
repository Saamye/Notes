//declare the element reference
const fetchBtn = document.getElementById("fetchBtn");
const fetchMultipleBtn = document.getElementById("fetchMultipleBtn");
const searchInput = document.getElementById("searchInput");
const themeToggle = document.getElementById("themeToggle");
const userContainer = document.getElementById("userContainer");
const loader = document.getElementById("loader");

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
            users = response.data.results;
        });

}