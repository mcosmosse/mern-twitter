const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require("./models/User");
const bodyParser = require("body-parser");

mongoose
    .connect(db, { useNewUrlParser: true})
    .then(() => console.log("Connect to mongoDB"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

// two above lines respond to json requests

app.get("/", (req, res) => {
    // const user = new User({
    //     handle: "isaac",
    //     email: "isaac@binding.org",
    //     password: "momsknife"
    // });
    // user.save();
    res.send("AAAAAAAAAA")
});

app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));