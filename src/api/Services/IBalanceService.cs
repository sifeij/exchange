using System;
using System.Collections.Generic;

namespace exchange.Services
{
    public interface IBalanceService
    {
        IDictionary<String, Decimal> Get();
        Decimal Add(String product, Decimal amount);
    }
}