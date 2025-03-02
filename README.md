# GitHub Issues Viewer - lakeFS

**A Single Page Application (SPA) for viewing GitHub issues of the `lakeFS` project.**  
This app displays **issue numbers and titles**, allows expanding an issue for more details, and supports **pagination for browsing multiple pages**.

---

##  **Features**
Fetches and displays **GitHub issues** dynamically.  
Displays the **issue number** alongside the title.  
**Expand button** to reveal full issue details.  
**Pagination** to navigate between pages.  
**Uses GitHub API with authentication** to avoid rate limits.  
Built with **React (frontend) and Node.js (backend)** using Axios for API calls.  

---

## **Technologies Used**
- **Frontend:** React.js, Axios, CSS  
- **Backend:** Node.js, Express.js  
- **API:** GitHub REST API v3  
- **Database:** None (fetches live data from GitHub)  

---

## **Installation & Setup**
### **Clone the repository**
```bash
git clone https://github.com/your-username/github-issues-viewer.git
cd github-issues-viewer

## **Install and Start the Backend**
cd server
npm install

Run the server:
node index.js

Install and Start the Frontend
cd ../client
npm install

Run the client:
npm start

## **Using GitHub Token (Avoid API Rate Limits)**
To prevent 403 Forbidden errors due to API rate limits, use a GitHub Personal Access Token.

Generate a GitHub Token:
Go to GitHub Developer Settings.
Click "Generate new token (classic)".
Select public_repo to allow issue data fetching.
Generate the token and copy it.
Configure .env File

Inside the client/ folder, create a .env file and add:
REACT_APP_GITHUB_TOKEN=your_token_here
(Replace your_token_here with your actual GitHub token)

Restart the client after updating the .env file:
npm start
