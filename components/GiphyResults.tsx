export const GiphyResults = ({ giphys }) => {
  if (giphys && giphys.data) {
    return (
      <div className="giphy-search-results-grid">
        {giphys.data.map((each, index) => (
          <div key={index}>
            <h3>{each.title}</h3>
            <img src={each.images.original.url} alt={each.title} />
          </div>
        ))}
      </div>
    );
  }
  return null;
};
