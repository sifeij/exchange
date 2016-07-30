using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace exchange
{
    using Models;
    using Services;

    [Route("api/[controller]")]
    public class BalanceController : Controller
    {
        public BalanceController(IBalanceService balanceService)
        {
            _balance = balanceService;
        }

        // GET: api/balance
        [HttpGet]
        public IDictionary<String, Decimal> Get()
        {
            return _balance.Get();
        }

        // GET api/balance/{id}
        [HttpGet("{product}", Name = "deposit")]
        public Decimal Get(string product)
        {
            return _balance.Get()
                           .SingleOrDefault(x => x.Key.ToUpperInvariant() == product)
                           .Value;
        }

        // PUT api/balance/{product}
        [HttpPut("{product}")]
        public IActionResult Put(String product, [FromBody]Decimal amount)
        {
            var balance = _balance.Add(product, amount);
            return CreatedAtRoute("deposit", product);
        }

        readonly IBalanceService _balance;
    }
}
