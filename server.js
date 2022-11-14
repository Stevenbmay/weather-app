import express from "express";
import userRoutes from "./server/routes/user.routes";
import passport from "./server/config/passport.conf";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static(__dirname + "/build"));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use("/api/users", userRoutes);

app.get("*", (req, res) => {
    return res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, () => console.log(`Backend listening on port: ${PORT}`));