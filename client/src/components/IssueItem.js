import React, { useState } from 'react';

const IssueItem = ({ issue }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <li>
            <button onClick={() => setExpanded(!expanded)}>
                {expanded ? '-' : '+'}
            </button>
            <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
                #{issue.number} - {issue.title}
            </a>
            {expanded && <p>{issue.body || "No description available."}</p>}
        </li>
    );
};

export default IssueItem;
