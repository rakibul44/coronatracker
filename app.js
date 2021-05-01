const express = require('express');
const app = express();
const cors = require('cors');

// Allow CORS Origin *
app.use(cors());

// Import Routes
const homeRoutes = require('./routes/home.routes');
const errorRoutes = require('./routes/error.routes');
const coronaLive = require('./routes/coronalive.routes');

// Implement Routes
app.use('/', homeRoutes);
app.use('/api/corona', coronaLive);
app.use('**', errorRoutes);


// Port To Listen
const port = 3000 || process.env.PORT;
app.listen(port, () => console.log(`Server Running Port: ${port}`));
// server/api/corona/livetracker