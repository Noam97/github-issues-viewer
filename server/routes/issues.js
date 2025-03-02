const express = require('express');
const axios = require('axios');
const { GITHUB_API_URL } = require('../config');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const { page = 1, per_page = 25 } = req.query;
        const response = await axios.get(GITHUB_API_URL, {
            params: { page, per_page, sort: 'created', direction: 'desc' },
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching issues:', error.message);
        res.status(500).json({ error: 'Failed to fetch issues' });
    }
});

module.exports = router;
