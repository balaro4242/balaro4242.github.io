const button = document.getElementById("button")
const input = document.getElementById("input")
const answer = document.getElementById("answer")

button.addEventListener("click", () => {
    const text = input.textContent
    answer.textContent = Math.floor(Math.random()*100)
})