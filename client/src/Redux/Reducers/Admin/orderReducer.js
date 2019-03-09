import { GET_ALL_ORDERS } from '../../Actions/types'

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ORDERS: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
