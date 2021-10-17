import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Card, Deck } from './class/deck';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';



@Injectable()
export class CardsService {
  create(createCardDto: CreateCardDto) {
    return 'This action adds a new card';
  }

  async findAll(): Promise<any>{
    let fullD:Card[]; 
    const oneType=['A','K','J','Q','2','3','4','5','6','7','8','9','10'];
    //const deck=['spades','clubs','diamonds','hearts']
   const card= await this.fetchCards()
   const deck:Deck= new Deck()
   deck.isComplete()
   for(let c of card){
     
    
     const map:Map<string,number>= new Map()
     const exist= map.has(c.suit)//map.set(c.suit,c.value)

   }
   return card
   
   
  }

  async fetchCards():Promise<any>{
    const c= await  axios.get('https://gist.githubusercontent.com/smaugho/25712886c4a7b938fdda2c41d5b0838e/raw/79d2e4f7cfef5ba01c633400dadc81219516b95b/mixed_decks_2')
    .then((r)=> {
      
      return r.data
     
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    return c
  }

  findOne(id: number) {
    return `This action returns a #${id} card`;
  }

  update(id: number, updateCardDto: UpdateCardDto) {
    return `This action updates a #${id} card`;
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }
}
