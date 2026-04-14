using Microsoft.AspNetCore.Identity;
using System;

namespace CoursePlatform.Core.Entities
{
    public class ApplicationRole : IdentityRole<Guid>
    {
        public string? Description { get; set; }
    }
}
