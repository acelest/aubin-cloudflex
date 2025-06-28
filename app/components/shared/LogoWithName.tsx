import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function LogoWithName() {
  return (
    <Link href="/" className="flex items-center">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-content sm:h-10 sm:w-10">
        <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
      <span className="ml-2 text-lg font-bold text-base-content sm:text-xl font-display">
        Cloudflex
      </span>
    </Link>
  );
} 