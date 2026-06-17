import Home from "../components/Home";

export default function HomePage() {
  return (
    <>
      <div className="sr-only">
        <h1>Nikolas Wijaya — Frontend Developer</h1>
        <p>
          Frontend Developer specializing in React, Next.js, and TypeScript.
          Based in Indonesia.
        </p>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Styled Components</li>
        </ul>
      </div>

      {/* Tavern component kamu tetap normal di bawah */}
      <Home />
    </>
  );
}
