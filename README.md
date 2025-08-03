<div >
    <h1>Postly – A Mini LinkedIn-like Community Platform</h1>
    <p>Postly is a simplified <strong>LinkedIn-like platform</strong> where users can register, log in, create posts, and view profiles. It focuses on creating a small but functional community platform with a clean and responsive UI.</p>
    <h2>Features</h2>
    <h3>1. User Authentication</h3>
    <ul>
      <li>Register/Login using <strong>Email & Password</strong></li>
      <li>Profile with <strong>Name, Email, and Bio</strong></li>
    </ul>
    <h3>2. Public Post Feed</h3>
    <ul>
      <li>Create and view posts (text + image)</li>
      <li>Home feed displaying posts with author’s name and timestamp</li>
    </ul>
    <h3>3. Profile Page</h3>
    <ul>
      <li>View a user’s profile with their information</li>
      <li>See all posts created by the user</li>
    </ul>
    <h2>Tech Stack Used</h2>
    <h3>Frontend:</h3>
    <ul>
      <li><strong>React.js</strong> – Component-based, fast rendering</li>
      <li><strong>Chakra UI</strong> – Modern & responsive UI components</li>
      <li><strong>Axios</strong> – For API calls</li>
    </ul>
    <h3>Backend:</h3>
    <ul>
      <li><strong>Node.js (Express)</strong> – REST API handling</li>
      <li><strong>JWT</strong> – Secure authentication</li>
      <li><strong>Bcrypt</strong> – Password hashing</li>
    </ul>
    <h3>Database:</h3>
    <ul>
      <li><strong>MongoDB (Mongoose)</strong> – Storing users, posts, likes, and comments</li>
    </ul>
    <h3>Deployment:</h3>
    <ul>
      <li><strong>Frontend:</strong> Vercel</li>
      <li><strong>Backend:</strong> Vercel</li>
    </ul>
    <h2>Setup Instructions</h2>
    <h3>1. Clone the Repository</h3>
    <pre><code>git clone https://github.com/priyankr1/Postly.git
cd postly
</code></pre>
    <h3>2. Setup Backend</h3>
    <pre><code>cd server
npm install
</code></pre>
    <p>Create a <code>.env</code> file inside the <strong>server</strong> folder and add:</p>
    <pre><code>PORT=5000
MONGO_URI=your_mongo_db_connection
JWT_SECRET=your_jwt_secret
</code></pre>
    <p>Run the backend:</p>
    <pre><code>npm start</code></pre>
    <h3>3. Setup Frontend</h3>
    <pre><code>cd client
npm install
</code></pre>
    <p>Create a <code>.env</code> file inside <strong>client</strong> folder:</p>
    <pre><code>REACT_APP_API_URL=http://localhost:5000
</code></pre>
    <p>Run the frontend:</p>
    <pre><code>npm start</code></pre>
    <h3>4. Video Walkthrough</h3>
    <p>Watch this short video to understand project setup and usage:  
    <a href="YOUR_GOOGLE_DRIVE_LINK" target="_blank"><strong>Google Drive Setup Video</strong></a></p>
    <h2>Demo Login Credentials (for Testing)</h2>
    <p><strong>Email:</strong> demo@postly.com<br>
    <strong>Password:</strong> demo123</p>
    <h2>Extra Features</h2>
    <ul>
      <li><strong>Like & Comment</strong> system on posts</li>
      <li><strong>Responsive UI</strong> for both desktop & mobile</li>
      <li><strong>Protected routes</strong> for logged-in users</li>
    </ul>
    <h2>Live Demo & Repository</h2>
    <p><strong>Live URL:</strong> <a href="https://postly-l4xj.vercel.app/" target="_blank">https://postly-l4xj.vercel.app/</a></p>
    <p><strong>GitHub Repo:</strong> <a href="https://github.com/priyankr1/Postly" target="_blank">https://github.com/priyankr1/Postly</a></p>
  </div>
