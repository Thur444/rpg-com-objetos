   class Personagem {
       constructor (nome, vida, ataque){
        this.nome = nome,
        this.vida = vida,
        this.ataque = ataque
       }

       causaDano(personagem){
        personagem.recebeDano(this.ataque)
       }
       recebeDano(quantidade){
        this.vida = this.vida - quantidade 

        if(this.vida <= 0){
            this.vida = "eliminado"
        }
       }
   }

   const druida = new Personagem ("Kode", 80, 25)
  
   

const guerreiro = new Personagem("Thorin", 60, 20)

const mago = new Personagem("Gandalfe", 60, 35)

const arqueiro = new Personagem("Legolas", 80, 25)

const cowboy = new Personagem("Woody", 95, 40)

const robo = new Personagem("Buzz Lightyear", 90, 50)

const imperador = new Personagem("Zurg", 120, 80)

guerreiro.causaDano(mago)
arqueiro.causaDano(mago)
guerreiro.causaDano(mago)
robo.causaDano(imperador)
imperador.causaDano(robo)
cowboy.causaDano(imperador)
imperador.causaDano(cowboy)
robo.causaDano(imperador)


console.log(cowboy.vida)
console.log(imperador.vida)
console.log(robo.vida)
console.log("Woody e Buzz lightyear derrotaram Zurg")