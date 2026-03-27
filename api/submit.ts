export default async function handler(request: any, response: any) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const body = request.body;
    
    // Forward the request to Web3Forms on the server-side
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...body,
        access_key: 'b1090997-a9d3-434c-955d-4fbf3393e247',
        from_name: 'Portfolio Contact Form'
      }),
    });

    const data = await res.json();
    
    // Return the response from Web3Forms to our frontend
    return response.status(res.status).json(data);
  } catch (error: any) {
    console.error('API Error:', error);
    return response.status(500).json({ 
      success: false, 
      message: error.message || 'Internal Server Error' 
    });
  }
}
