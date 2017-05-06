using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CrudComAngular.Models;

namespace CrudComAngular.Controllers
{
	[RoutePrefix("api/v1/public")]
	public class ProdutoController : ApiController
    {
		
		private readonly ProdutoDbContext _db = new ProdutoDbContext();

		[HttpGet]
		[Route("produtos")]
		public IQueryable<Produto> ObterProdutos()
		{
			return _db.Produtos;
		}

		[HttpGet]
		[Route("produto/{id:int}")]
		public Produto GetProduto(int id)
		{
			Produto produto = _db.Produtos.Find(id);
			if (produto == null)
			{
				throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
			}

			return produto;
		}


		[HttpPut]
		[Route("putprodutos")]
		public HttpResponseMessage Alterar(Produto produto)
		{
			if (produto == null)
				return Request.CreateResponse(HttpStatusCode.BadRequest);

			_db.Entry(produto).State = EntityState.Modified; //deletar
			_db.SaveChanges();

			return Request.CreateResponse(HttpStatusCode.OK);
		}

		[HttpPost]
		[Route("postproduto")]
		public HttpResponseMessage Incluir(Produto produto)
		{
			if (produto == null)
				return Request.CreateResponse(HttpStatusCode.BadRequest);

			_db.Produtos.Add(produto); //add
			_db.SaveChanges();

			return Request.CreateResponse(HttpStatusCode.OK);
		}

		[HttpDelete]
		[Route("deleteproduto/{id:int}")]
		public HttpResponseMessage Excluir(int id) // de vez pedir objeto inteiro so peço o id do registro
		{
			if (id <= 0)
				return Request.CreateResponse(HttpStatusCode.BadRequest);

			Produto produto = _db.Produtos.Find(id);

			_db.Produtos.Remove(produto);
			_db.SaveChanges();

			return Request.CreateResponse(HttpStatusCode.OK);
		}

		//CRUD -CREAT- READ - UPDATE


		protected override void Dispose(bool disposing)
		{
			if (disposing)
			{
				_db.Dispose();

			}

			base.Dispose(disposing);
		}

	}

}
