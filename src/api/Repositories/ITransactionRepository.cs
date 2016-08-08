using System;
using System.Collections.Generic;

namespace exchange.Repositories
{
    using Models;

    public interface ITransactionRepository
    {
        IEnumerable<Transaction> Get();
        Decimal GetByCurrency(String currency);
        Transaction Add(Transaction transaction);
    }
}
