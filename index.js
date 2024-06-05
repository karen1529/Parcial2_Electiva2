const express = require('express');
const mongoose = require('mongoose');
const teamRoutes = require('./routes/teamRoutes');
const avellaPlayerRoutes = require('./routes/avellaPlayerRoutes');

const app = express();
const port = process.env.PORT || 3000;

const dbURI = "mongodb+srv://jairouptc:nyxmeR-zusjoz-8zubda@cluster0.9lfyrk5.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(port, () => console.log(`Server running on port ${port}`)))
    .catch((err) => console.log(err));

app.use(express.json());
app.use('/teams', teamRoutes);
app.use('/avellaPlayers', avellaPlayerRoutes);
