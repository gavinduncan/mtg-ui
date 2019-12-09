import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private http: HttpClient) { }

  // My Deck for showing in the front end 
  cards: any[] = [ ];
  
  ngOnInit() {
  }

  getCards() {
     this.http.get('http://localhost:3000/mtg-app/cards').subscribe((dataReceived: any[]) => {
      this.cards = []; 
      dataReceived.forEach(card => {
        this.cards.push(card);
     });

    });
  }

  addCard() {
    let name = 'John Smith #' + Math.random();
    this.http.post('http://localhost:3000/mtg-app/cards', {"id":Math.random(), "name": name}).subscribe(d => {
    console.log('return from post: ', d); 
    this.getCards();
    });
 }


}
