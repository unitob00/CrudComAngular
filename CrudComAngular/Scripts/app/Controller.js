app.controller("crudCtrl", function ($scope, crudService) { //atraves do scope vou conseguir acessar os arquivos e trazer as informações do banco

	$scope.divProduto = false;

	obterProdutos(); //crio metodo obter produtos

	function obterProdutos() {



		var produtosData = crudService.ObterProdutos();

		produtosData.then(function (produto) {

			$scope.produtos = produto.data;

		}, function () {

			toastr["error"]("Erro ao obter os produtos", "WebAPI ,- CRUD");

		});

	}

	//obtem por id
	$scope.obterPorId = function (produto) {

		var produtoData = crudService.ObterProdutoPorId(produto.id);

		produtoData.then(function (_produto) {
			$scope.produto = _produto.data;
			$scope.produtoid = produto.id;
			$scope.Descricao = produto.Descricao;
			$scope.Preco = produto.Preco;
			$scope.Quantidade = produto.Quantidade;
			$scope.Marca = produto.Marca;
			$scope.Action = "Atualizar";
			$scope.divProduto = true;
		}, function () {
			toastr["error"]("Erro ao obter produto por id!", "CRUD com MVC e AngularJS");
		});
	}

	$scope.excluirProduto = function (produto) {

		var produtoData = crudService.ExcluirProduto(produto.id);

		produtoData.then(function (data) {

			if (data.status == 200) {

				toastr["success"]("Produto excluido com sucesso!", "WebAPI ,- CRUD");
			}
			obterProdutos();
		}, function () {
			toastr["error"]("Erro ao excluir", "WebAPI ,- CRUD");
			});

	}

	$scope.AdicionarAtualizarProduto = function () {

		var produto = {
			Descricao: $scope.Descricao,
			Preco: $scope.Preco,
			Quantidade: $scope.Quantidade,
			Marca: $scope.Marca
		
		};
		var valorAcao = $scope.Action;

		if (valorAcao == "Atualizar") {

			produto.id = $scope.produtoid;
			var produtoData = crudService.AtualizarProduto(produto);
			produtoData.then(function (data) {
				obterProdutos();
				$scope.divProduto = false;
				if (data.status == 200) {
					toastr["success"]("Produto alterado com sucesso!", " CRUD com MVC e AngularJS");
				}
			}, function () {
				toastr["error"]("Erro ao atualizar!", "CRUD com MVC e AngularJS");
			});
		} else {

			var produtoData = crudService.AdicionarProduto(produto);
			produtoData.then(function (data) {
				obterProdutos();

				if (data.status == 200) {
					toastr["success"]("Produto cadastrado com sucesso!", " CRUD com MVC e AngularJS");
				}
				$scope.divProduto = false;
			}, function () {
				toastr["error"]("Erro ao incluir!", " CRUD com MVC e AngularJS");
			});
		}
	}

	$scope.incluirProdutoDiv = function () {

		limparCampos();
		$scope.Action = "Adicionar";
		$scope.divProduto = true;
	}

	$scope.Cancelar = function () {
		$scope.divProduto = false;
	};



	function limparCampos() {
		$scope.Quantidade = "";
	}


});
