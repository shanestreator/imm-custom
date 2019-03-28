import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import TextFieldGroup from '../../Components/Common/TextFieldGroup'
import {
  sendShippingAddress,
  getShipTo,
  clearShipTo
} from '../../Redux/Actions/checkoutActions'
import classNames from 'classnames'
import FinalOrderSummaryTable from '../../Components/Common/Cart/FinalOrderSummaryTable'
import commaNumber from 'comma-number'
import UseStripeCheckout from '../../Components/Common/Checkout/UseStripeCheckout'
import {
  calcForCartTotal,
  totalManualsInCartCalc,
  itemModalAddZeros
} from '../../Utils/Utils'
import { removeAllFromCart } from '../../Redux/Actions/cartActions'
import axios from 'axios'

const states = [
  { value: 'AL', text: 'Alabama' },
  { value: 'AK', text: 'Alaska' },
  { value: 'AZ', text: 'Arizona' },
  { value: 'AR', text: 'Arkansas' },
  { value: 'CA', text: 'California' },
  { value: 'CO', text: 'Colorado' },
  { value: 'CT', text: 'Connecticut' },
  { value: 'DE', text: 'Delaware' },
  { value: 'DC', text: 'District Of Columbia' },
  { value: 'FL', text: 'Florida' },
  { value: 'GA', text: 'Georgia' },
  { value: 'HI', text: 'Hawaii' },
  { value: 'ID', text: 'Idaho' },
  { value: 'IL', text: 'Illinois' },
  { value: 'IN', text: 'Indiana' },
  { value: 'IA', text: 'Iowa' },
  { value: 'KS', text: 'Kansas' },
  { value: 'KY', text: 'Kentucky' },
  { value: 'LA', text: 'Louisiana' },
  { value: 'ME', text: 'Maine' },
  { value: 'MD', text: 'Maryland' },
  { value: 'MA', text: 'Massachusetts' },
  { value: 'MI', text: 'Michigan' },
  { value: 'MN', text: 'Minnesota' },
  { value: 'MS', text: 'Mississippi' },
  { value: 'MO', text: 'Missouri' },
  { value: 'MT', text: 'Montana' },
  { value: 'NE', text: 'Nebraska' },
  { value: 'NV', text: 'Nevada' },
  { value: 'NH', text: 'New Hampshire' },
  { value: 'NJ', text: 'New Jersey' },
  { value: 'NM', text: 'New Mexico' },
  { value: 'NY', text: 'New York' },
  { value: 'NC', text: 'North Carolina' },
  { value: 'ND', text: 'North Dakota' },
  { value: 'OH', text: 'Ohio' },
  { value: 'OK', text: 'Oklahoma' },
  { value: 'OR', text: 'Oregon' },
  { value: 'PA', text: 'Pennsylvania' },
  { value: 'RI', text: 'Rhode Island' },
  { value: 'SC', text: 'South Carolina' },
  { value: 'SD', text: 'South Dakota' },
  { value: 'TN', text: 'Tennessee' },
  { value: 'TX', text: 'Texas' },
  { value: 'UT', text: 'Utah' },
  { value: 'VT', text: 'Vermont' },
  { value: 'VA', text: 'Virginia' },
  { value: 'WA', text: 'Washington' },
  { value: 'WV', text: 'West Virginia' },
  { value: 'WI', text: 'Wisconsin' },
  { value: 'WY', text: 'Wyoming' }
]

const elementCatcher = () => {
  const intervals = []

  return {
    cleanup: () => intervals.forEach(i => clearInterval(i.interval)),
    set: (selector, interval = 50, cb) => {
      intervals.push({
        id: selector,
        interval: setInterval(() => {
          const el = window.$(selector)[0]
          if (el) {
            const intervalToClear = intervals.find(i => i.id === selector)
            clearInterval(intervalToClear.interval)
            cb(el)
          }
        }, interval)
      })
    }
  }
}

class Checkout extends Component {
  state = {
    firstName: '',
    lastName: '',
    shippingAddress: '',
    shippingAddress2: '',
    shippingCountry: '',
    shippingState: '',
    shippingZip: '',
    phone: '',
    email: '',
    emailConfirm: '',
    errors: {},
    disableCheckoutButtons: true,
    disableSubmitButtons: true
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.errors).length > 0) {
      return this.setState({
        errors: nextProps.errors,
        disableCheckoutButtons: true
      })
    }

    nextProps.checkout.shipTo.errors = {}

    if (nextProps.checkout.shipTo !== this.state) {
      this.setState(nextProps.checkout.shipTo)
      if (this.state.emailConfirm !== '') {
        this.setState({
          disableCheckoutButtons: false
        })
      }
    }

    if (nextProps.checkout.shipTo !== this.state) {
      this.setState({ disableSubmitButtons: true })
    }
  }

  componentWillUnmount() {
    this.elementCatcher.cleanup()
  }

  componentDidMount() {
    this.elementCatcher = elementCatcher()

    this.elementCatcher.set('iframe[title="paypal_buttons"]', 100, el => {
      el.tabIndex = -1
    })

    const shippingId = localStorage.getItem('shippingId')
    if (shippingId) {
      this.props.getShipTo(shippingId)
    }

    // ---------------------------------------------------------------

    const { productsInCart } = this.props.cart
    const cartTotalNum = calcForCartTotal(productsInCart)
    const total = cartTotalNum + Math.round(cartTotalNum / 10)
    const removeAllCartItems = this.props.removeAllFromCart
    const history = this.props.history
    const clearShipToInfoAfterPurchase = this.props.clearShipTo

    if (productsInCart.length > 0) {
      window.paypal
        .Buttons({
          createOrder: function(data, actions) {
            // Set up the transaction
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: `${total}.00`
                  }
                }
              ]
            })
          },
          onApprove: function(data, actions) {
            // Capture the funds from the transaction
            return actions.order.capture().then(async function(details) {
              // Call your server to save the transaction
              const res = await axios.post('/api/order/paypal', {
                orderID: data.orderID,
                total: total,
                shippingId: localStorage.getItem('shippingId'),
                productsInCart
              })
              // Show a success message to your buyer
              alert(
                'Thank you! You should recieve an email with an order receipt.'
              )
              clearShipToInfoAfterPurchase()
              removeAllCartItems()
              localStorage.removeItem('shippingId')
              history.push('/store')
            })
          }
        })
        .render('#paypal-button-container')
    }
  }

  onChange = evt => {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }

  onSubmit = evt => {
    evt.preventDefault()

    console.log('submit clicked')

    const shipTo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      shippingAddress: this.state.shippingAddress,
      shippingAddress2: this.state.shippingAddress2,
      shippingCountry: this.state.shippingCountry,
      shippingState: this.state.shippingState,
      shippingZip: this.state.shippingZip,
      phone: this.state.phone,
      email: this.state.email,
      emailConfirm: this.state.emailConfirm
    }

    if (shipTo !== this.props.checkout.shipTo) {
      this.props.sendShippingAddress(shipTo)
    }
  }

  render() {
    const { errors } = this.state
    const { productsInCart } = this.props.cart
    const { shipToIsEmpty } = this.props.checkout

    const cartTotalNum = calcForCartTotal(productsInCart)
    const total = commaNumber(
      itemModalAddZeros(calcForCartTotal(productsInCart))
    )
    const totalManuals = totalManualsInCartCalc(productsInCart)

    console.log('total: ', total)

    return (
      <div
        id="container"
        className="container cart__container-shadow min-vh-100 bg-light py-5"
      >
        <div className="container-md px-lg-4">
          <div className="py-4" />
          {this.props.cart.productsInCart.length > 0 ? (
            <React.Fragment>
              <h1 className="display-4 text-center">Checkout</h1>
              <div className="card">
                <div className="card-body">
                  <h4>Ship To</h4>

                  <form onSubmit={this.onSubmit}>
                    <div className="row">
                      <div className="col-12 col-sm-6">
                        <TextFieldGroup
                          type="text"
                          name="firstName"
                          label="First Name"
                          value={this.state.firstName}
                          onChange={this.onChange}
                          className="form-control bg-light"
                          placeholder="*First Name"
                          error={errors.firstName}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <TextFieldGroup
                          type="text"
                          name="lastName"
                          label="Last Name"
                          value={this.state.lastName}
                          onChange={this.onChange}
                          className="form-control bg-light"
                          placeholder="*Last Name"
                          error={errors.lastName}
                        />
                      </div>
                    </div>

                    <div className="row mt-2">
                      <div className="col-12 col-sm-6">
                        <TextFieldGroup
                          type="text"
                          name="shippingAddress"
                          label="Address"
                          value={this.state.shippingAddress}
                          onChange={this.onChange}
                          className="form-control bg-light"
                          placeholder="*Address"
                          error={errors.shippingAddress}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <TextFieldGroup
                          type="text"
                          name="shippingAddress2"
                          label="Address 2 (Optional)"
                          value={this.state.shippingAddress2}
                          onChange={this.onChange}
                          className="form-control bg-light"
                          placeholder="Apartment or Suite"
                          error={errors.shippingAddress2}
                        />
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-md-5 mt-2">
                        <label className="mb-0" htmlFor="country">
                          Country
                        </label>
                        <select
                          className={classNames(
                            'custom-select',
                            'd-block',
                            'w-100',
                            'bg-light',
                            { 'is-invalid': errors.shippingCountry }
                          )}
                          id="country"
                          required=""
                          name="shippingCountry"
                          value={this.state.shippingCountry}
                          onChange={this.onChange}
                        >
                          <option value="">*Choose...</option>
                          <option value="US">United States</option>
                        </select>

                        {errors.shippingCountry && (
                          <div className="invalid-feedback d-block">
                            {errors.shippingCountry}
                          </div>
                        )}
                      </div>

                      <div className="col-md-4 mt-2">
                        <label className="mb-0" htmlFor="state">
                          State
                        </label>
                        <select
                          className={classNames(
                            'custom-select',
                            'd-block',
                            'w-100',
                            'bg-light',
                            { 'is-invalid': errors.shippingState }
                          )}
                          id="state"
                          required=""
                          name="shippingState"
                          value={this.state.shippingState}
                          onChange={this.onChange}
                        >
                          <option value="">*Choose...</option>
                          {states.map(s => (
                            <option key={s.text} value={s.value}>
                              {s.text}
                            </option>
                          ))}
                        </select>
                        {errors.shippingState && (
                          <div className="invalid-feedback">
                            {errors.shippingState}
                          </div>
                        )}
                      </div>

                      <div className="col-md-3 mt-2">
                        <label className="mb-0" htmlFor="zip">
                          Zip
                        </label>
                        <input
                          type="text"
                          className={classNames('form-control', 'bg-light', {
                            'is-invalid': errors.shippingZip
                          })}
                          id="zip"
                          placeholder="*Zip Code"
                          required=""
                          name="shippingZip"
                          value={this.state.shippingZip}
                          onChange={this.onChange}
                        />
                        {errors.shippingZip && (
                          <div className="invalid-feedback">
                            {errors.shippingZip}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-12 col-md-6 mt-2">
                        <label className="mb-0" htmlFor="phone">
                          Phone <small>(only used if shipping issue)</small>
                        </label>
                        <input
                          type="text"
                          value={this.state.phone}
                          className={classNames('form-control', 'bg-light', {
                            'is-invalid': errors.phone
                          })}
                          id="phone"
                          placeholder="*Phone (8001231234)"
                          required=""
                          name="phone"
                          maxLength="10"
                          onChange={this.onChange}
                        />
                        {errors.phone && (
                          <div className="invalid-feedback">{errors.phone}</div>
                        )}
                      </div>
                      <div className="col-12 col-md-6" />
                    </div>

                    <div className="row mt-2">
                      <div className="col-12 col-sm-6">
                        <TextFieldGroup
                          type="text"
                          name="email"
                          label="Email"
                          value={this.state.email}
                          onChange={this.onChange}
                          className="form-control bg-light"
                          placeholder="*Email"
                          error={errors.email}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <TextFieldGroup
                          type="text"
                          name="emailConfirm"
                          label="Confirm Email"
                          value={this.state.emailConfirm}
                          onChange={this.onChange}
                          className="form-control bg-light"
                          placeholder="*Confirm Email"
                          error={errors.emailConfirm}
                        />
                      </div>
                    </div>

                    <div className="row mt-5">
                      <div className="col">
                        <button
                          disabled={!this.state.disableSubmitButtons}
                          type="submit"
                          className="btn btn-secondary"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div
                className={classNames('row', 'my-5', {
                  checkout__disabledbutton: shipToIsEmpty
                })}
              >
                <div className="col-12 col-sm-6">
                  <div className="card" style={{ height: '100%' }}>
                    <div className="card-body">
                      <h4>Order Summary</h4>

                      <FinalOrderSummaryTable
                        productsInCart={productsInCart}
                        totalManuals={totalManuals}
                        total={total}
                        // updated total with correct tax calculated on server using TaxJar API
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 mt-5 mt-sm-0">
                  <div className="card">
                    <div className="card-body">
                      <h4>Pay With</h4>

                      {/* ----------------- STRIPE CHECKOUT ----------------- */}
                      {cartTotalNum && (
                        <div className="col-12  px-0 mt-5">
                          <div className="row ">
                            <div className="col-12 d-flex justify-content-center align-items-center">
                              <img
                                style={{ height: '55px', width: '140px' }}
                                src="/images/stripe-logo-blue.webp"
                                alt="stripe logo"
                                className="img-fluid"
                              />
                            </div>
                            <div className="col-12 d-flex justify-content-center align-items-center">
                              <UseStripeCheckout
                                history={this.props.history}
                                disabled={this.state.disableCheckoutButtons}
                                name={'Stripe Checkout'}
                                amount={commaNumber(
                                  cartTotalNum + Math.round(cartTotalNum / 10)
                                )}
                                clearShipToInfoAfterPurchase={
                                  this.props.clearShipTo
                                }
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {cartTotalNum && (
                        <div className="col-12 d-flex align-items-center justify-content-center px-0 mt-3">
                          <p className="mb-0">or</p>
                        </div>
                      )}

                      {/* ----------------- PAYPAL CHECKOUT ----------------- */}
                      {cartTotalNum && (
                        <div className="col-12 d-flex align-items-center justify-content-center px-0 mt-3">
                          <div id="paypal-button-container" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <h5 className="mt-5 text-center">
              No items in cart{' '}
              <Link
                to="/store"
                className="base__hover-link-underline"
                style={{ color: '#be141b' }}
              >
                Click Here
              </Link>{' '}
              to go to the store
            </h5>
          )}
        </div>
      </div>
    )
  }
}

const mapState = ({ cart, checkout, errors }) => ({ cart, checkout, errors })

export default connect(
  mapState,
  { getShipTo, sendShippingAddress, removeAllFromCart, clearShipTo }
)(withRouter(Checkout))
