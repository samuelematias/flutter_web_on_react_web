import React from 'react';
import logo from './logo.svg';
import './App.css';

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
  <iframe id="iframe" src="https://samuelematias.github.io/flutter_web_dart_js/?token=KLASJDOIASNDMOASNXINAOSBA5578&utm_source=samu_ca&id=15&randomNumber=3.14"><iframe>
</html>`,
					}}
				></div>
			</header>
		</div>
	);
}

export default App;
