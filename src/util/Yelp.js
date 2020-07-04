const apiKey = 'nU5yvDhq--Y8E2WzMXF87S3ioX96dXni7oHw3wMuG8P1_wEzhFTz7x2vzDfn9llD9h9umDjaYmYgHJoqRxXxTv0Bnb0LphDf1mp8aMuo4ILpLAQOIP_AlWye3fj1XnYx';

const Yelp = {
    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
    }
  };
export default Yelp;