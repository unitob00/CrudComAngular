
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace CrudComAngular.Models
{

	public class ProdutoDbContext :DbContext
	{

		public DbSet<Produto> Produtos { get; set; }
		public object Produto { get; internal set; }

		protected override void OnModelCreating(DbModelBuilder modelBuilder)
		{
			modelBuilder.Conventions.Remove < PluralizingTableNameConvention>();
		}
	}
}