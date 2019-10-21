import React from 'react';
// components
import Modal from 'components/Modal';
// styles
import './app/App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h3>Get to coding</h3>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
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
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/testing-library/react-testing-library"
                >
                    Learn react-testing-library
                </a>
                <br />
                <br />
                <br />
                <h2>New Project?</h2>
                <p>Setup Instructions</p>
                <ul>
                    <li>
                        <a
                            className="App-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://docs.google.com/document/d/1cxsq3DjkTxNpKUrZs6eHBcaEr0l6m9ysKwy0iB69Dn4/edit#heading=h.w8yjafx3qtvx"
                        >
                            Generate SonarQube project info
                        </a>
                    </li>
                    <li>
                        <a
                            className="App-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://expressway.mile-two.com/"
                        >
                            Get components from Mile Two Expressway
                        </a>
                    </li>
                    <li>
                        <a
                            className="App-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://gitlab.com/mile-two/mile-two-resources/tree/master"
                        >
                            Add and Edit merge request and issue templates for your repo
                        </a>
                    </li>
                </ul>
                <h3>Redux?</h3>
                <ul>
                    <li>
                        {' '}
                        <a className="App-link" target="_blank" rel="noopener noreferrer" href="https://redux.js.org/">
                            Learn why redux is kewl
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        {' '}
                        <a
                            className="App-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://react-redux.js.org/"
                        >
                            Here are the docs for react bindings with redux
                        </a>
                    </li>
                </ul>
                <h3>
                    Looking for a quick example? Download the{' '}
                    <a
                        href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux developer tools
                    </a>
                    , Open your chrome developer tools (right-click + inspect), click the Redux tab, and open and close
                    the modal. Click on the actions, look at the state, payload, and play through the time line of
                    events.
                </h3>
                <Modal />
            </header>
        </div>
    );
}

export default App;
