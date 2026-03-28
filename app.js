const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;
const telegramAPI = 'https://api.telegram.org/bot8758575192:AAEwz_kqGzeJ4CAlEH2tAI8d_NaMYeATSCU';

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
