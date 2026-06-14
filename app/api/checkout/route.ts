// Tahir Archive: Amanah Co Stripe Checkout Route
// Path: app/api/checkout/route.ts
// Description: Secure, dynamic backend route for Silent Companion preorder.

import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with your secure test key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  // @ts-ignore - Bypassing strict type checking to prevent Stripe server rejection
  apiVersion: '2023-10-16',
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userEmail, ringSize, edition, isFoundingMember } = body;

    const priceId = process.env.STRIPE_PREORDER_PRICE_ID; 

    if (!priceId) {
        throw new Error("Stripe Price ID is missing. The server cannot find it.");
    }

    // DYNAMIC ORIGIN: Foolproof way to get the exact URL (works locally and on live Vercel)
    // This completely bypasses the need for NEXT_PUBLIC_BASE_URL
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
      // Safely using the dynamic origin
      success_url: `${origin}/hardware/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/hardware`,
    });

    return NextResponse.json({ url: session.url });

  } catch (error: any) {
    // This prints the EXACT reason to your terminal for our records
    console.error('Stripe Checkout Error Details:', error);
    
    // This sends the exact error string directly to your browser screen
    return NextResponse.json(
      { error: error.message || 'Unknown Stripe connection error occurred.' },
      { status: 500 }
    );
  }
}