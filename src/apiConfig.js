let apiUrl
const apiUrls = {
  production: 'https://cors-anywhere.herokuapp.com/https://fierce-journey-93874.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
