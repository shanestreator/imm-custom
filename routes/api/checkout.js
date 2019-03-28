const router = require('express')()

const validateShippingInput = require('../validation/validateShipping')

const ShipTo = require('../../models/ShipTo')

// Get shipTo details from database if they exist
// GET /api/checkout/:shippingId
router.get('/:shippingId', async (req, res, next) => {
  try {
    if (!req.params.shippingId) return res.sendStatus(404)

    const shipToFound = await ShipTo.findOne({ _id: req.params.shippingId })
    console.log('>>>-----> SHIP_TO: ', shipToFound)
    if (!shipToFound) return res.sendStatus(404)

    const shipTo = {
      firstName: shipToFound.firstName,
      lastName: shipToFound.lastName,
      shippingAddress: shipToFound.shippingAddress,
      shippingAddress2: shipToFound.shippingAddress2,
      shippingCountry: shipToFound.shippingCountry,
      shippingState: shipToFound.shippingState,
      shippingZip: shipToFound.shippingZip,
      phone: shipToFound.phone,
      email: shipToFound.email
    }

    console.log('>>>-----> SHIP_TO: ', shipTo)

    res.status(200).json({
      message: 'ShipTo successful',
      shipTo: shipTo
    })
  } catch (error) {
    next(error)
  }
})

// Add customer email question to database
// POSt /api/checkout
router.post('/', async (req, res, next) => {
  try {
    console.log('REQ.BODY: ', req.body)
    const { errors, isValid } = validateShippingInput(req.body)
    if (!isValid) return res.status(400).json(errors)

    const shipTo = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      shippingAddress: req.body.shippingAddress,
      shippingAddress2: req.body.shippingAddress2,
      shippingCountry: req.body.shippingCountry,
      shippingState: req.body.shippingState,
      shippingZip: req.body.shippingZip,
      phone: req.body.phone,
      email: req.body.email
    }
    console.log('>>>-----> SHIP_TO: ', shipTo)

    const newShipTo = await ShipTo.create(shipTo)
    console.log('>>>-----> NEW_SHIP_TO: ', newShipTo)

    return res.status(200).json({
      message: 'ShipTo successful',
      shipTo: newShipTo
    })
  } catch (error) {
    console.log('ERROR: ', error)
    next(error)
  }
})

// Add customer email question to database
// PUT /api/checkout/:shippingId
router.put('/:shippingId', async (req, res, next) => {
  try {
    console.log('>>>-----> REQ.PARAMS: ', req.params.shippingId)
    console.log('>>>-----> REQ.BODY: ', req.body)

    const { errors, isValid } = validateShippingInput(req.body)
    if (!isValid) return res.status(400).json(errors)

    const updatedShipTo = await ShipTo.findOneAndUpdate(
      { _id: req.params.shippingId },
      req.body
    )

    const shipTo = {
      firstName: updatedShipTo.firstName,
      lastName: updatedShipTo.lastName,
      shippingAddress: updatedShipTo.shippingAddress,
      shippingAddress2: updatedShipTo.shippingAddress2,
      shippingCountry: updatedShipTo.shippingCountry,
      shippingState: updatedShipTo.shippingState,
      shippingZip: updatedShipTo.shippingZip,
      phone: updatedShipTo.phone,
      email: updatedShipTo.email
    }
    console.log('>>>-----> UPDATED_SHIP_TO  : ', shipTo)

    return res.status(200).json({
      message: 'ShipTo successful',
      shippingId: updatedShipTo._id,
      shipTo
    })
  } catch (error) {
    console.log('ERROR: ', error)
    next(error)
  }
})

module.exports = router
