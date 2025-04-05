export const getRandomCharacter = (): string => {
    const characters = [
        "Snow White",
        "The Evil Queen",
        "Prince Charming",
        "Grumpy",
        "Doc",
        "Happy",
        "Sleepy",
        "Bashful",
        "Dopey"
    ];
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
};