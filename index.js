require("dotenv").config(); // Load environment variables
const api = require("./api");
const port = process.env.PORT;

api.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
