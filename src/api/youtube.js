
//import React from 'react';
import axios from 'axios';
const KEY = 'AIzaSyB0aZkvpXl_bNCoahlMBSLyFhK1qQu4Tis';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part:'snippet',
    maxResults: 5,
    key: KEY
  },

});