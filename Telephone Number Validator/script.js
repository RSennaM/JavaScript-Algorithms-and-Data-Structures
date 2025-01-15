const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/

    if (!userInput.value) {
        alert("Please provide a phone number")
    } else if (regex.test(userInput.value)) {
        result.innerText = `Valid US number: ${userInput.value}`
    } else {
        result.innerText = `Invalid US number: ${userInput.value}`
    }
});

clearBtn.addEventListener("click", () => {
    result.innerText = ''
});
