# 🤖 AI Interview Preparation Platform

A full-stack **AI-powered interview preparation platform** built with the MERN stack. The application helps users prepare for technical and HR interviews by analyzing resumes, generating personalized questions, conducting AI-powered interviews, and providing intelligent feedback and performance reports.

## 🚀 Features

- 🔐 **Google Authentication** — Secure user login with Google Sign-In.
- 🛡️ **Protected Routes** — Session-aware authentication and secure API access.
- 📄 **Resume Upload & Analysis** — Analyze candidate resumes and extract relevant information.
- 🤖 **AI Question Generation** — Generate personalized interview questions based on:
  - Job role
  - Experience
  - Skills
  - Projects
  - Resume information
- 🎤 **AI-Powered Interviews** — Answer generated interview questions and receive AI-based evaluation.
- 🧠 **AI Feedback** — Get intelligent feedback and suggestions for improving interview performance.
- 📊 **Performance Reports** — Track interview scores, feedback, and overall progress.
- 📚 **Interview History** — Access previous interviews and performance records.
- 💳 **Razorpay Integration** — Secure payment flow with order creation and payment verification.
- 🔌 **11 REST APIs** — Handles authentication, users, resumes, interviews, AI processing, payments, and progress tracking.
- ⚡ **OpenRouter AI Integration** — AI-powered NLP processing with a fallback mechanism for improved reliability.
- 📱 **Responsive Interface** — Designed for a smooth experience across different screen sizes.

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- React Router
- Context API / State Management
- CSS

### Backend
- Node.js
- Express.js
- REST APIs
- JWT / Session-based authentication
- Middleware

### Database
- MongoDB
- Mongoose

### Authentication
- Firebase Google Authentication

### AI
- OpenRouter API
- AI-powered NLP processing

### Payments
- Razorpay

### Deployment
- Render / Cloud Hosting

## 📂 Project Structure

```text
MERN-based-ai-Interview-APP/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── redux/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── middleware/
│   ├── index.js
│   └── package.json
│
└── README.md
```

## 🔄 Application Workflow

```text
User
 │
 ▼
Google Authentication
 │
 ▼
Dashboard
 │
 ├── Upload Resume
 │       │
 │       ▼
 │   Resume Analysis
 │
 ├── Select Interview
 │       │
 │       ▼
 │   AI Question Generation
 │       │
 │       ▼
 │   Answer Questions
 │       │
 │       ▼
 │   AI Evaluation
 │       │
 │       ▼
 │   Feedback & Report
 │
 └── Interview History
         │
         ▼
    Progress Tracking
```

## 🔌 API Architecture

The application uses **11 REST APIs** to connect the React frontend with the Express backend.

The APIs handle major application operations including:

- User authentication
- Current user/session management
- Resume processing
- Interview creation
- AI question generation
- Answer submission
- AI feedback
- Interview history
- User/progress management
- Razorpay order creation
- Payment verification

This demonstrates complete **frontend-backend API orchestration** in a production-style MERN application.

## 🤖 AI Integration

The platform integrates **OpenRouter AI** to provide intelligent interview functionality.

The AI system is used for:

1. Resume-based candidate analysis
2. Personalized interview question generation
3. Answer evaluation
4. Interview feedback
5. Performance analysis

A **fallback mechanism** is implemented to improve reliability when the primary AI processing flow encounters an issue.

## 💳 Payment Integration

The application integrates **Razorpay** for secure credit/payment functionality.

The payment workflow includes:

```text
Create Order
     ↓
Razorpay Checkout
     ↓
Payment
     ↓
Payment Verification
     ↓
Update User Credits
```

## ⚙️ Installation

### Clone the Repository

```bash
git clone <your-repository-url>
cd MERN-based-ai-Interview-APP
```

### Install Client Dependencies

```bash
cd client
npm install
```

### Install Server Dependencies

```bash
cd ../server
npm install
```

### Start the Backend

```bash
npm run dev
```

### Start the Frontend

Open another terminal:

```bash
cd client
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

## 🔑 Environment Variables

Create a `.env` file inside the `server` directory and configure the required credentials:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

OPENROUTER_API_KEY=your_openrouter_api_key

RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

Configure the required Firebase credentials in the client environment according to your Firebase project.

> ⚠️ Never commit API keys, database credentials, or secret keys to GitHub.

## 🎯 Learning Outcomes

This project demonstrates practical experience with:

- Full-stack MERN development
- REST API architecture
- React state management
- Authentication and authorization
- Protected routes
- MongoDB database integration
- AI API integration
- Resume processing
- Payment gateway integration
- Error handling and fallback mechanisms
- Client-server communication
- Cloud deployment
- Responsive frontend development

## 🔮 Future Improvements

- 🎙️ Voice-based AI interviews
- 📹 Video interview simulation
- 📈 Advanced candidate analytics
- 🧑‍💼 Recruiter dashboard
- 📄 Improved resume scoring
- 🌍 Multiple language support
- 🔔 Personalized preparation plans
- 🧠 More advanced AI evaluation metrics

## 👨‍💻 Author

**Lakshya Pratap Singh**
