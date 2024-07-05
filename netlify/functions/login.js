const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    const { username, password } = JSON.parse(event.body);

    const response = await axios.post('https://freefakeapi.io/authapi/login', {
      username,
      password,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ token: response.data.token }),
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
