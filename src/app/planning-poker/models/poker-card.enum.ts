interface PokerCardValue {
  icon?: string;
  text?: string;
}

export class PokerCardEnum {

  static readonly ZERO = new PokerCardEnum('ZERO', {text: '0'});
  static readonly ONE_HALF = new PokerCardEnum('ONE_HALF', {text: '½'});
  static readonly ONE = new PokerCardEnum('ONE', {text: '1'});
  static readonly TWO = new PokerCardEnum('TWO', {text: '2'});
  static readonly THREE = new PokerCardEnum('THREE', {text: '3'});
  static readonly FIVE = new PokerCardEnum('FIVE', {text: '5'});
  static readonly EIGHT = new PokerCardEnum('EIGHT', {text: '8'});
  static readonly THIRTEEN = new PokerCardEnum('THIRTEEN', {text: '13'});
  static readonly TWENTY = new PokerCardEnum('TWENTY', {text: '20'});
  static readonly FOURTY = new PokerCardEnum('FOURTY', {text: '40'});
  static readonly HUNDRED = new PokerCardEnum('HUNDRED', {text: '100'});
  static readonly UNKNOWN = new PokerCardEnum('UNKNOWN', {icon: 'mdi-account-question'});
  static readonly COFFEE = new PokerCardEnum('COFFEE', {icon: 'mdi-coffee'});

  private constructor(private readonly key, public readonly value: PokerCardValue) {
  }

  toString(): string {
    return this.key;
  }

  getKey(): string {
    return this.key;
  }

}
