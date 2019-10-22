import React from 'react'
// components
import Modal from './components/Modal'
// styles
import './App.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h3>Get to coding</h3>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <a
                    className="App-link"
                    href="https://github.com/facebook/create-react-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Built with create-react-app v 3.1.0
                </a>
                <a
                    className="App-link"
                    href="https://github.com/testing-library/react-testing-library"
                >
                    Learn react-testing-library
                </a>
                <br />
                <br />
                <br />
                <h2>New Project?</h2>
                <p>Setup Instructions</p>
                <h3>Redux?</h3>
                <ul className="App-list">
                    <li>
                        <a className="App-link" href="https://prezi.com/view/g5jDJi9duzqIMgToKoTu/">
                            John and Milu&apos;s talk on Redux (2019)
                        </a>
                    </li>
                    <li>
                        <a className="App-link" href="https://redux.js.org/">
                            Learn why redux is kewl
                        </a>
                    </li>
                    <li>
                        <a className="App-link" href="https://react-redux.js.org/">
                            Here are the docs for react bindings with redux
                        </a>
                    </li>
                </ul>
                <h3>
                    Looking for a quick example? Download the{' '}
                    <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd">
                        Redux developer tools
                    </a>
                    , Open your chrome developer tools (right-click + inspect), click the Redux tab,
                    and open and close the modal. Click on the actions, look at the state, payload,
                    and play through the time line of events.
                </h3>
                <Modal />
            </header>
        </div>
    )
}

export default App
