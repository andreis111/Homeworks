const cors = require('cors')
const { response } = require('express')
const express = require('express')
const PORT = 8000
const app = express()

app.use(cors())

const cars = {
    'ferrari 296 gts': {
        'generations': 1,
        "first production year": 2022,
        'engines': 'Hybrid, gasoline',
        'image': 'https://s1.cdn.autoevolution.com/images/gallery/ferrari-296-gts-2022-7252_5.jpg'
    },

    'fso 125': {
        'generations': 1,
        "first production year": 1968,
        'engines': 'Gasoline',
        'image': 'https://s1.cdn.autoevolution.com/images/gallery/FSO125-1345_1.jpg'
    },

    'lamborghini urus': {
        'generations': 1,
        "first production year": 2018,
        'engines': 'Gasoline',
        'image': 'https://s1.cdn.autoevolution.com/images/gallery/LAMBORGHINI-Urus-6189_5.jpg'
    },

    'audi e-tron gt quattro': {
        'generations': 2,
        'first production year': 2021,
        'engines': "Electric",
        'image': "https://s1.cdn.autoevolution.com/images/gallery/audi-e-tron-gt-quattro-2021-7015_1.jpg"
    },

    'bmw 8 series coupe': {
        'generations': 2,
        'first production year': 2018,
        'engines': "Gasoline, Diesel",
        'image': 'https://s1.cdn.autoevolution.com/images/gallery/bmw-8-series-coupe-2022-7227_15.jpg'
    },

    'bugatti centodieci': {
        'generations': 1,
        'first production year': 2019,
        'engines': "Gasoline",
        'image': 'https://s1.cdn.autoevolution.com/images/gallery/BUGATTI-Centodieci-6647_16.jpg'
    }
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:carName', (req, res) => {
    const car = req.params.carName.toLowerCase()

    if (cars[car]) {
        res.json(cars[car]);
    } else {
        res.send("Car unknown")
    }



})

app.listen(process.env.PORT || PORT, () => {
    console.log(`SV running ${PORT}`)
})