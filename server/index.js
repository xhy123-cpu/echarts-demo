let express = require('express')
let app = express()
const cors = require('cors');

let chartOne = require('./router/one.js')
let chartTwo = require('./router/two.js')
let chartThree = require('./router/three.js')
let chartFour = require('./router/four.js')
let chartMap = require('./router/map.js')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next()
})
app.use('/one', chartOne)
app.use('/two', chartTwo)
app.use('/three', chartThree)
app.use('/four', chartFour)
app.use('/map', chartMap)
app.use(cors({
    origin: '*'
}));

app.listen(8888)

