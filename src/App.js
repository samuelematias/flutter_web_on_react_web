import React from 'react';
import logo from './logo.svg';
import './App.css';
import Iframe from 'react-iframe';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<div
					className="content"
					dangerouslySetInnerHTML={{
						__html: `<html>
  <iframe src="https://samuelematias.github.io/flutter_web_splash_loading/"><iframe>
</html>`,
					}}
				></div>
				<Iframe
					url="http://www.youtube.com/embed/DWcJFNfaw9c"
					width="450px"
					height="450px"
					id="myId"
					className="myClassname"
					display="initial"
					position="relative"
				/>
				<Iframe
					url="https://reverent-saha-e7982c.netlify.app/#/"
					width="450px"
					height="450px"
					id="myId"
					className="myClassname"
					display="initial"
					position="relative"
				/>
			</header>
		</div>
	);
}

export default App;
