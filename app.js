let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];


for (let i = 0; i < pronoun.length; i++) {
    for (let d = 0; d < adj.length; d++) {
    for (let n = 0; n < noun.length; n++) {
    console.log(pronoun[i]+adj[d]+noun[n] + ".com");
}
}
}