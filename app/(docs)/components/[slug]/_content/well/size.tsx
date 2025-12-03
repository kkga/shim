"use client";
import { Link } from "@/shim-ui/link";
import { Well } from "@/shim-ui/well";

export default () =>
  ([1, 2, 3, 4] as const).map((size) => (
    <Well className="max-w-[32ch]" key={size} size={size}>
      <h3 className="font-bold text-neutral-text-contrast">Shipping info</h3>
      <p>
        Your order will be shipped to your primary address. Please make sure it
        is up to date.
      </p>
      <Link className="mt-2 self-start" href="#">
        Edit address
      </Link>
    </Well>
  ));
