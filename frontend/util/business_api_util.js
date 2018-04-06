export const fetchBusiness = businessId => (
  $.ajax({
    method: 'GET',
    url: `api/businesses/${businessId}`
  })
);

export const fetchBusinesses = () => (
  $.ajax({
    method: 'GET',
    url: 'api/businesses'
  })
);

export const addBusiness = business => (
  $.ajax({
    method: 'POST',
    url: 'api/businesses',
    data: { business }
  })
);
