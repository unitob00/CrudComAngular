using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CrudComAngular.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index() // vai me retornar uma view que é o index
		{
			return View();
		}

	}
}