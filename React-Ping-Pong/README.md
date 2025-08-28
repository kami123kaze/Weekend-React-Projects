# React Ping Pong 

An interactive **Ping Pong game built with React** — showcasing custom game loop logic, collision detection, score handling  and a sepration of UI from any game Logic inside a React environment.

This project goes beyond a simple toy example. While initially meant to be part of my "48-hour projects" repository, the scope grew into something more **intermediate-level**, as the gameplay, animations,state management and sepration of concerns required careful thought.

---

##  Features
- **Pure React Implementation** — no external game libraries, just React + JavaScript.
- **Custom Game Loop** with `requestAnimationFrame`.
- **Collision Detection** between ball and paddles.
- **Score Tracking** with reset logic.
- **Separation of Concerns** — UI and game logic were kept as decoupled as possible.

---

##  Challenges & Learnings
- Started with a **setState-based prototype**, which quickly became unmanageable due to constant state updates inside the game loop.
- Transitioned to using **refs and mutable objects** for performance, but that brought **immense difficulty** in managing resets, side effects, and synchronization with React's lifecycle.
- Learned how to **balance React’s declarative nature with imperative game logic**.
- Faced challenges in **structuring logic vs. UI** — but iterated until the code became maintainable.

---

## Why This Project Matters
This isn’t just a "Hello World" React app. It demonstrates:
- Handling **real-time updates** in a React environment.
- Designing around **React’s rendering model** to keep performance smooth.
- A good example of **where React alone works and where it fights you**.

For me, this project was an important step from basic apps into **intermediate React engineering** — where you’re forced to design systems, not just components.

---

##  Tech Stack
- React
- JavaScript (ES6+)
- TailwindCSS (for styling)

---

##  Getting Started
```bash
# Clone this repo
git clone https://github.com/your-username/react-ping-pong.git

# Navigate into project
cd react-ping-pong

# Install dependencies
npm install

# Run the dev server
npm run dev
