import axios from 'axios'

export const getStoryDetails = (id) => {
    return {
        type: 'GET_STORY_DETAILS',
        payload: axios.get(`/page/${id}`)
            .then((pageInfo) => {
              console.log('pageInfo', pageInfo.data)
              return pageInfo.data;
            })
            .catch(err => reject({error: 'could not get story details', err}))
    }
}