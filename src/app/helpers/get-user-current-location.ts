export const getUserCurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error)
  } else {
    console.log('Geolocation not supported')
  }

  function success(position) {
    return position.coords
  }

  function error() {
    console.log('Unable to retrieve your location')
  }
}
