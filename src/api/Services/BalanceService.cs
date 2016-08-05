using System;
using System.Collections.Generic;

namespace exchange.Services
{
    using Repositories;
    public class BalanceService : IBalanceService
    {
        public BalanceService(IBalanceRepository balanceRepository)
        {
            _balance = balanceRepository;
        }

        public IDictionary<String, Decimal> Get()
        {
            return _balance.Get();
        }

        public Decimal Add(String product, Decimal amount)
        {
            return _balance.Add(product, amount);
        }

        readonly IBalanceRepository _balance;
    }
}
