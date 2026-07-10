import { useEffect, useState } from 'react'
import profileImg from './assets/profile.jpg'
import movieChatImg from './assets/imdb-moviechat.jpg'
import './App.css'

function getInitialTheme() {
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="page">
      <nav>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>

      <header>
        <div className="profile">
          <img
            className="avatar"
            src={profileImg}
            alt="Andy Hoskins"
            width="96"
            height="96"
          />
          <div className="profile-text">
            <h1>Andy Hoskins</h1>
            <p className="tagline">
              AI engineer specializing in building, fine-tuning, and deploying
              intelligent systems
            </p>
          </div>
        </div>
      </header>

      <main>
        <section>
          <h2>About</h2>
          <ul className="skills" aria-label="Skills">
            <li className="skill" title="Python">
              <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#3776AB"
                  d="M12 0C5.662 0 5.24.23 5.24 5.174v1.826h6.87v.652H3.728c-2.828 0-4.236 1.7-4.236 4.66 0 2.936 1.54 4.52 4.236 4.52h2.752v-2.16c0-2.46 2.128-4.62 4.644-4.62h6.87c2.62 0 4.756-1.206 4.756-4.52V5.174C22.75.23 19.462 0 12 0zm-3.256 2.06c.797 0 1.442.65 1.442 1.45 0 .797-.645 1.448-1.442 1.448-.795 0-1.442-.65-1.442-1.448 0-.8.647-1.45 1.442-1.45z"
                />
                <path
                  fill="#FFD43B"
                  d="M12 24c6.338 0 6.76-.23 6.76-5.174v-1.826h-6.87v-.652h8.382c2.828 0 4.236-1.7 4.236-4.66 0-2.936-1.54-4.52-4.236-4.52h-2.752v2.16c0 2.46-2.128 4.62-4.644 4.62H6.006c-2.62 0-4.756 1.206-4.756 4.52v2.358C1.25 23.77 4.538 24 12 24zm3.256-2.06c-.797 0-1.442-.65-1.442-1.45 0-.797.645-1.448 1.442-1.448.795 0 1.442.65 1.442 1.448 0 .8-.647 1.45-1.442 1.45z"
                />
              </svg>
              <span>Python</span>
            </li>
            <li className="skill" title="PyTorch">
              <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#EE4C2C"
                  d="M12.005 0 4.973 7.035a9.239 9.239 0 0 0 0 13.027c3.578 3.584 9.375 3.584 12.963 0a9.239 9.239 0 0 0 0-13.027l-1.693 1.696a6.837 6.837 0 0 1 0 9.64 6.837 6.837 0 0 1-9.596 0 6.837 6.837 0 0 1 0-9.64l7.351-7.358zm1.723 3.933-1.696 1.692 1.696 1.69a2.37 2.37 0 1 0 0-3.382z"
                />
              </svg>
              <span>PyTorch</span>
            </li>
            <li className="skill" title="Hugging Face">
              <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10.5" fill="#FFD21E" />
                <circle cx="8.6" cy="10.4" r="1.35" fill="#1a1a1a" />
                <circle cx="15.4" cy="10.4" r="1.35" fill="#1a1a1a" />
                <path
                  fill="#1a1a1a"
                  d="M7.5 14.3c.3 1.8 2.1 3.4 4.5 3.4s4.2-1.6 4.5-3.4c.1-.4-.3-.8-.7-.8H8.2c-.4 0-.8.4-.7.8z"
                />
              </svg>
              <span>Hugging Face</span>
            </li>
          </ul>
          <p>
            I&apos;m an aspiring AI Engineer, I currently work with PyTorch,
            HuggingFace, LangChain and the OpenAI API, with a particular
            interest in Supervised-FineTuning and Prompt Engineering to shape
            model behavior and improve output quality.
          </p>
        </section>

        <section>
          <h2>Projects</h2>
          <ul className="projects">
            <li className="project-card">
              <a
                className="project-image-link"
                href="https://github.com/Andrew-Hoskins/IMDB-MovieChat-RAG"
                target="_blank"
                rel="noreferrer"
                tabIndex={-1}
                aria-hidden="true"
              >
                <img
                  className="project-image"
                  src={movieChatImg}
                  alt=""
                  width="1200"
                  height="675"
                />
              </a>
              <div className="project-body">
              <div className="project-header">
                <h3 className="project-title">
                  <a
                    href="https://github.com/Andrew-Hoskins/IMDB-MovieChat-RAG"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IMDB MovieChat RAG
                  </a>
                </h3>
                <a
                  className="project-link"
                  href="https://github.com/Andrew-Hoskins/IMDB-MovieChat-RAG"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View IMDB MovieChat RAG on GitHub"
                >
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .26.18.58.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
                    />
                  </svg>
                </a>
              </div>
              <p>
                A retrieval-augmented movie Q&A bot built on IMDB data.
                Embeds film and show descriptions with OpenAI, stores them in
                Pinecone, and answers natural-language questions through a
                LangChain pipeline with GPT-3.5 Turbo.
              </p>
              <ul className="project-tags" aria-label="Technologies">
                <li>LangChain</li>
                <li>OpenAI</li>
                <li>Pinecone</li>
                <li>RAG</li>
                <li>Python</li>
              </ul>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h2>Contact</h2>
          <ul className="links">
            <li>
              <a
                href="mailto:Andrew@ihoskins.co.uk"
                aria-label="Email"
              >
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Andrew-Hoskins"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .26.18.58.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/andrew-hoskins87/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/MrAndyHoskins"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M18.24 2H21l-6.55 7.49L22 22h-6.8l-4.77-6.23L5.1 22H2.33l7-8.01L2 2h6.97l4.31 5.71L18.24 2zm-1.19 18h1.79L7.05 3.9H5.13L17.05 20z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer>&copy; {new Date().getFullYear()} Andy Hoskins</footer>
    </div>
  )
}
