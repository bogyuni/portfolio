// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import portfolioData from './assets/portfolio.json';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
			<main className='main'>
				<h1>PortFolio List</h1>
				{portfolioData.map((item, index) => (
					<section className='year-section' key={index}>
						<h2>{item.year}</h2>
						<ul>
							{item.projects.map((project, idx) => (
								<li key={idx}>
									<a href={project.link} target='_blank' rel="noopener noreferrer">{project.title}</a>
									<p>{project.description}</p>
									<p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
								</li>
							))}
						</ul>
					</section>
				))}
			</main>
    </>
  )
}

export default App
