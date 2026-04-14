using CoursePlatform.Application.DTOs;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CoursePlatform.Application.Interfaces
{
    public interface ICourseService
    {
        Task<IEnumerable<CourseDto>> GetAllCoursesAsync();
        Task<CourseDto?> GetCourseByIdAsync(Guid id);
        Task<CourseDto> CreateCourseAsync(CreateCourseDto courseDto, Guid instructorId);
        Task UpdateCourseAsync(Guid id, CreateCourseDto courseDto);
        Task DeleteCourseAsync(Guid id);
    }
}
