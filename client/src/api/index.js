import axios from 'axios';

const url = 'http://localhost:5000/tires';

export const getTires = () => axios.get(url);