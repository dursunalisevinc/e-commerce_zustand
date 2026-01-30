
function App() {

  const changeTheme = (theme: "light" | "dark") => {
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className="h-screen bg-secondary-100 flex  flex-col gap-4 p-4">

      <div className="bg-primary-700">
        Test
      </div>
      <button
        onClick={() => changeTheme("light")}
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        beyaz
      </button>
      <button
        onClick={() => changeTheme("dark")}
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        siyah
      </button>
    </div>
  );
}

export default App;
