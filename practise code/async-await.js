async function getUser() {
    try {
        const responce = await fetch("https://randomuser.me/api/");

        const data = await responce.json();

        const user = data.results[0];

        document.getElementById("user").innerHTML = `
            <h2>${user.name.first} ${user.name.last}</h2>
            <img src="${user.picture.medium}" alt="user picture">
        `;
    } catch(error) {
        console.error("error:" , error)
    }
}