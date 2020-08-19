interface PokerCardValue {
  icon?: string;
  text?: string;
}

export class PokerCardEnum {

  static readonly ZERO = new PokerCardEnum('ZERO', {text: '0'}, '#1C8A00');
  static readonly ONE_HALF = new PokerCardEnum('ONE_HALF', {text: '½'}, '#029522');
  static readonly ONE = new PokerCardEnum('ONE', {text: '1'}, '#05A069');
  static readonly TWO = new PokerCardEnum('TWO', {text: '2'}, '#09A0AC');
  static readonly THREE = new PokerCardEnum('THREE', {text: '3'}, '#0C62B7');
  static readonly FIVE = new PokerCardEnum('FIVE', {text: '5'}, '#111EC3');
  static readonly EIGHT = new PokerCardEnum('EIGHT', {text: '8'}, '#5615CE');
  static readonly THIRTEEN = new PokerCardEnum('THIRTEEN', {text: '13'}, '#AF1AD9');
  static readonly TWENTY = new PokerCardEnum('TWENTY', {text: '20'}, '#E520BC');
  static readonly FOURTY = new PokerCardEnum('FOURTY', {text: '40'}, '#F02570');
  static readonly HUNDRED = new PokerCardEnum('HUNDRED', {text: '100'}, '#FB372C');
  static readonly UNKNOWN = new PokerCardEnum('UNKNOWN', {icon: 'mdi-account-question'}, '#444');
  static readonly COFFEE = new PokerCardEnum('COFFEE', {icon: 'mdi-coffee'}, '#444');

  private constructor(private readonly key, public readonly value: PokerCardValue, public readonly color: string) {
  }

  toString(): string {
    return this.key;
  }

  getKey(): string {
    return this.key;
  }

}
