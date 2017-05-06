app.service("crudService", function ($http) { //consumir primeriofunção


	//Obter todos os produtos Cadastrados
	this.ObterProdutos = function () {

		return $http.get("/api/v1/public/produtos");
	}

	//Obter  produtos por ID
	this.ObterProdutoPorId = function (id) {

		return $http.get("/api/v1/public/produto/" + id);
	}

	//Atualizar Produto

	this.AtualizarProduto = function (produto) {
		var response = $http({
			method: "put",
			url: "/api/v1/public/putprodutos",
			data: JSON.stringify(produto),
			dataType: "json"
		});

		return response;

	}

	//Adicionar Produto
	this.AdicionarProduto = function (produto) {
		var response = $http({
			method: "post",
			url: "/api/v1/public/postproduto",
			data: JSON.stringify(produto),
			dataType: "json"
		});

		return response;

	}

	//Excluir Produto
	this.ExcluirProduto = function (id) {
		var response = $http({
			method: "delete",
			url: "/api/v1/public/deleteproduto/" + JSON.stringify(id)
			
		});

		return response;

	}


});