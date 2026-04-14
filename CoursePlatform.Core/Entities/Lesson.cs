using System;

namespace CoursePlatform.Core.Entities
{
    public class Lesson
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string? VideoUrl { get; set; }
        public int DurationInMinutes { get; set; }
        public int Order { get; set; }

        
        public Guid CourseId { get; set; }

        
        public virtual Course Course { get; set; } = null!;
    }
}
