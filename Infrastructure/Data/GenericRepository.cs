﻿using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data;

public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity
{
    private readonly StoreContext _storeContext;

    public GenericRepository (StoreContext storeContext)
    {
        _storeContext = storeContext;
    }

    public async Task<T> GetByIdAsync(int id)
    {
        return await _storeContext.Set<T>().FindAsync(id);
    }

    public async Task<IReadOnlyList<T>> ListAllAsync()
    {
        return await _storeContext.Set<T>().ToListAsync();
    }

    public async Task<T> GetEntityWithSpecification(ISpecification<T> specification)
    {
        return await ApplySpecification(specification).FirstOrDefaultAsync();
    }

    public async Task<IReadOnlyList<T>> ListAsync(ISpecification<T> specification)
    {
        return await ApplySpecification(specification).ToListAsync();
    }

    private IQueryable<T> ApplySpecification(ISpecification<T> specification)
    {
        return SpecificationEvaluator<T>.GetQuery(_storeContext.Set<T>().AsQueryable(), specification);
    }
}