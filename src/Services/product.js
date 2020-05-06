import axios from 'axios';

const productslist = async (apiendpoint) => {
  try {
    const result = await axios.get(apiendpoint);
    const products = result.data;
    return products;
  } catch (error) {
    throw error;
  }
};

const masterVersion = async (apiendpoint) => {
  try {
    const result = await axios.get(apiendpoint);
    const master = result.data;
    return master;
  } catch (error) {
    throw error;
  }
};

export { productslist, masterVersion };
