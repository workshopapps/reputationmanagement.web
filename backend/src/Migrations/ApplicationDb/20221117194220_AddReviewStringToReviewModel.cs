using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace src.Migrations.ApplicationDb
{
    public partial class AddReviewStringToReviewModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ReviewString",
                table: "Reviews",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ReviewString",
                table: "Reviews");
        }
    }
}
