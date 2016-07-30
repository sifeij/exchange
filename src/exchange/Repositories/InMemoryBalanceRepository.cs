using System;
using System.Collections.Generic;

namespace exchange.Repositories
{
    public class InMemoryBalanceRepository : IBalanceRepository
    {
        public IDictionary<String, Decimal> Get()
        {
            return _balance;
        }

        public Decimal Add(String product, Decimal amount)
        {
            if (!_balance.ContainsKey(product))
            {
                _balance.Add(product, 0m);
            }

            _balance[product] += amount;

            return _balance[product];
        }

        readonly Dictionary<String, Decimal> _balance = new Dictionary<String, Decimal>();
    }
}
