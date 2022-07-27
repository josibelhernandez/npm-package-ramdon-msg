const personNames = [
    "Josibel",
    "Maria",
    "Jose",
    "Ramon",
    "Luisa",
    "Carolina"
]

const randomMessage = () => {
    const messages = personNames[Math.floor(Math.random() * personNames.length)];
    console.log(messages);
}

module.exports = { randomMessage };

