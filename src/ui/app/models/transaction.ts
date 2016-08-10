export class Transaction {

    constructor(public currency: string,
                public amount: number,
                public when?: Date) {

    }
}
