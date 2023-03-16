const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({}));
app.use(cors());
app.post("/", (req, res) => {
	res.send('Hello World');
}
app.post("/", (req, res) => {
	axios
		.get(req.body.url)
		.then(result => {
			res.json({ data: result.data, url: req.body.url });
		})
		.catch(err => {
			console.log(err.message);
			res.status(404).send("Failed to load: "+req.body.url);
		});
});

app.listen(process.env.PORT || 1234, () => console.log("port = 1234"));
