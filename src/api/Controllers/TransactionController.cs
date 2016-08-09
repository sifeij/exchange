using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace exchange
{
    using Models;
    using Services;

    [Route("api/[controller]")]
    public class TransactionController : Controller
    {
        public TransactionController(ITransactionService transactionService)
        {
            _transactionService = transactionService;
        }

        // GET: api/transaction
        [HttpGet]
        public IEnumerable<Transaction> Get()
        {
            return _transactionService.Get();
        }

        // GET api/transaction/{id}
        [HttpGet("{currency}", Name = "deposit")]
        public Decimal Get(String currency)
        {
            return _transactionService.Get(currency);
        }

        // GET: api/transaction/summary
        [HttpGet]
        [Route("summary")]
        public IEnumerable<Transaction> GetSummary()
        {
            return _transactionService.GetSummary();
        }

        // PUT api/transaction/{currency}
        [HttpPut("{currency}")]
        public IActionResult Put(String product, [FromBody]Transaction transaction)
        {
            var balance = _transactionService.Add(transaction);
            return CreatedAtRoute("deposit", product);
        }

        readonly ITransactionService _transactionService;
    }
}
