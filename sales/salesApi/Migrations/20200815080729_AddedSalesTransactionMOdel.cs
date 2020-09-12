using Microsoft.EntityFrameworkCore.Migrations;

namespace salesApi.Migrations
{
    public partial class AddedSalesTransactionMOdel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SalesTransactions",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    salesId = table.Column<int>(nullable: false),
                    productId = table.Column<int>(nullable: false),
                    customerId = table.Column<int>(nullable: false),
                    actualSalingPrice = table.Column<int>(nullable: false),
                    saleDate = table.Column<int>(nullable: false),
                    saleTime = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SalesTransactions", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SalesTransactions");
        }
    }
}
