const client = require("./client");

const express = require("express");
const app = express();


app.get("/", (req, res) => {
	client.getAllEvents(null, (err, data) => {
		if (!err) {
			res.status(200).send({
				data
			});
		}
	});
});

app.post("/createEvent", (req, res) => {

	let newEvent = {
		name: req.body.name,
		description: req.body.age,
		location: req.body.address,
		duration: req.body.address,
		lucky_number: req.body.address,
		status: req.body.status
	};

	client.insert(newEvent, (err, data) => {
		if (err) throw err;
		res.status(200).send({
			data,
			message:'Event created successfully'
		});
	});
});

app.post("/updateEvent", (req, res) => {
	let updateEvent = {
		name: req.body.name,
		description: req.body.age,
		location: req.body.address,
		duration: req.body.address,
		lucky_number: req.body.address,
		status: req.body.status
	};

	client.update(updateEvent, (err, data) => {
		if (err) throw err;

		res.status(200).send({
			data,
			message:'Event updated successfully'
		});
	});
});

app.delete("/deleteEvent", (req, res) => {
	client.remove({ id: req.body.eventId }, (err, _) => {
		if (err) throw err;

		res.status(200).send({
			message:'Event deleted successfully'
		});
	});
});

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
	console.log("Client Server listening to port %d", PORT);
});