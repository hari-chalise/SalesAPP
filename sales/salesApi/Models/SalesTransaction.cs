namespace salesApi.Models
{
    public class SalesTransaction
    {
        public int id { get; set; }
        public int salesId { get; set; }
        public int productId { get; set; }
        public int customerId { get; set; }
        public int actualSalingPrice { get; set; }
        public int saleDate { get; set; }
        public int saleTime { get; set; }
    }
}