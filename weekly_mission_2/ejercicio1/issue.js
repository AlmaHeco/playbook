const issue={
    title:"problema creacion de objetos",
    author:"AlmaHeco",
    repositoryNameAssociated:"weekly_mission_2",
    status:"untracked",
    numberOfComments:20,
    labels:[
        "objetos",
        "creacion",
        "organizacion",
        "experimentcaion"
    ],
    dateCreated:"18/05/22",
    lastUpdate:Date(),

    getTitleAndAuthor: function(){
        return `
        El autor es: ${this.author}
        cuyo titulo es ${this.title}`
    },

    getGeneralInfo: function(){
        return `
        Inormacion general:
        fecha de creacion:${this.dateCreated}
        ultima actualizacion:${this.lastUpdate}
        etiquetas:${this.labels}`
    }
}

console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());