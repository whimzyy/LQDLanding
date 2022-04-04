import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
