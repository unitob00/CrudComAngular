using System.ComponentModel.DataAnnotations;

namespace CrudComAngular.Models
{
	public class Produto
	{
		[Key]
		public int id { get; set; }

		public string Descricao { get; set; }

		public string Preco {get; set; }

		public string Quantidade { get; set; }

		public string Marca { get; set; }




	}
}