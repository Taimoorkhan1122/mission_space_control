const express = require("express");
const cors = require('cors');
const path  = require('path')
const morgan = require('morgan')

const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

const app = express();

//  security middlewares
app.use(cors({
    origin: "http://localhost:3000"
}))

/* disable cache */
// app.disable('etag')

app.use(morgan('common'))

// built in middlewares
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(express.json());

app.use('/planets',planetsRouter)
app.use('/launches',launchesRouter)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})


module.exports = app;