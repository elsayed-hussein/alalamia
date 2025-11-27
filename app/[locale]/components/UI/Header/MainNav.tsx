import Link from "next/link";
import Image from "next/image";

const MainNav = () => {
  return (
    <nav className="container mx-auto p-0 pt-4 text-center ease-in-out duration-300">
      <div className="leading-[0] ease-in-out duration-300 ">
        <Link
          href="/"
          className="inline-flex w-fit drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
        >
          <Image
            src="/img/main.png"
            width={200}
            height={100}
            alt="home"
            className="mx-auto mb-4 max-w-[35vw] w-full "
            priority
          />
        </Link>
      </div>
    </nav>
  );
};

export default MainNav;
