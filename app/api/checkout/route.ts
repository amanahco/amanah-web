// Tahir Archive: Amanah Co Stripe Checkout Route
// Path: app/api/checkout/route.ts
// Description: Secure, dynamic backend route for Silent Companion preorder.

import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe. The .trim() destroys any hidden ghost spaces from the browser!
const stripe = new Stripe((process.env.STRIPE_SECRET_KEY as string).trim(), {
  // @ts-ignore
  apiVersion: '2023-10-16',
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userEmail, ringSize, edition, isFoundingMember } = body;

    // .trim() prevents any hidden spaces from breaking the price tag
    const priceId = process.env.STRIPE_PREORDER_PRICE_ID?.trim(); 

    if (!priceId) {
        throw new Error("Stripe Price ID is missing. The server cannot find it.");
    }

    const origin = request.headers.get('origin') || 'https://www.amanahco.co';

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
      payment_intent_data: {
        metadata: {
          ringSize: ringSize,
          edition: edition,
          isFoundingMember: isFoundingMember ? 'true' : 'false',
        },
      },
      success_url: `${origin}/hardware/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/hardware`,
    });

    return NextResponse.json({ url: session.url });

  } catch (error: any) {
    console.error('Stripe Checkout Error Details:', error);
    return NextResponse.json(
      { error: error.message || 'Unknown Stripe connection error occurred.' },
      { status: 500 }
    );
  }
}