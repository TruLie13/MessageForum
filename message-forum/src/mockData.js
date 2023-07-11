export let mockData = {
    events: [
        {
            eventID: 1,
            messages:{
                messageID: 1,
                messageBody: 'Chicago Bulls to win Superbowl',
                messageVotes: 0,
            }
        },
        {   
            eventID: 20,
            messages: [
            {
                messageID: 20,
                messageBody: 'Diamondbacks will crush Red Sox',
                messageVotes: 30,
            },
            {
                messageID: 21,
                messageBody: 'No no no, Red Sox will win.',
                messageVotes: 29
            }
        ]
        },
        {
            eventID: 300,
            messages:{
                messageID: 312,
                messageBody: 'Bet on the Packers!',
                messageVotes: -111,
            }
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