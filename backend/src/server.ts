import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const port = Number(process.env.PORT || 4000);
app.listen(port, () => console.log(`Backend running on http://localhost:${port}`));