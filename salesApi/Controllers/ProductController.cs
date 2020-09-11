using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using salesApi.Data;

namespace salesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {

        private readonly DataContext _context;
        public ProductController(DataContext context)
        {
            _context = context;
        }
        // GET: api/Product
        [HttpGet]
        public async Task<IActionResult>  GetProducts()
        {
            var products = await _context.products.ToListAsync();
            return Ok(products);
        }

        // GET: api/Product/5
        [HttpGet("{id}", Name = "Get")]
        public  async Task<IActionResult>  GetProduct(int id)
        {
            var products = await _context.products.FirstOrDefaultAsync(x => x.id == id);
            return Ok(products);
        }

        // POST: api/Product
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Product/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
