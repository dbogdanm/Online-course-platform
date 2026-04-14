using System;

namespace CoursePlatform.Core.Entities
{
    public class Enrollment
    {
        public Guid Id { get; set; }
        public DateTime EnrollmentDate { get; set; } = DateTime.UtcNow;
        public DateTime? CompletionDate { get; set; }
        public bool IsCompleted { get; set; }

        
        public Guid StudentId { get; set; }
        public Guid CourseId { get; set; }

        
        public virtual ApplicationUser Student { get; set; } = null!;
        public virtual Course Course { get; set; } = null!;
    }
}
