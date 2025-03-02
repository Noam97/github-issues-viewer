import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IssueItem from './IssueItem';
import './style/IssueList.css';

const IssueList = () => {
    const [issues, setIssues] = useState([]);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(false);
    const perPage = 20;

    useEffect(() => {
        const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
        const fetchIssues = async () => {
            try {
                const response = await axios.get('https://api.github.com/repos/treeverse/lakeFS/issues', {
                    params: {
                        page: page,
                        per_page: perPage,
                        sort: 'created',
                        direction: 'desc'
                    },
                    headers: {
                        'Accept': 'application/vnd.github.v3+json',
                        'Authorization': `token ${GITHUB_TOKEN}`

                    }
                });

                setIssues(response.data);

                const linkHeader = response.headers.link;
                setHasNextPage(linkHeader && linkHeader.includes('rel="next"'));
            } catch (error) {
                console.error('Error fetching issues:', error);
            }
        };

        fetchIssues();
    }, [page]);

    return (
        <div>
           <ul>
                {issues.map(issue => (
                    <IssueItem key={issue.id} issue={issue} />
                ))}
            </ul>

            <div>
                <button className="btn" disabled={page === 1} onClick={() => setPage(page - 1)}>
                    ← Previous
                </button>
                <span> Page {page} </span>
                <button className="btn" disabled={!hasNextPage} onClick={() => setPage(page + 1)}>
                    Next →
                </button>
            </div>
        </div>
    );
};

export default IssueList;
