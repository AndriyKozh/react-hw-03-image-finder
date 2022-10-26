import PropTypes from 'prop-types';
import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29524471-b67b2b2d9f34edfb071a81463'


export async function createRequest(search, page = 1) {
    const searchParams = `?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    const response = await axios.get(searchParams)
    return response
  }

  createRequest.propType={
    search: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
}