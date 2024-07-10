'use client';
import { featuresData } from "@/data/Feature";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FiCpu } from "react-icons/fi";
import { IoDownloadOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main>
      <header className="fixed inset-0 container mx-auto h-[80px] px-[19px] flex items-center justify-between bg-dark z-10">
        <div className="font-semibold text-[28px]">SellSpot</div>
        <nav>
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Feature</Link>
            </li>
            <li>
              <Link href="#">Faq</Link>
            </li>
          </ul>
        </nav>
        <button className="btn">
          Start Now <FaArrowRight size={20} />
        </button>
      </header>

      <section className="container mx-auto pt-[80px] h-screen grid place-content-center">
        <div className="max-w-2xl text-center flex items-center justify-center flex-col gap-[40px]">
          <h1 className="text-[60px] font-bold leading-tight">
            <span className="text-primary">Revolutionize</span>
            Your Shopping Experience
          </h1>
          <p>
            Welcome to SellSpot, where buying and selling meet seamless
            convinience on your fingertips. Explore a world of endless
            possibilities today!.
          </p>
          <button className="btn">
            Start Free Now <FaArrowRight />
          </button>
        </div>
      </section>

      <section className="container mx-auto pb-[80px]">
        <div className="flex items-center justify-center mx-auto mb-[80px]">
          <Image
            src="/smartphone.png"
            alt="smartphone sultan"
            width={730}
            height={355}
          />
        </div>
        <div className="max-w-3xl flex text-center justify-center mx-auto flex-col ">
          <h2 className="text-[36px] mb-[20px] font-medium">
            Discover, Connect, Transact
          </h2>
          <p className="mb-[40px]">
            <span className="font-bold">SellSpot </span>
            is more than just an app. It&apos;s a platform. its your gateway to
            a vibran marketplace community where buyer adn selerss converge,
            createing a dynamic ecosystem of exchart
          </p>
          <button className="btn mx-auto">
            download Now <IoDownloadOutline size={20} />
          </button>
        </div>
      </section>

      <section className="container mx-auto text-center my-[80px]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-[36px] font-bold mb-[26px]">Why SellSpot?</h2>
          <p>
            Choose SellSpot for a seamless, enjoyable and rewarding marketplace
            experience unlike any other
          </p>
        </div>

        <div className="mt-[80px] grid grid-cols-3 gap-12">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="text-left bg-gradient-to-b from-[#242333] to-[#010014] border border-[#3F3E4E] rounded-xl p-[25px]"
            >
              <div className="bg-gray w-fit p-[10px] rounded-md">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className=" container mx-auto text-center my-[80px]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-[36px] font-bold mb-[26px]">
            Frequently Asked Questions
          </h2>
          <p>
            Do you need some help with something or do ypu have question on same
            feature?
          </p>
        </div>
        <div></div>
      </section>
    </main>
  );
}
