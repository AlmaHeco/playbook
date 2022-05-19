const user = {
    name:"alberto",
    user_name:"alma_heco",
    joiningdate:"10/03/22",
    following:["xbox","playstation","crunchyroll"],
    followers:[],
    last_tweets:{"10/05/22":"tengo hambre","11/05/22":"ya no tengo hambre"},
    getuser:function(nombre){
        return `${this.name}  ${this.user_name}  ${nombre}`;
    }
}

const trending={
    trends:["raton","lonches","agua fresca","reposteria"],
    hashtags:["rangooro","perros","pinguinoscool","nieve"],
    likes:{"10/05/22":"https//dasd/dsada.dsfsd....","11/05/22":"https//agfgnhn/lik/kjykyuj.kyuy..."},
}

console.log(user.getuser("changos"));
console.log(trending.likes["10/05/22"]);