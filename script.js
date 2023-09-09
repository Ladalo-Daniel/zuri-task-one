// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to get the current day of the week
    function getCurrentDayOfTheWeek() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const dayOfWeek = days[currentDate.getUTCDay()];
        return dayOfWeek;
    }

    // Function to get the current UTC time in milliseconds
    function getCurrentUTCTime() {
        const currentDate = new Date();
        return currentDate.getTime();
    }

    // Populating the elements with data
    document.querySelector("[data-testid='slackUserName']").textContent = "Bala Ladalo Daniel";
    document.querySelector("[data-testid='slackDisplayImage']").src = "https://ca.slack-edge.com/T05FFAA91JP-U05RG4K9FPF-984bab9f4e6a-512";
    document.querySelector("[data-testid='slackDisplayImage']").alt = "Ladalo Daniel";
    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = getCurrentDayOfTheWeek();
    document.querySelector("[data-testid='currentUTCTime']").textContent = getCurrentUTCTime();
    document.querySelector("[data-testid='myTrack']").textContent = "Frontend";
    document.querySelector("[data-testid='githubURL']").href = "https://github.com/Ladalo-Daniel/zuri-task-one";
});
