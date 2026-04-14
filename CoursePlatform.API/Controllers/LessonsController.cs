using CoursePlatform.Core.Entities;
using CoursePlatform.Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace CoursePlatform.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LessonsController : ControllerBase
    {
        private readonly IGenericRepository<Lesson> _lessonRepo;
        private readonly IUnitOfWork _unitOfWork;

        public LessonsController(IGenericRepository<Lesson> lessonRepo, IUnitOfWork unitOfWork)
        {
            _lessonRepo = lessonRepo;
            _unitOfWork = unitOfWork;
        }

        [HttpGet("course/{courseId}")]
        public async Task<IActionResult> GetLessonsByCourse(Guid courseId)
        {
            var lessons = await _lessonRepo.FindAsync(l => l.CourseId == courseId);
            return Ok(lessons);
        }

        [HttpPost]
        [Authorize(Roles = "Admin,Instructor")]
        public async Task<IActionResult> CreateLesson([FromBody] Lesson lesson)
        {
            await _lessonRepo.AddAsync(lesson);
            await _unitOfWork.CompleteAsync();
            return Ok(lesson);
        }
    }
}
