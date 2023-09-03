import {
  createCheckoutLink,
  createCustomerIfNull,
  hasSubscription,
} from "@/lib/stripe";
import Link from "next/link";

export default async function Page() {
  const customer = await createCustomerIfNull();

  const hasSub = await hasSubscription();
  const checkoutLink = await createCheckoutLink(String(customer));

  return (
    <main>
      {hasSub ? (
        <>
          <div className="rounded-md px-4 py-2 bg-emerald-500 font-medium text-sm text-white">
            You have an active subscription
          </div>
        </>
      ) : (
        <>
          <div className="min-h-[60vh] grid place-items-center rounded-lg px-6 py-10 bg-slate-100">
            <Link
              href={String(checkoutLink)}
              className="font-medium text-base hover:underline"
            >
              You have no subscription – sign up now!
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
