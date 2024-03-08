console.log("TEST SCRIPT: ", winow.myData)
fetch('https://httpbin.org/status/200', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => console.log('RESPONSE STATUS FROM POST:', response.status))
    .catch((error) => {
      console.error('Error sending data:', error)
    })
