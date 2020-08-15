import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { PokerCardEnum } from "../models/poker-card.enum";
import { SelectedCard } from "../models/selected-card.model";
import { filter, map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private fireStore: AngularFirestore) {
  }

  selectCard(planningId: string, card: PokerCardEnum, userId: string) {
    var selectedCard = new SelectedCard(userId, card.getKey());
    this.fireStore.collection('plannings')
      .doc(planningId)
      .collection<SelectedCard>('cards')
      .doc(userId)
      .set({...selectedCard})
  }

  getSelectedCard(planningId: string, userId: string): Observable<SelectedCard> {
    return this.fireStore.collection('plannings')
      .doc(planningId)
      .collection<SelectedCard>('cards')
      .valueChanges()
      .pipe(
        map(cards => cards.find(card => card.userId === userId))
      )
  }

}
