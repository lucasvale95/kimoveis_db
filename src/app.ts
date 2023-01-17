import "reflect-metadata";
import express from "express";
import "express-async-errors";
import userRoutes from "./routes/users.routes";
import sessionRoutes from "./routes/sessions.routes";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import categoriesRoutes from "./routes/categories.routes";
import propertiesRoutes from "./routes/properties.routes";
import schedulesRoutes from "./routes/schedules.routes";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/categories", categoriesRoutes);
app.use("/properties", propertiesRoutes);
app.use("/schedules", schedulesRoutes);

app.use(handleErrorMiddleware);

// app.listen(3333, () => {
//   console.log("Server running in port 3333");
// });

export default app;
