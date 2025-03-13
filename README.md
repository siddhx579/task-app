# NextTask

NextTask is a modern and advanced task management web application built with **Next.js**, **Prisma**, and **Clerk** authentication. It helps users manage tasks efficiently with a clean and intuitive UI.

## Features

- 🔒 **Authentication** using Clerk
- ✅ **Task Creation, Update, and Deletion**
- 📅 **Task Status Management** (Starting, In Progress, Done)
- 🖥️ **Responsive UI** using Tailwind CSS and Shadcn
- 📊 **Database Management** with Prisma and PostgreSQL

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, Shadcn
- **Backend:** Next.js API Routes, Prisma ORM
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Clerk
- **Deployment:** Vercel

## Installation

### Prerequisites
- Node.js (>= 16)
- PostgreSQL database
- Prisma CLI (`npm install -g prisma`)

### Steps

1. **Clone the Repository**
   ```sh
   git clone https://github.com/siddhx579/task-app.git
   cd task-app
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add:
   ```env
   DATABASE_URL= Your-database-url-of-supabase
   DIRECT_URL= Your-direct-url-of-supabase
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= Your-clerk-publishable-key
   CLERK_SECRET_KEY= Your-clerk-secret-key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   ```

4. **Run Prisma Migrations**
   ```sh
   npx prisma migrate dev --name init
   ```

5. **Start the Development Server**
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

## Deployment

### Deploying on Vercel
1. Push the project to GitHub.
2. Connect the repository to **Vercel**.
3. Set environment variables in Vercel.
4. Ensure Prisma Client is generated during build:
   - Add the following in **Vercel Build Command**:
     ```sh
     npm run build && npx prisma generate
     ```
5. Deploy the project.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the [**MIT License**](LICENSE).

---

**NextTask** - Manage Your Tasks Efficiently 🚀
**⭐ If you like this project, don't forget to give it a star on GitHub! ⭐**

