const API_URL = "http://localhost:5000/api";

// Register User
function register(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
    }).then(res => res.json()).then(data => {
        alert("Registration Successful! Please log in.");
        window.location.href = "login.html";
    }).catch(err => console.error(err));
}

// Login User
function login(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    }).then(res => res.json()).then(data => {
        localStorage.setItem("token", data.token);
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    }).catch(err => console.error(err));
}

// Fetch Created Events
function fetchCreatedEvents() {
    fetch(`${API_URL}/events`)
        .then(res => res.json())
        .then(events => {
            document.getElementById("created-events").innerHTML = events.map(event => `
                <div>
                    <h4>${event.title}</h4>
                    <p>${event.date} at ${event.time}</p>
                </div>
            `).join('');
        }).catch(err => console.error(err));
}

// Fetch Registered Events (Dummy - Needs Backend Update)
function fetchRegisteredEvents() {
    document.getElementById("registered-events").innerHTML = "<p>No events registered yet.</p>";
}

// Logout
function logout() {
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    window.location.href = "login.html";
}
