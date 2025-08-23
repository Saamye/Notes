async function getUser() {
    try {
        const responce = await axios.get("https://randomuser.me/api/");

        const user = responce.data.results[0];

        document.getElementById("user").innerHTML = `
            <h2>${user.name.first} ${user.name.last}</h2>
            <img src="${user.picture.medium}" alt="user picture">
        `;
    } catch(error) {
        console.error("Error: ", error)
    };
}

const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
script.onload = getUser;
document.head.appendChild(script)