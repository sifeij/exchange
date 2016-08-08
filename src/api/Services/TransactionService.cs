using System;
using System.Collections.Generic;

namespace exchange.Services
{
    using Models;
    using Repositories;

    public class TransactionService : ITransactionService
    {
        public TransactionService(ITransactionRepository transactionRepo)
        {
            _transactionRepo = transactionRepo;
        }

        public IEnumerable<Transaction> Get()
        {
            var result = _transactionRepo.Get();
            return result;
        }

        public Decimal GetByCurrency(String currency)
        {
            return _transactionRepo.GetByCurrency(currency);
        }

        public Transaction Add(Transaction transaction)
        {
            return _transactionRepo.Add(transaction);
        }

        readonly ITransactionRepository _transactionRepo;
    }
}
