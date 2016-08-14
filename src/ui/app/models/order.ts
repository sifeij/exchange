export class Order {
    public currency: string;
    public amount: number;
    public when: Date;
    public type: string;
    public restriction: string;
    public purchasePice: number;
    public currentPrice: number;
    public cost: number = this.purchasePice * this.amount;
    public profileLoss: number = this.currentPrice * this.amount - this.cost;
}
