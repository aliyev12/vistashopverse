import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log("####################################################");
  console.log("####################################################");
  console.log("####################################################");
  console.log("STRIPE WEBHOOK req = ", req);
  console.log("####################################################");
  console.log("####################################################");
  console.log("####################################################");

  return NextResponse.json({
    message: "test",
  });
}
// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";
// import { updateOrderToPaid } from "@/lib/actions/order.actions";

// export async function POST(req: NextRequest) {
//   console.log("####################################################");
//   console.log("####################################################");
//   console.log("####################################################");
//   console.log("STRIPE WEBHOOK req = ", req);
//   console.log("####################################################");
//   console.log("####################################################");
//   console.log("####################################################");
//   const requestBody = await req.text();
//   const stripeSignatureHeader = req.headers.get("stripe-signature") as string;
//   const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

//   // Build the webhook event
//   const event = await Stripe.webhooks.constructEvent(
//     requestBody,
//     stripeSignatureHeader,
//     webhookSecret
//   );

//   // Check for successful payment
//   if (event.type === "charge.succeeded") {
//     const { object } = event.data;

//     // Update order status
//     await updateOrderToPaid({
//       orderId: object.metadata.orderId,
//       paymentResult: {
//         id: object.id,
//         status: "COMPLETED",
//         email_address: object.billing_details.email!,
//         pricePaid: (object.amount / 100).toFixed(),
//       },
//     });

//     return NextResponse.json({
//       message: "updateOrderToPaid was successful",
//     });
//   }

//   return NextResponse.json({
//     message: "event is not charge.succeeded",
//   });
// }
