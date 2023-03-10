import React, { useState } from 'react';

const useTrackLocation = () => {
  const [locationErrorMsg, setLocationErrorMsg] = useState("")
  const [latLong, setLatLong] = useState('')
  const [isFindingLocation, setIsFindingLocation] = useState(false)

  const success = (position) => {
    console.log(position)
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLatLong(`${latitude},${longitude}`)
    setLocationErrorMsg('')
    setIsFindingLocation(false)
  }

  const error = () => {
    setIsFindingLocation(false)
    setLocationErrorMsg("Unable to retrieve your location")
  }

  const handleTrackLocation = () => {
    setIsFindingLocation(true)
    if (!navigator.geolocation) {
      setLocationErrorMsg("Geolocation is not support by your browser")
      setIsFindingLocation(false)
    } else {
      navigator.geolocation.getCurrentPosition(success, error)
    }
  }

  return {
    latLong,
    handleTrackLocation,
    locationErrorMsg,
    isFindingLocation
  }

}

export default useTrackLocation;