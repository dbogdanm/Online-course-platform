<div align="center">

![Status](https://img.shields.io/badge/Maintained-yes-brightgreen.svg?style=flat-square)
![Platform](https://img.shields.io/badge/Platform-Web-blue.svg?style=flat-square)
![Architecture](https://img.shields.io/badge/Architecture-Clean%20Architecture-informational.svg?style=flat-square)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
<br/>

![.NET](https://img.shields.io/badge/.NET-10-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![ASP.NET Core](https://img.shields.io/badge/ASP.NET_Core-Web_API-5C2D91?style=for-the-badge&logo=dotnet&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-19-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Entity Framework](https://img.shields.io/badge/EF_Core-ORM-6DB33F?style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-black?style=for-the-badge)
![RxJS](https://img.shields.io/badge/RxJS-Reactive-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)

</div>

# LearnPremium - Online Course Platform

A modern, full-stack online course platform built with **ASP.NET Core 10** and **Angular 19**. This application features a premium UI design and a robust distributed architecture, allowing instructors to create content and students to browse and enroll in professional courses.

## Features

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

## Getting Started

### Prerequisites
- .NET 10 SDK
- Node.js (v24+) & npm
- Docker (for PostgreSQL)

### 1. Database Setup
```bash
docker-compose up -d
```

### 2. Backend Setup
```bash
cd CoursePlatform.API
dotnet ef database update --project ..\CoursePlatform.Infrastructure --startup-project .
dotnet run
```

### 3. Frontend Setup
```bash
cd frontend
npm install --legacy-peer-deps
npm start
```

Access the app at `http://localhost:4200`.

## Project Structure
- `CoursePlatform.Core`: Domain entities and repository interfaces.
- `CoursePlatform.Infrastructure`: Data context, EF Migrations, and repository implementations.
- `CoursePlatform.Application`: DTOs, Business Logic, and Services.
- `CoursePlatform.API`: Controllers, Middleware, and JWT Configuration.
- `frontend/`: Angular 19 application.

## Security Note
This project uses a hardcoded JWT key for development purposes. For production environments, always use Environment Variables or Secret Managers.


## License

**Copyright (c) 2026 DINU BOGDAN**

This project is licensed under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---
