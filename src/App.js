import "./App.css";

function App() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={require('./landing-page-girl.png')} alt="Display" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Blessing Krofegha
        </div>
        <p className="text-gray-700 text-base">
          When im not coding i switch to netflix with cold coffee
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Software Engineer
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Writer
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Public Speaker
        </span>
      </div>
    </div>
  );
}

export default App;
