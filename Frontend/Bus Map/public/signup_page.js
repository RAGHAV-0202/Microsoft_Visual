var checkbox = document.querySelector('input[type="checkbox"]');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.style.setProperty('--color-bg', '#181a1e');
        document.documentElement.style.setProperty('--text-clr', 'white');
        document.documentElement.style.setProperty('--text-white', 'black');
        document.documentElement.style.setProperty('--border-clr', 'white');
        document.documentElement.style.setProperty('--btn-clr', '#55c2da');

    } else {
        document.documentElement.style.setProperty('--color-bg', '#edeffd');
        document.documentElement.style.setProperty('--text-clr', 'black');
        document.documentElement.style.setProperty('--text-white', 'white');
        document.documentElement.style.setProperty('--border-clr', 'rgb(156, 134, 134)');
        document.documentElement.style.setProperty('--btn-clr', 'rgb(10, 65, 136)');
    }
});


const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

function sign() {
    const username = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;

    const isTaken = users.some(u => u.username === username);

    if (isTaken) {
        document.querySelector('.login_info').innerHTML ="Username already taken. Choose a different one.";
            document.querySelector('.login_info').style.color = "#ff0e0e";
    } else {
        users.push({ username, password });
        document.querySelector('.login_info').innerHTML ="Sign-up successful";
        document.querySelector('.login_info').style.color = "#198754";
        // Redirect or perform actions after successful sign-up
    }
};