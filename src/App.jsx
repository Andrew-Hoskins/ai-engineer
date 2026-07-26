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
  const [visitors, setVisitors] = useState(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    let cancelled = false
    fetch(
      'https://api.counterapi.dev/v1/andyhoskins-portfolio/visitors/up'
    )
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        if (!cancelled && typeof data.count === 'number') {
          setVisitors(data.count)
        }
      })
      .catch(() => {
        /* counter service unavailable — silently skip */
      })
    return () => {
      cancelled = true
    }
  }, [])

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
          <h3 className="section-subtitle">Skills</h3>
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
            <li className="skill" title="scikit-learn">
              <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#F7931E"
                  d="M15.601 5.53c-1.91.035-3.981.91-5.63 2.56-2.93 2.93-2.083 8.53-1.088 9.525.805.804 6.595 1.843 9.526-1.088a9.74 9.74 0 0 0 .584-.643c.043-.292.205-.66.489-1.106a1.848 1.848 0 0 1-.537.176c-.144.265-.37.55-.676.855-.354.335-.607.554-.76.656a.795.795 0 0 1-.437.152c-.35 0-.514-.308-.494-.924-.22.316-.425.549-.612.7a.914.914 0 0 1-.578.224c-.194 0-.36-.09-.496-.273a1.03 1.03 0 0 1-.193-.507 4.016 4.016 0 0 1-.726.583c-.224.132-.47.197-.74.197-.3 0-.543-.096-.727-.288a.978.978 0 0 1-.257-.524v.004c-.3.276-.564.48-.79.611a1.295 1.295 0 0 1-.649.197.693.693 0 0 1-.571-.275c-.145-.183-.218-.43-.218-.739 0-.464.101-1.02.302-1.67.201-.65.445-1.25.733-1.797l.842-.312a.21.21 0 0 1 .06-.013c.063 0 .116.047.157.14.04.095.061.221.061.38 0 .451-.104.888-.312 1.31-.207.422-.532.873-.974 1.352-.018.23-.027.388-.027.474 0 .193.036.345.106.458.071.113.165.169.282.169a.71.71 0 0 0 .382-.13c.132-.084.333-.26.602-.523.028-.418.187-.798.482-1.142.324-.38.685-.569 1.08-.569.206 0 .37.054.494.16a.524.524 0 0 1 .186.417c0 .458-.486.829-1.459 1.114.088.43.32.646.693.646a.807.807 0 0 0 .417-.117c.129-.076.321-.243.575-.497.032-.252.118-.495.259-.728.182-.3.416-.544.701-.73.285-.185.537-.278.756-.278.276 0 .47.127.58.381l.677-.374h.186l-.292.971c-.15.488-.226.823-.226 1.004 0 .19.067.285.202.285.086 0 .181-.045.285-.137.104-.092.25-.232.437-.42v.001c.143-.155.274-.32.392-.494-.19-.084-.285-.21-.285-.375 0-.17.058-.352.174-.545.116-.194.275-.29.479-.29.172 0 .258.088.258.265 0 .139-.05.338-.149.596.367-.04.687-.32.961-.842l.228-.01c1.059-2.438.828-5.075-.83-6.732-1.019-1.02-2.408-1.5-3.895-1.471zm4.725 8.203a8.938 8.938 0 0 1-1.333 2.151 1.09 1.09 0 0 0-.012.147c0 .168.047.309.14.423.092.113.206.17.34.17.296 0 .714-.264 1.254-.787-.001.04-.003.08-.003.121 0 .146.012.368.036.666l.733-.172c0-.2.003-.357.01-.474.01-.157.033-.33.066-.517.02-.11.07-.216.152-.315l.186-.216a5.276 5.276 0 0 1 .378-.397c.062-.055.116-.099.162-.13a.26.26 0 0 1 .123-.046c.055 0 .083.035.083.106 0 .07-.052.236-.156.497-.194.486-.292.848-.292 1.084 0 .175.046.314.136.418a.45.45 0 0 0 .358.155c.365 0 .803-.269 1.313-.808v-.381c-.361.426-.623.64-.784.64-.109 0-.163-.067-.163-.2 0-.1.065-.316.195-.65.19-.486.285-.836.285-1.048a.464.464 0 0 0-.112-.319.36.36 0 0 0-.282-.127c-.165 0-.354.077-.567.233-.213.156-.5.436-.863.84.053-.262.165-.622.335-1.08l-.809.156a6.54 6.54 0 0 0-.399 1.074c-.04.156-.07.316-.092.48a7.447 7.447 0 0 1-.49.45.38.38 0 0 1-.229.08.208.208 0 0 1-.174-.082.352.352 0 0 1-.064-.222c0-.1.019-.214.056-.343.038-.13.12-.373.249-.731l.308-.849zm-17.21-2.927c-.863-.016-1.67.263-2.261.854-1.352 1.352-1.07 3.827.631 5.527 1.7 1.701 4.95 1.21 5.527.632.467-.466 1.07-3.827-.631-5.527-.957-.957-2.158-1.465-3.267-1.486zm12.285.358h.166v.21H15.4zm.427 0h.166v.865l.46-.455h.195l-.364.362.428.684h-.198l-.357-.575-.164.166v.41h-.166zm1.016 0h.166v.21h-.166zm.481.122h.166v.288h.172v.135h-.172v.717c0 .037.006.062.02.075.012.013.037.02.074.02a.23.23 0 0 0 .078-.01v.141a.802.802 0 0 1-.136.014.23.23 0 0 1-.15-.043.15.15 0 0 1-.052-.123v-.79h-.141v-.136h.141zm-3.562.258c.081 0 .15.012.207.038.057.024.1.061.13.11s.045.106.045.173h-.176c-.006-.111-.075-.167-.208-.167a.285.285 0 0 0-.164.041.134.134 0 0 0-.06.117c0 .035.015.065.045.088.03.024.08.044.15.06l.16.039a.47.47 0 0 1 .224.105c.047.046.07.108.07.186a.3.3 0 0 1-.052.175.327.327 0 0 1-.152.116.585.585 0 0 1-.226.041c-.136 0-.24-.03-.309-.088-.069-.059-.105-.149-.109-.269h.176c.004.037.01.065.017.084a.166.166 0 0 0 .034.054c.044.043.112.065.204.065a.31.31 0 0 0 .177-.045.139.139 0 0 0 .067-.119.116.116 0 0 0-.038-.09.287.287 0 0 0-.124-.055l-.156-.038a1.248 1.248 0 0 1-.159-.05.359.359 0 0 1-.098-.061.22.22 0 0 1-.058-.083.32.32 0 0 1-.016-.108c0-.096.036-.174.109-.232a.45.45 0 0 1 .29-.087zm1.035 0a.46.46 0 0 1 .202.043.351.351 0 0 1 .187.212.577.577 0 0 1 .023.126h-.168a.256.256 0 0 0-.078-.168.242.242 0 0 0-.17-.06.248.248 0 0 0-.155.05.306.306 0 0 0-.1.144.662.662 0 0 0-.034.224.58.58 0 0 0 .035.214.299.299 0 0 0 .101.135.261.261 0 0 0 .157.048c.142 0 .227-.084.256-.252h.167a.519.519 0 0 1-.065.22.35.35 0 0 1-.146.138.464.464 0 0 1-.216.048.448.448 0 0 1-.246-.066.441.441 0 0 1-.161-.192.703.703 0 0 1-.057-.293c0-.085.01-.163.032-.233a.522.522 0 0 1 .095-.182.403.403 0 0 1 .15-.117.453.453 0 0 1 .191-.04zm.603.03h.166v1.046H15.4zm1.443 0h.166v1.046h-.166zm-5.05.618c-.08 0-.2.204-.356.611-.155.407-.308.977-.459 1.71.281-.312.509-.662.683-1.05.175-.387.262-.72.262-.999a.455.455 0 0 0-.036-.197c-.025-.05-.056-.075-.093-.075zm4.662 1.797c-.221 0-.431.188-.629.563-.197.376-.296.722-.296 1.038 0 .12.029.216.088.29a.273.273 0 0 0 .223.111c.221 0 .43-.188.625-.565.196-.377.294-.725.294-1.043a.457.457 0 0 0-.083-.29.269.269 0 0 0-.222-.104zm-2.848.007c-.146 0-.285.11-.417.333-.133.222-.2.51-.2.866.566-.159.849-.452.849-.881 0-.212-.077-.318-.232-.318Z"
                />
              </svg>
              <span>scikit-learn</span>
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
            <li className="skill" title="Git">
              <svg className="skill-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#F05032"
                  d="M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z"
                />
              </svg>
              <span>Git</span>
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

      <footer>
        &copy; {new Date().getFullYear()} Andy Hoskins
        {visitors !== null && (
          <span className="visitor-count">
            {' · '}
            <span aria-hidden="true">👁️</span>{' '}
            {visitors.toLocaleString()} visitors
          </span>
        )}
      </footer>
    </div>
  )
}
