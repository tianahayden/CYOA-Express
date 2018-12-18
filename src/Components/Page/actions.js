import axios from 'axios'

export const getStoryDetails = (id) => {
    return {
        type: 'GET_STORY_DETAILS',
        payload: axios.get(`/page/${id}`)
            .then((pageInfo) => {
              return pageInfo.data;
            })
            .catch(err => reject({error: 'could not get story details', err}))
    }
}
