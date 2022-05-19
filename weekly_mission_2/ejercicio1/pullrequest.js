const pullrequest= {
    title:"pullrequest normal",
    author:"AlmaHeco",
    branchName: "main",
    dateCreated:"18/05/22",
    status:"ongoing",
    repositoryNameAssociated: "modelacion de objetos",

    getStatus: function(){
        return `status: ${this.status}`
    },

    getTitleAndAuthor: function(){
        return `
        titulo: ${this.title}
        autor: ${this.author}`
    }
}

console.log(pullrequest.getStatus());
console.log(pullrequest.getTitleAndAuthor());