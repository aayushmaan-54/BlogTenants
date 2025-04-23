import Link from "next/link";

export default function Footer() {

  return (
    <>
      <footer className="py-4 mt-auto border-t border-t-border text-center text-xs sm:text-base">
        Made with ❤️ by <Link href={'https://linktr.ee/aayushmaan_soni'} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 decoration-text-muted hover:decoration-text-primary">Aayushmaan Soni</Link>
      </footer>
    </>
  );
}