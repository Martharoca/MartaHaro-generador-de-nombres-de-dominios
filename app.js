let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com', 'es']


for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
    for (let s = 0; s < noun.length; s++) {
        for (let d = 0; d < domain.length; d++) {
        console.log(pronoun[i]+adj[j]+noun[s]+domain[d]);
    }
}
}
}