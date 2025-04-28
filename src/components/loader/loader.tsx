import "./loader.css";


export default function Loader() {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md z-50">
        <div
          className="w-16 animate-loader"
          style={{
            aspectRatio: "2",
            background: `
            no-repeat radial-gradient(circle closest-side, #2b7fff 90%, transparent) 0% 50%,
            no-repeat radial-gradient(circle closest-side, #2b7fff 90%, transparent) 50% 50%,
            no-repeat radial-gradient(circle closest-side, #2b7fff 90%, transparent) 100% 50%
          `,
            backgroundSize: "calc(100%/3) 50%",
          }}
        />
      </div>
    </>
  );
}