using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public string GetProducts()
    {
        return "GetProducts";
    }
    
    [HttpGet("{id}")]
    public string GetProductById(int id)
    {
        return "Get Product By Id";
    }
}

