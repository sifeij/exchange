using System;
using System.Collections.Generic;

namespace exchange.Repositories
{
    public interface IBalanceRepository
    {
        IDictionary<String, Decimal> Get();
        Decimal Add(String product, Decimal amount);
    }
}
