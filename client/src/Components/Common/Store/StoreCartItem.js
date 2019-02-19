import React, { Component } from 'react'
// import { packInfo, priceRight } from '../../../Utils/Utils'
import { connect } from 'react-redux'
import commaNumber from 'comma-number'
import { getOneProduct } from '../../../Redux/Actions/productActions'
import {
  itemModalAddZeros,
  storeCardAddOneOrTwoZeros
} from '../../../Utils/Utils'

class StoreCartItem extends Component {
  render() {
    // console.log('THIS_PROPS: ', this.props)
    const {
      title,
      manualsPerPack,
      total,
      price,
      quantity
    } = this.props.cart.currentProduct
    // console.log('CURRENT_PRODUCT: ', this.props.cart.currentProduct)
    return (
      <React.Fragment>
        <div className="group-item container">
          <div className="row">
            <div className="col-6 d-flex text-left pl-0 align-items-center">
              <h5 className="my-0">
                {title}
                <p
                  style={{ fontSize: '12px' }}
                  className="text-muted pt-1 mb-0"
                >
                  Pack of {commaNumber(manualsPerPack)} manuals
                </p>
              </h5>
            </div>

            <div className="col-3 d-flex justify-content-end align-items-center">
              <div className="row">
                <div className="col-12">
                  <span className="text-muted">
                    ${commaNumber(itemModalAddZeros(total))}
                  </span>
                </div>
                <div className="col-12" style={{ fontSize: '12px' }}>
                  <span className="text-muted">
                    (${storeCardAddOneOrTwoZeros(price)} x{' '}
                    {commaNumber(manualsPerPack)} x {quantity})
                  </span>
                </div>
              </div>
            </div>

            <div className="col-3 d-flex justify-content-end align-items-center">
              <span
                style={{ fontSize: '16px' }}
                className="mb-0"
                htmlFor="quantity"
              >
                Qty: {quantity}
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapState = ({ cart }) => ({ cart })

export default connect(
  mapState,
  { getOneProduct }
)(StoreCartItem)
