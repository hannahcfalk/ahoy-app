const express = require('express');
const cors = require('cors');
const Axios = require('axios');
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('hello world')
});

app.post("/input", (req, res) => {
	let userInput = req.body.input;
	res.send({"stringLength": userInput.length});
})

app.listen(process.env.PORT || PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});