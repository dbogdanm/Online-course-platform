using CoursePlatform.Application.DTOs;
using CoursePlatform.Application.Interfaces;
using CoursePlatform.Core.Entities;
using CoursePlatform.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoursePlatform.Application.Services
{
    public class CourseService : ICourseService
    {
        private readonly IGenericRepository<Course> _courseRepo;
        private readonly IUnitOfWork _unitOfWork;

        public CourseService(IGenericRepository<Course> courseRepo, IUnitOfWork unitOfWork)
        {
            _courseRepo = courseRepo;
            _unitOfWork = unitOfWork;
        }

        public async Task<IEnumerable<CourseDto>> GetAllCoursesAsync()
        {
            var courses = await _courseRepo.GetAllAsync();
            return courses.Select(c => new CourseDto
            {
                Id = c.Id,
                Title = c.Title,
                Description = c.Description,
                Category = c.Category,
                Price = c.Price,
                InstructorId = c.InstructorId,
                
            });
        }

        public async Task<CourseDto?> GetCourseByIdAsync(Guid id)
        {
            var c = await _courseRepo.GetByIdAsync(id);
            if (c == null) return null;

            return new CourseDto
            {
                Id = c.Id,
                Title = c.Title,
                Description = c.Description,
                Category = c.Category,
                Price = c.Price,
                InstructorId = c.InstructorId
            };
        }

        public async Task<CourseDto> CreateCourseAsync(CreateCourseDto courseDto, Guid instructorId)
        {
            var course = new Course
            {
                Id = Guid.NewGuid(),
                Title = courseDto.Title,
                Description = courseDto.Description,
                Category = courseDto.Category,
                Price = courseDto.Price,
                InstructorId = instructorId,
                CreatedAt = DateTime.UtcNow
            };

            await _courseRepo.AddAsync(course);
            await _unitOfWork.CompleteAsync();

            return new CourseDto
            {
                Id = course.Id,
                Title = course.Title,
                Description = course.Description,
                Category = course.Category,
                Price = course.Price,
                InstructorId = course.InstructorId
            };
        }

        public async Task UpdateCourseAsync(Guid id, CreateCourseDto courseDto)
        {
            var course = await _courseRepo.GetByIdAsync(id);
            if (course == null) return;

            course.Title = courseDto.Title;
            course.Description = courseDto.Description;
            course.Category = courseDto.Category;
            course.Price = courseDto.Price;

            _courseRepo.Update(course);
            await _unitOfWork.CompleteAsync();
        }

        public async Task DeleteCourseAsync(Guid id)
        {
            var course = await _courseRepo.GetByIdAsync(id);
            if (course == null) return;

            _courseRepo.Remove(course);
            await _unitOfWork.CompleteAsync();
        }
    }
}
