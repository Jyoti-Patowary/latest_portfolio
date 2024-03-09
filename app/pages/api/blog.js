'use client'

export default async (req, res) => {
  const integrationToken = '21fefdb291e3ce2a6a85a4e8d041bc3456785b45077a16f1589fe897c40bee07a';
  const mediumApiUrl = 'https://api.medium.com/v1/users/@jpatowary8/publications';

  try {
    const response = await fetch(mediumApiUrl, {
      headers: {
        Authorization: `Bearer ${integrationToken}`,
      },
    });

    console.log(response)

    if (response.ok) {
      const data = await response.json();
      res.status(200).json(data.data || []);
    } else {
      console.error('Failed to fetch data:', response.status, response.statusText);
      res.status(response.status).end(response.statusText);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).end('Internal Server Error');
  }
};
