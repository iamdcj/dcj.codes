import { actionTypes } from '../../actions/actionTypes';

export function contentFetching( state = false, action) {

  switch(action.type) {
    case actionTypes.CONTENT.FETCHING:

      return action.contentFetching;
    default:
      return state;
  }

}


export function contentFetched( state = {}, action) {
  switch(action.type) {
    case 'CONTENT_FETCHED':

      return action.contentFetched;
    default:
      return state;
  }

}
