const { Configuration, OpenAIApi } = require('openai');

import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET() {
  const configuration = new Configuration({
    apiKey: 'pk-kkggJGVhvQrpLgaatRHVFUJSKznLcNjSAOwAyNIOfcgVIUxd',
    basePath: 'https://api.pawan.krd/v1',
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Human: Hello\nAI:',
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ['Human: ', 'AI: '],
  });

  console.log(response.data.choices[0].text);

  return NextResponse.json({ message: response.data.choices[0].text });
}
