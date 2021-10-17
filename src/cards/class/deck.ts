export type OneTypeCard={
    'A':number
    'K':number,
    'J':number,
    'Q':number,
    '2':number,
    '3':number,
    '4':number,
    '5':number,
    '6':number,
    '7':number,
    '8':number,
    '9':number,
    '10':number
  }
  export type Card={
    hearts:OneTypeCard,
    clubs:OneTypeCard,
    diamonds:OneTypeCard,
    spades:OneTypeCard
  }

export class Deck{
    constructor(){
        
        const card:Card={
            hearts: {
                A: 0,
                K: 0,
                J: 0,
                Q: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0
            },
            clubs: {
                A: 0,
                K: 0,
                J: 0,
                Q: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0
            },
            diamonds: {
                A: 0,
                K: 0,
                J: 0,
                Q: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0
            },
            spades: {
                A: 0,
                K: 0,
                J: 0,
                Q: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0
            }
        }
       this.Card=card
        
      }
    private Card:Card;
    public isComplete():boolean{
        const keys= Object.keys(this.Card)
        //console.log(keys)
        keys.forEach(k=>{
            const values= Object.keys(k)
            console.log(values.toString())
            /*values.forEach(v=>{
                console.log('Key: '+v,k[v])
            })*/
        })
        return true
    }
}