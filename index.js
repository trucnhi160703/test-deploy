const express = require('express');
const app = express();
const router = require('../test-deploy/routes');
const PORT = process.env.PORT || 5050;

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
});