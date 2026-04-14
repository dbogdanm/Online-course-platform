# LearnPremium - Online Course Platform

A modern, full-stack online course platform built with **ASP.NET Core 10** and **Angular 19**. This application features a premium UI design and a robust distributed architecture, allowing instructors to create content and students to browse and enroll in professional courses.

##  Features

- **Premium UI/UX:** Clean, modern interface built with custom CSS, featuring a responsive grid system and professional color palette.
- **Course Management:** Full CRUD operations for courses, including categories, pricing, and instructor associations.
- **Authentication:** Secure JWT-based authentication with ASP.NET Core Identity.
- **Student Dashboard:** Personalized "My Courses" view to track learning progress.
- **Instructor Portal:** Dedicated area for creating and managing educational content.
- **Relational Database:** Powered by PostgreSQL with Entity Framework Core Migrations.

## Tech Stack

### Backend
- **Framework:** .NET 10 (ASP.NET Core Web API)
- **Database:** PostgreSQL
- **ORM:** Entity Framework Core (Code First)
- **Security:** ASP.NET Core Identity + JWT Bearer Authentication
- **Architecture:** Clean Architecture (Core, Infrastructure, Application, API)

### Frontend
- **Framework:** Angular 19 (Standalone Components)
- **Styling:** Custom CSS with CSS Variables (Premium Theme)
- **State Management:** RxJS
- **Icons:** Native Emoji Primitives

##  Getting Started

### Prerequisites
- .NET 10 SDK
- Node.js (v24+) & npm
- Docker (for PostgreSQL)

### 1. Database Setup
The easiest way to start the database is using the included Docker Compose file:
```bash
docker-compose up -d
