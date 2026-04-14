using CoursePlatform.Core.Entities;
using CoursePlatform.Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Security.Claims;
using System.Threading.Tasks;

namespace CoursePlatform.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReviewsController : ControllerBase
    {
        private readonly IGenericRepository<Review> _reviewRepo;
        private readonly IUnitOfWork _unitOfWork;

        public ReviewsController(IGenericRepository<Review> reviewRepo, IUnitOfWork unitOfWork)
        {
            _reviewRepo = reviewRepo;
            _unitOfWork = unitOfWork;
        }

        [HttpGet("course/{courseId}")]
        public async Task<IActionResult> GetReviewsByCourse(Guid courseId)
        {
            var reviews = await _reviewRepo.FindAsync(r => r.CourseId == courseId);
            return Ok(reviews);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateReview([FromBody] Review review)
        {
            var userIdStr = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (!Guid.TryParse(userIdStr, out var studentId)) return Unauthorized();

            review.StudentId = studentId;
            review.ReviewDate = DateTime.UtcNow;

            await _reviewRepo.AddAsync(review);
            await _unitOfWork.CompleteAsync();
            return Ok(review);
        }
    }
}
