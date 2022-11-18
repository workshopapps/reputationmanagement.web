using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace src.Migrations
{
    public partial class AddUserRolesToRoleStore : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "984fc7a9-4535-4cc8-a248-25ebb934426f", "8d03f179-3a3e-44ce-9c42-853a49b97195", "Customer", "CUSTOMER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "d88e0d56-c744-4921-bd65-77c145de3d8b", "7b7bce69-7080-4bfc-b3a9-7964f38853ad", "Administrator", "ADMINISTRATOR" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "e7398d5a-b47c-43ef-a940-9f35b823eb28", "554384c4-ea31-47a0-a729-ada833df95b5", "Lawyer", "LAWYER" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "984fc7a9-4535-4cc8-a248-25ebb934426f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d88e0d56-c744-4921-bd65-77c145de3d8b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e7398d5a-b47c-43ef-a940-9f35b823eb28");
        }
    }
}
