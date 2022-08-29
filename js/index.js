const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}
const displayUsers = (users) => {
    const usersContainer = document.getElementById('container');
    for (const user of users) {
        console.log(user)
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>User Name : ${user.name.first} </h3>
            <p> Email : ${user.email} </p>
            <p> Number : ${user.cell} </p>
        
        `
        usersContainer.appendChild(div)
    }
}
loadUsers();