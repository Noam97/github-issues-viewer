import React from 'react';
import IssueList from './components/IssueList';
import './App.css';


function App() {
    return (
        <div className="App">
            <h1>GitHub Issues for lakeFS</h1>
            <IssueList />
        </div>
    );
}

export default App;
