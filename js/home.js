const themeIcon = document.getElementById("themeIcon");
const toggleButton = document.getElementById("darkTheme");


toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    } else {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }
});

const hamburgerToggleButton = document.getElementById("hamburgerButton");
const hamburgerToggleIcon = document.getElementById("hamburgerIcon");
const navLinks = document.getElementById("navbar-links");
const navigation = document.getElementById("navigations");

hamburgerToggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navigation.classList.toggle("active")

    if (navLinks.classList.contains("active")) {
        hamburgerToggleIcon.classList.remove("fa-bars-staggered");
        hamburgerToggleIcon.classList.add("fa-xmark");
    } else {
        hamburgerToggleIcon.classList.add("fa-bars-staggered");
        hamburgerToggleIcon.classList.remove("fa-xmark");
        navLinks.classList.remove("active");
        navigation.classList.remove("active");

    }

});


const navItem = document.querySelectorAll(".nav-link");

navItem.forEach(mylink => {
    mylink.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburgerToggleIcon.classList.remove("fa-xmark");
        navigation.classList.remove("active");
        hamburgerToggleIcon.classList.add("fa-bars-staggered");
    });

});


const myForm = document.getElementById("emailForm");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const error = document.getElementById("emailError");

    if (!email.includes("@.com") || email === "") {
        error.textContent = "enter valid email";
        error.style.display = "block";

    } else {
        alert("valid email")
        error.style.display = "none";
    }

});




async function getUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const responseData = await fetch(url);
        const jsonData = await responseData.json();

        console.log("jsonData", jsonData)
    } catch (err) {
        console.log("error", err)
    }
}

// getUsers();


//Asynchronous JS
// console.log("start cooking");
// setTimeout(() => {
//     console.log("add carrots");
// }, 3000)
// console.log("pasta is ready");

//callback function functions are calling a function as an argument in a function
// function orderPizza(callback) {
//     console.log("ordering pizza...");
//     setTimeout(() => {
//         console.log("pizza delivered")
//         callback();

//         console.log(typeof (callback))
//     }, 2000);
// }
// orderPizza(() => {
//     console.log("Eat Pizza")
// })

// const myPromise = new Promise((resolve, reject) => {
//     // resolve()
//     // reject()

//     // asynchronous
//     setTimeout(() => {
//         const success = true;
//         if (success) {
//             resolve("hey operation runs successful")
//         } else {
//             reject("oh oh, operation failed")
//         }
//     }, 1000)
// });
// // myPromise(age)
// //consuming promise function
// myPromise.then(
//     (value) => { console.log("promise Fulfilled ", value); },
//     (reason) => { console.log("promise Rejected ", reason); }
// )

// pending fulfilled rejected
// const pizzaPromise = new Promise((resolve, reject) => {
//     let delivered = false;
//     setTimeout(() => {
//         if (delivered) {
//             resolve("Pizza Delivered")
//         } else {
//             reject("Pizza not Delivered")
//         }
//     }, 3000)
// });
// pizzaPromise.then(
//     (message) => { console.log(message); },
//     (error) => { console.log(error); }
// )

// async function
// async function myAsyncFunction(){
//     return "hey People"; // asynchronous operation
// }

async function fetchPosts() {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    try {
        const response = await fetch(apiUrl);
        const blogPosts = await response.json();
        const blogSection = document.getElementById("blog");

        console.log(blogPosts);
        blogPosts.slice(0, 10).forEach(posts => {
            const divBlog = ` <div>
            <h2>${posts.title}</h2>
            <p>${posts.body}</p>
            </div>`;

            // a= 1
            // a += 1
            blogSection.innerHTML += divBlog


        });

    } catch (error) {
        console.error("error fetching post: ", error)
    }
}

fetchPosts()


// const apiKey = "e1b175af6032e77efa038666590d76f3";
// const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=9.3265&lon=12.3984&appid=${apiKey}`
// fetch(weatherAPI)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error("Test fetch error:", error));

async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "e1b175af6032e77efa038666590d76f3"; // Replace with your key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        document.getElementById("weather").innerText =
            `${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
    } catch (err) {
        console.error("Failed to fetch weather", err);
    }
}






// git commit -m "initial commit"