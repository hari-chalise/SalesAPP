using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;
using salesApi.Data;
using salesApi.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
namespace salesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController: ControllerBase
    {
          private readonly DataContext _context;
        public CustomerController(DataContext context)
        {
            _context = context;
        }
        // GET: api/Customer
        [HttpGet]
        public ActionResult<IEnumerable<Customer>> Get()
        {
            var customers = _context.Customers.ToList();
            return Ok(customers);
        }

        // GET: api/Customer/5
        [HttpGet("{id}")]
         public ActionResult<Customer> Get(int id)
        {
            var customers = _context.Customers.FirstOrDefault(a => a.id == id);
            return Ok(customers);
        }

        // POST: api/Customer
        [HttpPost]
        public ActionResult<Customer> Post([FromBody] Customer cs)
        {
            _context.Customers.Add(cs);
            _context.SaveChanges();
            return Ok(cs);
        }

        // PUT: api/Customer/5
        [HttpPut("{id}")]
        public async Task <ActionResult> PutCustomer(int id, [FromBody] Customer customer)
        {
            if (id != customer.id)
             {
                return BadRequest();
            }
            _context.Entry(customer).State = EntityState.Modified;
            try {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // if (!CustomerExist(id))
                // {
                //     return NotFound();
                // }
                // else
                // {
                //     throw;
                // }
            }
            return NoContent();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Customer>> DeleteCustomer(int id)
        {
            var customer = await _context.Customers.FindAsync(id);
            if (customer == null) {
                return NotFound();
            }
            _context.Customers.Remove(customer);
            await _context.SaveChangesAsync();
            return customer;
        }
    }
}