export let mockData = {
    events: [
        {
            eventID: 1,
            messages: [
            {
                messageID: 1,
                messageBody: 'Chicago Bulls to win Superbowl',
                messageVotes: -9,
                author: mockUsers.users[1].userID
            },
            {
                messageID: 2,
                messageBody: 'Chicago Bulls will go all the way to the playoffs!',
                messageVotes: 7,
                author: mockUsers.users[3].userID
            }
            ]
        },
        {   
            eventID: 20,
            messages: [
            {
                messageID: 20,
                messageBody: 'Diamondbacks will crush Red Sox',
                messageVotes: 30,
                author: mockUsers.users[0].userID
            },
            {
                messageID: 21,
                messageBody: 'No no no, Red Sox will win.',
                messageVotes: 29,
                author: mockUsers.users[3].userID
            }
        ]
        },
        {
            eventID: 300,
            messages: [
            {
                messageID: 312,
                messageBody: 'Bet on the Packers!',
                messageVotes: -111,
                author: mockUsers.users[2].userID
            },
            {
                messageID: 333,
                messageBody: 'Vote against the Bears, they are so bad this year.',
                messageVotes: 133,
                author: mockUsers.users[4].userID
            }
            ]
        }
    ]
}

export let mockUsers = {
    users: [
        {
            userID : "Gambling Bob",
            winRate: "58%"
        },
        {
            userID: "Roger Roulette",
            winRate: "49%"
        },
        {
            userID: "Jack Black",
            winRate: "51%"
        },
        {
            userID: "John Wager",
            winRate: "32%"
        },
        {
            userID: "Chip Poker",
            winRate: "61%"
        }
    ]
}