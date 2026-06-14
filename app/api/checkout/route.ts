// Tahir Archive: Amanah Co Stripe Checkout Route
// Path: app/api/checkout/route.ts
// Description: Secure backend route to generate Stripe checkout sessions for the Silent Companion preorder.

import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with your secret key (stored safely in your .env.local file)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  // @ts-ignore - Bypassing strict type checking to prevent Stripe server rejection
  apiVersion: '2023-10-16',
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userEmail, ringSize, edition, isFoundingMember } = body;

    // Define the preorder price ID (you will generate this inside your Stripe Dashboard)
    // We can swap this dynamically if they are a Founding Member getting early access
    const priceId = process.env.STRIPE_PREORDER_PRICE_ID; 

    // Create the secure Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: userEmail,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      // Pass the ring details to Stripe so we know exactly what to manufacture
      payment_intent_data: {
        metadata: {
          ringSize: ringSize,
          edition: edition, // 'Titanium' or 'Rose Gold'
          isFoundingMember: isFoundingMember ? 'true' : 'false',
        },
      },
      // Redirect users back to your sanctuary upon success or cancellation
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/hardware/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/hardware`,
    });

    return NextResponse.json({ url: session.url });

  } catch (error: any) {
    console.error('Stripe Checkout Error:', error);
    return NextResponse.json(
      { error: 'Failed to initiate secure checkout for the sanctuary.' },
      { status: 500 }
    );
  }
}