const express = require('express');
const cors = require('cors');
const issuesRoutes = require('./routes/issues'); 

const app = express();
app.use(cors());

app.use('/api/issues', issuesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
