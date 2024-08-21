const app = require ("./app.js");
const dotenv = require ("dotenv");
const cors = require ("cors");
app.use(cors("*"));
dotenv.config();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
