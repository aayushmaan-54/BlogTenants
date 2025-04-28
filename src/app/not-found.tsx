export default function NotFound() {
  return (
    <>
      <div className="h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-8xl font-bold mb-2">40 + 4 =</h1>
        <h1 className="text-4xl sm:text-8xl font-bold text-primary">404</h1>

        <p className="mt-14 text-xl font-bold p-2">
          This page doesn&apos;t add up!
        </p>
      </div>
    </>
  );
}