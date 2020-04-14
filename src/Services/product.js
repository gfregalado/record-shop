import axios from 'axios';

const productslist = async () => {
  try {
    const result = await axios.get(
      `https://api.discogs.com/database/search?format=vinyl&type=release&sort=year&sort_order=desc&page=1&per_page=8&token=${process.env.REACT_APP_DISCOGS_TOKEN}`
    );
    const products = result.data;
    return products;
  } catch (error) {
    throw error;
  }
};

export { productslist };
