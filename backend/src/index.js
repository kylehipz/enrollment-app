const app = require("./app");

const { port } = process.env;

app.listen(port, () => console.log(`Server started on port ${port}`));
