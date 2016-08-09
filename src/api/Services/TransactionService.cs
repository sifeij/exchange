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
            return _transactionRepo.Get();
        }

        public Decimal Get(String currency)
        {
            return _transactionRepo.Get(currency);
        }

        public IEnumerable<Transaction> GetSummary()
        {
            return _transactionRepo.GetSummary();
        }

        public Transaction Add(Transaction transaction)
        {
            return _transactionRepo.Add(transaction);
        }

        readonly ITransactionRepository _transactionRepo;
    }
}
