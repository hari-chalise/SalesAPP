using Microsoft.EntityFrameworkCore;
using salesApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace salesApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options) { }
        public DbSet<product> products { get; set; }
        public DbSet<SalesTransaction> SalesTransactions { get; set; }
        public DbSet <Customer> Customers { get; set; }
    }
}
