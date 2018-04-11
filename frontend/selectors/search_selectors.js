export const selectResults = state => {
  return state.entities.searchResults;
};

export const selectBusinesses = state => {
  let businesses = {};
  const results = selectResults(state);
  
  results.forEach(id => {
    businesses[id] = state.entities.businesses[id];
  });

  return businesses;
}
