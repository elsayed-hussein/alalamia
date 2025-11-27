"use client";
import Link from "next-intl/link";
import { usePathname } from "next/navigation";

type Props = {};
const LocalBtn = (props: Props) => {
  const pathname = usePathname();
  let textToRemove = "/ar";
  let result = "";
  if (pathname === "/ar") {
    result = "/";
  } else {
    if (pathname.startsWith(textToRemove)) {
      result = pathname.slice(textToRemove.length);
    } else {
      result = pathname;
    }
  }

  return (
    <div>
      <Link
        href={result}
        locale="en"
        className={`${
          pathname.startsWith(textToRemove)
            ? "font-semibold text-white"
            : "hidden"
        }`}
      >
        En
      </Link>
      <Link
        href={result}
        locale="ar"
        className={`${
          pathname.startsWith(textToRemove)
            ? "hidden"
            : "font-semibold text-white"
        }`}
      >
        عربي
      </Link>
    </div>
  );
};
export default LocalBtn;
