import axios from 'axios';
import FormData from 'form-data';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { keyword } = await req.json();
  console.log(keyword);

  try {
    const payload = {
      prompt: 'Lighthouse on a cliff overlooking the ocean',
      output_format: 'png',
    };

    const formData = new FormData();
    formData.append('prompt', payload.prompt);
    formData.append('output_format', payload.output_format);

    const response = await axios.postForm(
      `https://api.stability.ai/v2beta/stable-image/generate/core`,
      formData,
      {
        validateStatus: undefined,
        responseType: 'arraybuffer',
        headers: {
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          Accept: 'image/*',
        },
      }
    );

    if (response.status !== 200) {
      throw new Error(`API error: ${response.status}`);
    }

    console.log(response.data);
    return NextResponse.json({
      data: response.data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Failed to generate image',
      },
      { status: 500 }
    );
  }
}
