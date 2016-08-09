using System;
using System.Collections.Generic;

namespace exchange.Repositories
{
    using Models;

    public interface ITransactionRepository
    {
        IEnumerable<Transaction> Get();
        Decimal Get(String currency);
        IEnumerable<Transaction> GetSummary();
        Transaction Add(Transaction transaction);
    }
}
