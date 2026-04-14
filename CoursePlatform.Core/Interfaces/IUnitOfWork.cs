using System;
using System.Threading.Tasks;

namespace CoursePlatform.Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        
        
        
        Task<int> CompleteAsync();
    }
}
