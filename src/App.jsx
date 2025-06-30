import { useState, useEffect } from 'react';
import Business from './pages/Business';
import NonCommercial from './pages/NonCommercial';
import AOS from 'aos';
import './App.css'
import 'aos/dist/aos.css';
// import './assets/css/aos.css'; // If you have a custom AOS CSS file

function App() {
	const [activeTab, setActiveTab] = useState('business');

	useEffect(() => {
		AOS.init({
			duration: 400,
			once: true,
			offset: 100,
			easing: 'ease-in-out',
		});
	} , []);

  return (
    <>
			<main className='main'>
				<h1>PortFolio List</h1>
				<nav className='tab-nav'>
					<button
						className={activeTab === 'business' ? 'active' : ''}
						onClick={() => setActiveTab('business')}
					>
						업체 작업물
					</button>
					<button 
						className={activeTab === 'nonCommercial' ? 'active' : ''}
						onClick={() => setActiveTab('nonCommercial')}
					>
						개인 작업물
					</button>
				</nav>
        <div className="work-area">
					{activeTab === 'business' && <Business />}
					{activeTab === 'nonCommercial' && <NonCommercial />}
        </div>
			</main>
    </>
  )
}

export default App
