// Ejemplo 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto
class Toolbox {

    constructor(h1,h2,h3){
        this.herr1=h1;
        this.herr2=h2;
        this.herr3=h3;
        this.changos="mandril";
    }
    
     retrosectiva(otro_chango){
        this.changos=this.changos+otro_chango;
    }

    static getMostUsefulTools(){
      return ["Command line", "git", "Text Editor"]
    }
  }
  
  console.log("Ejemplo 8: Métodos static")
  // Puedo llamar el método static directamente con el nombre de la clase
  console.log(Toolbox.getMostUsefulTools())
  const toolbox1=new Toolbox("martillo","serrucho","desarmador");
  console.log(toolbox1);
  toolbox1.retrosectiva("babuino");
  console.log(toolbox1);
  
  // Si intentamos instanciar un objeto, no podremos llamar este método static
  //const toolbox = new Toolbox()
  //console.log(toolbox.getMostUsefulTools()) // is not a function
  


  /*
  
  HERENCIA: Nos permite relacionar clases entre sí y rehusar sus componentes
  
  */