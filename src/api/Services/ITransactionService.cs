using System;
using System.Collections.Generic;

namespace exchange.Services
{
    using Models;

    public interface ITransactionService
    {
        IEnumerable<Transaction> Get();
        Decimal Get(String currency);
        IEnumerable<Transaction> GetSummary();
        Transaction Add(Transaction transaction);
    }
}