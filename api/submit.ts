import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const body = request.body;
    
    // Ensure access_key is present (just as a safety check, though frontend should send it)
    if (!body.access_key) {
      body.access_key = 'b1090997-a9d3-434c-955d-4fbf3393e247';
    }

    // Forward the request to Web3Forms on the server-side
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
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
