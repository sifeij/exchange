using System;

namespace exchange.Models
{
    public class Transaction
    {
        public String Currency { get; set; }
        public Decimal Amount { get; set; }
        public DateTime When { get; set; } = DateTime.Now;
    }
}
