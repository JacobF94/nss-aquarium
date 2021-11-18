const database = {
    fish: [
        {
            id: 1,
            name: "Bart",
            food: "crustaceans",
            size: 3
        },
        {
            id: 2,
            name: "Fred",
            food: "Fish Flakes",
            size: 2
        },
        {
            id: 3,
            name: "Oscar",
            food: "Humans",
            size: 100
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}