import Slider from "./components/Slider";

function App() {
  const data = [
    "https://i.ytimg.com/vi/e2vYFEahiGE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiXuFD6wWiUXG8ds5mOC2lWZWPlw",
    "https://i.ytimg.com/vi/e2vYFEahiGE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiXuFD6wWiUXG8ds5mOC2lWZWPlw",
    "https://i.ytimg.com/vi/e2vYFEahiGE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiXuFD6wWiUXG8ds5mOC2lWZWPlw",
    "https://i.ytimg.com/vi/e2vYFEahiGE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiXuFD6wWiUXG8ds5mOC2lWZWPlw",
    "https://i.ytimg.com/vi/e2vYFEahiGE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiXuFD6wWiUXG8ds5mOC2lWZWPlw",
    "https://i.ytimg.com/vi/e2vYFEahiGE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiXuFD6wWiUXG8ds5mOC2lWZWPlw",
    "https://i.ytimg.com/vi/e2vYFEahiGE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiXuFD6wWiUXG8ds5mOC2lWZWPlw",
    "https://i.ytimg.com/vi/e2vYFEahiGE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiXuFD6wWiUXG8ds5mOC2lWZWPlw",
    "https://i.ytimg.com/vi/e2vYFEahiGE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiXuFD6wWiUXG8ds5mOC2lWZWPlw",
  ];

  return (
    <section className="bg-gray-800 min-h-screen px-10 py-10">
      <div className="flex gap-10 h-full ">
        <div className="box box--gradient"></div>
        <div className="w-full overflow-hidden">
          <h1 className="text-2xl font-semibold text-white mb-10">
            Start to learn javascript
          </h1>
          <Slider images={data} />
        </div>
      </div>
    </section>
  );
}

export default App;
