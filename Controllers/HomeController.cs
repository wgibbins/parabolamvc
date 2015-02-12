using Microsoft.AspNet.Mvc;

namespace MvcSample.Web
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult ReturnY(int x, float a, float b, float c)
        {
            var y = a*(x*x) + b*x + c;
            return Json(new object[] {x, y});         
        }
    }
}