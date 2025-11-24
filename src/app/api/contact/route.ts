import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, company, message } = data;

    console.log('Environment check:', {
      hasServiceId: !!process.env.EMAILJS_SERVICE_ID,
      hasTemplateId: !!process.env.EMAILJS_TEMPLATE_ID,
      hasUserId: !!process.env.EMAILJS_USER_ID,
    });

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_USER_ID,
        template_params: {
          from_name: name,
          from_email: email,
          company,
          message,
        },
      }),
    });

    const responseData = await response.text();
    console.log('EmailJS response:', response.status, responseData);

    if (!response.ok) {
      throw new Error(`EmailJS failed: ${response.status} - ${responseData}`);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent!' 
    });
  } catch (err: any) {
    console.error('Contact form error:', err);
    return NextResponse.json({ 
      success: false, 
      message: err.message || 'Failed to send message'
    }, { 
      status: 500 
    });
  }
}