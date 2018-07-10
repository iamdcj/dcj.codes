import { actionTypes } from './actionTypes';
import { createClient } from 'contentful'


const client = createClient({
  space: 'fy9c5xf83746',
  accessToken: '895acdcf1dfc830668dc0a5a4bebb0ec973174da7771e40fc70b254e52606e73'
})

export function UIBuilding(bool) {
  return {
    type: actionTypes.UI.BUILDING,
    UIBuilding: bool
  };
}


export function fetchData() {

  return (dispatch) => {

    dispatch({
      type: actionTypes.CONTENT.FETCHING,
      contentFetching: true
    });



    return client.getEntries()
    .then(function (entries) {
      
      dispatch({
        type: 'CONTENT_FETCHED',
        contentFetched: entries.items
      });

    })

  }
}

export function UIBuilt(bool) {
  return {
    type: actionTypes.UI.BUILT,
    UIBuilt: bool
  };
}



