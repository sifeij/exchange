using System;
using System.Collections.Generic;
using System.Linq;

namespace exchange.Repositories
{
    using Models;

    public class InMemoryTransactionRepository : ITransactionRepository
    {
        public IEnumerable<Transaction> Get()
        {
            return _transactions;
        }

        public Decimal Get(String currency)
        {
            if (_transactions == null) return 0m;

            return _transactions
                        .Where(c => c.Currency == currency)
                        .Sum(c => c.Amount);
        }

        public IEnumerable<Transaction> GetSummary()
        {
            return _transactions
                        .GroupBy(c => c.Currency)
                        .Select(g => new Transaction()
                        {
                            Currency = g.Key,
                            Amount = g.Sum(t => t.Amount)
                        });
        }

        public Transaction Add(Transaction transaction)
        {
            _transactions.Add(transaction);
            return transaction;
        }

        readonly List<Transaction> _transactions = new List<Transaction>();
    }
}
