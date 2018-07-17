import axios from 'axios'
import config from '@/config/config'

// this file should have all the api calls that are triggered by the actions
export const fetchItems = (payload) => {
  return axios.get(config.mainUrl + '?client_id=' + config.client_id + '&client_secret=' + config.client_secret
   + '&v=' + config.version + payload)
}