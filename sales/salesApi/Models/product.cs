using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace salesApi.Models
{
    public class product
    {
        public int id { get; set; }
        public  String productId { get; set; }
        public String productName { get; set; }
        public int quantity { get; set; }
        public int productRate { get; set; }
        public String description { get; set; }
    }
}
