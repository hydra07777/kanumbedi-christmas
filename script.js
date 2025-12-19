let names = [];

function addName() {
    const input = document.getElementById("nameInput");
    const name = input.value.trim();

    if (name === "") return;

    names.push(name);
    input.value = "";
    displayNames();
}

function displayNames() {
    const list = document.getElementById("nameList");
    list.innerHTML = "";

    names.forEach((name) => {
        const li = document.createElement("li");
        li.textContent = name;
        list.appendChild(li);
    });
}

function shuffleGifts() {
    if (names.length < 2 || names.length % 2 !== 0) {
        alert("Le nombre de participants doit être pair 🎅");
        return;
    }

    let shuffled = [...names];

    // Fisher-Yates shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    displayPairs(shuffled);
}

function displayPairs(shuffled) {
    const resultList = document.getElementById("resultList");
    resultList.innerHTML = "";

    for (let i = 0; i < shuffled.length; i += 2) {
        const person1 = shuffled[i];
        const person2 = shuffled[i + 1];

        const li = document.createElement("li");
        li.textContent = `🎁 ${person1} ↔ ${person2}`;
        resultList.appendChild(li);
    }
}
