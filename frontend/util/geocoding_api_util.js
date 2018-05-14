export const geocode = place => (
  $.ajax({
    method: 'GET',
    `https://maps.googleapis.com/maps/api/geocode/json?address=${
      encodeURIComponent(address)
    }&key=AIzaSyADVVFN-sWPtq7Lqp7nvs_mUYm1nL1Nj1o`
  })
);
