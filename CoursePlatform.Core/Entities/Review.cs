using System;

namespace CoursePlatform.Core.Entities
{
    public class Review
    {
        public Guid Id { get; set; }
        public int Rating { get; set; } 
        public string Comment { get; set; } = string.Empty;
        public DateTime ReviewDate { get; set; } = DateTime.UtcNow;

        
        public Guid StudentId { get; set; }
        public Guid CourseId { get; set; }

        
        public virtual ApplicationUser Student { get; set; } = null!;
        public virtual Course Course { get; set; } = null!;
    }
}
