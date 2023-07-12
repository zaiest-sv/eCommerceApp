using API.Dtos;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ProductsController : BaseApiController
{
    private readonly IGenericRepository<Product> _productRepository;
    private readonly IGenericRepository<ProductBrand> _productBrandRepository;
    private readonly IGenericRepository<ProductType> _productTypeRepository;
    private readonly IMapper _mapper;

    public ProductsController(IGenericRepository<Product> productRepository, 
        IGenericRepository<ProductBrand> productBrandRepository,  IGenericRepository<ProductType> productTypeRepository,
        IMapper mapper)
    {
        _productRepository = productRepository;
        _productBrandRepository = productBrandRepository;
        _productTypeRepository = productTypeRepository;
        _mapper = mapper;
    }
    
    [HttpGet]
    public async Task<ActionResult<Pagination<ProductToReturnDto>>> GetProducts([FromQuery] ProductSpecParams productParams)
    {
        var specification = new ProductWithTypesAndBrandsSpecification(productParams);
        var countSpecification = new ProductsWithFiltersForCountSpecification(productParams);

        var totalItem = await _productRepository.CountAsync(countSpecification);
        var products = await _productRepository.ListAsync(specification);

        var data = _mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDto>>(products);

        return Ok(new Pagination<ProductToReturnDto>(productParams.PageIndex, productParams.PageSize, totalItem, data)); 
    }
    
    [HttpGet("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
    public async Task<ActionResult<ProductToReturnDto>> GetProduct(int id)
    {
        var specification = new ProductWithTypesAndBrandsSpecification(id);
        var product = await _productRepository.GetEntityWithSpecification(specification);

        if (product == null)
        {
            return NotFound(new ApiResponse(404));
        }
        
        return _mapper.Map<Product, ProductToReturnDto>(product);
    }
    
    [HttpGet("brands")]
    public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetProductBrands()
    {
        var productBrands = await _productBrandRepository.ListAllAsync();
        return productBrands is not null ? Ok(productBrands) : NotFound();
    }
    
    [HttpGet("types")]
    public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductTypes()
    {
        var productTypes = await _productTypeRepository.ListAllAsync();
        return productTypes is not null ? Ok(productTypes) : NotFound();
    }
}

