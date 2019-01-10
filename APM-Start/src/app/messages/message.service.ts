import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    private _messages: string[] = [];
    isDisplayed: boolean = false;


  get messages(): string[] {
    return this._messages;
  }

  addMessage(message: string): void {
    const currentDate = new Date();
    this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
  }
}
