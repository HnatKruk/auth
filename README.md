# AUTH
AUTH is a project that was created during one of the many web development courses. I want to point out right away that this is not my own product, but I believe that study, practice and repetition are excellent approaches to the learning process.
The main goal of this project is to learn and work with Node, Express, MongoDB and improve your knowledge in these technologies. I want to continue to improve my skills in web development and grow from a Fronted specialist to a Full Stack
I believe that every stage of this project contributes to my professional growth, and I am open to feedback and improvements. This is another step towards development and self-improvement.

Unfortunately I haven't been able to deploy it, but I can demo it on my local computer if needed. I am also open to help if you know how to deploy this stack

## Technologies
- HTML
- JavaScript, TypeScript
- React, Mobx
- Nodejs, Express
- Mongodb, Mongoose, Cookie-Parser
- JSONWebToken, Nodemailer
- Third-party libraries: Axios, Bcrypt

## Functionality
- Registration and Authentication
- Authorization (unauthenticated users have limited functionality)
- Account activation using email
- Working with Access and Refresh tokens

## Running Project
1. **Clone the Repository:**
   ```bash
   https://github.com/HnatKruk/auth.git
2. **Connect Gmail and MongoDB to your app**
- Paste connection link to MongoDB in variable DB_URL in .env file.
*You can use MongoDB Compass or MongoDB Atlas.
- Paste email from which you want to send activation letters in variable SMTP_USER in .env file
- Paste password to application Nodemailer in variable SMTP_PASSWORD in .env file.
*You can generate it by going to the link <a href="https://myaccount.google.com/security" target="_blank">https://myaccount.google.com/security</a> in the section "Two-step verification" > "App passwords"
**"Two-step verification" must be enabled for your account
3. **Navigate to the Server Directory:**
    ```bash
   cd server
4. **Install Dependencies:** *you need to have Node.js version 16.x or higher installed.
    ```bash
   npm install
5. **Start the Development Server:**
    ```bash
   npm run dev
   ```
    The server will start on http://localhost:4000 and you will see a message about this
6. **Navigate to the Client Directory:**
    ```bash
   cd client
3. **Install Dependencies:** *you need to have Node.js version 16.x or higher installed.
    ```bash
   npm install
4. **Start the Development Server:**
    ```bash
   npm run start
   ```
5. **Explore the AUTH App:**
Open your web browser and go to http://localhost:3000 to explore and interact with auth app.
## Contacts
You can contact me using:
- Email: hnatkivpublic@gmail.com
- LinkedIn: <a href="https://www.linkedin.com/in/hnatkivtaras/" target="_blank">https://www.linkedin.com/in/hnatkivtaras/</a>
