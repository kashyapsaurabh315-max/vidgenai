// अपनी Huggingface API key यहाँ डालें
const API_TOKEN =VidGenAI (gen-lang-client-0795102249)

// वीडियो जनरेट करने या कोई अन्य AI सर्विस कॉल करने वाला फंक्शन
async function callHuggingfaceAPI(prompt) {
  try {
    const response = await fetch('https://api-inference.huggingface.co/models/your-model-name', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inputs: prompt })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('API Response:', data);

    // यहाँ अपने वेबसाइट पर डेटा दिखाने का कोड लिखें जैसे वीडियो URL या टेक्स्ट आदि
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// यूजर से टेक्स्ट लेकर API कॉल करें
async function generateVideo() {
  const userPrompt = document.getElementById('userInput').value; // HTML में input field होनी चाहिए
  const result = await callHuggingfaceAPI(userPrompt);
  // परिणाम को वेबसाइट पर दिखाने के लिए आगे कोड लिखें
}

// इस फंक्शन को आप बटन क्लिक या किसी इवेंट पर कॉल कर सकते हैं
