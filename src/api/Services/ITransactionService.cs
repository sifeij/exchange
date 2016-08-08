using System;
using System.Collections.Generic;

namespace exchange.Services
{
    using Models;

    public interface ITransactionService
    {
        IEnumerable<Transaction> Get();
        Decimal GetByCurrency(String currency);
        Transaction Add(Transaction transaction);
    }
}