import { Injectable } from '@angular/core';
import { User } from "../models/user.model";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import * as uuid from 'uuid';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireStore: AngularFirestore) {
  }

  isMember(planningId: string): Observable<boolean> {
    return this.getUsers(planningId).pipe(
      map(users => users
        .filter(() => !!this.getUserFromStorage(planningId))
        .find(user => user.id === this.getUserFromStorage(planningId).id)
      ),
      map(user => !!user)
    )
  }

  getCurrentUser(planningId: string): Observable<User> {
    return this.getUsers(planningId).pipe(
      map(users => users
        .filter(() => !!this.getUserFromStorage(planningId))
        .find(user => user.id === this.getUserFromStorage(planningId).id)
      )
    )
  }

  private getUserFromStorage(planningId: string): User {
    var storage = localStorage.getItem(planningId);
    if (!storage) {
      return;
    }
    return JSON.parse(storage);
  }

  createUser(planningId: string, name: string, isObserver: boolean) {
    var user: User = {
      id: uuid.v4(),
      name: name,
      isObserver: isObserver
    }
    localStorage.setItem(planningId, JSON.stringify(user));
    this.fireStore.collection('plannings')
      .doc(planningId)
      .collection<User>('users')
      .doc(user.id)
      .set({...user})
  }

  getUsers(planningId: string): Observable<User[]> {
    return this.fireStore.collection('plannings')
      .doc(planningId)
      .collection<User>('users')
      .valueChanges();
  }

  removeUser(planningId: string, userId: string) {
    this.fireStore.collection('plannings')
      .doc(planningId)
      .collection('users')
      .doc(userId)
      .delete();
  }

  setObserver(planningId: string, userId: string, isObserver: boolean) {
    this.fireStore.collection('plannings')
      .doc(planningId)
      .collection('users')
      .doc(userId)
      .update({isObserver})
  }

}
