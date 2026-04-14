using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace CoursePlatform.Core.Entities
{
    public class ApplicationUser : IdentityUser<Guid>
    {
        public string? Bio { get; set; }
        public DateTime RegistrationDate { get; set; } = DateTime.UtcNow;

        
        public virtual ICollection<Course> TaughtCourses { get; set; } = new List<Course>();
        public virtual ICollection<Enrollment> Enrollments { get; set; } = new List<Enrollment>();
        public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();
    }
}
