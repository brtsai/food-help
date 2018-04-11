export const searchBusinesses = searchString => (
  $.ajax({
    method: 'GET',
    url: `api/search?search_string=${searchString}`
  })
);
