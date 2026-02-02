```markdown
🎬 MOVIE REVIEW WEB APP

A full-stack web application that allows users to browse popular movies and manage their own reviews. The app pulls movie data from the **TMDB API** and stores user reviews in a custom **MongoDB** database.

## 🚀 Tech Stack

**Frontend:** HTML5, CSS3, Vanilla JavaScript  
**Backend:** Node.js, Express.js  
**Database:** MongoDB Atlas  
**API:** The Movie Database (TMDB)

---

## 🛠️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### 1. Clone the Repository
Open your terminal (Command Prompt, PowerShell, or Git Bash) and run:

```bash
git clone <YOUR_GITHUB_REPO_LINK_HERE>
cd "Movie Browser"
```

### 2. Backend Setup
Navigate to the backend folder and install dependencies:

```bash
cd Backend
npm install
```

#### Configure Environment Variables
Create a file named `.env` inside the Backend folder. You will need to add your MongoDB connection string here:

```bash
MOVIEREVIEWS_DB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
MOVIEREVIEWS_NS=reviews
PORT=8000
```

### 3. Frontend Setup
The frontend uses the TMDB API. You might need to add your API Key in `script.js` if it's not hardcoded.

---

## 🔑 How to Get API Credentials

### 1. The Movie Database (TMDB) API
This is required to fetch movie titles, posters, and popularity data.

- Create a free account at [TheMovieDB.org](https://www.themoviedb.org/).  
- Go to your account **Settings > API**.  
- Click **Create** and choose "Developer".  
- Copy your API Key (v3 auth).  

Usage: This key is used in your frontend `script.js` file.

### 2. MongoDB Atlas (Database)
This is required to store the reviews.

- Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas).  
- Create a new Cluster (the free tier is fine).  
- Database Access: Create a database user (username and password).  
- Network Access: Whitelist your IP address (or allow access from anywhere `0.0.0.0/0` for development).  
- Connect: Click "Connect" > "Connect your application".  
- Copy the Connection String.  

Usage: Paste this string into your `.env` file (replace `<password>` with your actual password).

---

## 🏃‍♂️ How to Run the App

You need to run the Backend and Frontend simultaneously.

### Step 1: Start the Backend Server
Open a terminal in VS Code:

```bash
cd Backend
npm run dev
```

You should see:  
`listening on port 8000`

### Step 2: Start the Frontend
Since this project uses vanilla HTML/JS, you need a local server to serve the files correctly.

- Open the Frontend folder in VS Code.  
- Open `index.html`.  
- Right-click anywhere in the file and select **"Open with Live Server"**.  

Note: You need the "Live Server" extension by Ritwick Dey installed in VS Code.

---

## ✨ Features
- Browse Movies: See a list of popular movies with posters.  
- Search: Search for specific movies using the search bar.  
- Read Reviews: View all reviews left by users for a specific movie.  
- Add Review: Post your own review with your name.  
- Edit/Delete: Modify or remove your existing reviews.  

---

## 🤝 Contributing
- Fork the repository.  
- Create a new branch (`git checkout -b feature-branch`).  
- Commit your changes.  
- Push to the branch and open a Pull Request.  
```


