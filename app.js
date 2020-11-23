const tabs = ["about", "where", "support", "parents", "legal", "privacy"]

tabs.forEach((tab) => {
    document.getElementById(`${tab}-down`).addEventListener("click", () => {
        document.getElementById(`${tab}-drop`).classList.toggle("hidden")
    })
})

const hamburgerBtn = document.getElementById("hamburger").addEventListener('click', () => {
    document.getElementById("hamburger-menu").classList.toggle('hidden')
})
