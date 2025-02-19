const express = require('express');
const app = express();
const { fileOperation } = require('./utils');

app.get('/remove', (res, req) => {
  const result = fileOperation('mockData.json', function(data) {
    return data.filter(item => item.id !== 3);
  })
  req.send(result);
})

app.listen(8080, () => {
  console.log('Server is running on port 8080');
})