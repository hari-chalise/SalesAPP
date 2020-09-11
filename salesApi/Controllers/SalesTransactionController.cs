using System;
using System.Collections.Generic;
using System.Linq;
using salesApi.Data;
using salesApi.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
namespace salesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesTransactionController : ControllerBase
    {
        private readonly DataContext _db;

        public SalesTransactionController(DataContext db)
        {
            _db = db;

        }
       // GET: api/SalesTransaction
        [HttpGet]
        public ActionResult<IEnumerable<SalesTransaction>> Get()
        {
            var SalesTransactionList = _db.SalesTransactions.ToList();
            return Ok(SalesTransactionList);
        }

        // GET api/SalesTransaction/5
        [HttpGet("{id}")]
        public ActionResult<SalesTransaction> Get(int id)
        {
            var salesTransaction = _db.SalesTransactions.FirstOrDefault(a => a.id == id);
            return Ok(salesTransaction);
        }

        // POST api/values
        [HttpPost]
        public ActionResult<SalesTransaction> Post([FromBody] SalesTransaction saT)
        {
            _db.SalesTransactions.Add(saT);
            _db.SaveChanges();
            return Ok(saT);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}