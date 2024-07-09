import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="flex items-center justify-between">
        <div>
          logo
        </div>
        <nav>
          <ul className="flex items-center justify-center gap-4">
            <li>Home</li>
            <li>Feature</li>
            <li>Faq</li>
          </ul>
        </nav>
        <button>
          Start Now
        </button>
      </header>
    </main>
  );
}
