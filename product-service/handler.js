'use strict';

const PRODUCTS = require('./mocks/product-list.json');

module.exports.getProductList = async () => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json',
    },
    body: JSON.stringify(PRODUCTS),
  };
};

module.exports.getProductById = async (event) => {
  const product = PRODUCTS.find((p) => p.id === event.pathParameters.productId);
  if (!product) {
    return {
      statusCode: 404,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Product not found.',
      }),
    };
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json',
    },
    body: JSON.stringify(product),
  };
};
