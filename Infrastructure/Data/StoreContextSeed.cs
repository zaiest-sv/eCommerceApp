using System.Text.Json;
using Core.Entities;

namespace Infrastructure.Data;

public class StoreContextSeed
{
    public static async Task SeedAsync(StoreContext storeContext)
    {
        if (!storeContext.ProductBrand.Any())
        {
            var brandsData = File.ReadAllText("../Infrastructure/Data/SeedData/brands.json");
            var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);
            storeContext.ProductBrand.AddRange(brands);
        }
        
        if (!storeContext.ProductType.Any())
        {
            var typesData = File.ReadAllText("../Infrastructure/Data/SeedData/types.json");
            var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);
            storeContext.ProductType.AddRange(types);
        }
        
        if (!storeContext.Products.Any())
        {
            var productsData = File.ReadAllText("../Infrastructure/Data/SeedData/products.json");
            var products = JsonSerializer.Deserialize<List<Product>>(productsData);
            storeContext.Products.AddRange(products);
        }

        if (storeContext.ChangeTracker.HasChanges())
        {
            await storeContext.SaveChangesAsync();
        }
    }
}