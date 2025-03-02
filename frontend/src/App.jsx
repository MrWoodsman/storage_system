import { createBrowserRouter, RouterProvider } from "react-router-dom";
// PAGES
import { Homepage } from "./pages/Homepage";
import { Boxespage } from "./pages/Boxespage"; // Poprawiono "Boxespage" na "BoxesPage"
import { Itemspage } from "./pages/Itemspage";   // Poprawiono "Itemspage" na "ItemsPage"

// Tworzenie routera
const router = createBrowserRouter([

  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/boxes",
    element: <Boxespage />,
  },
  {
    path: "/items",
    element: <Itemspage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} future={{ v7_startTransition: true, v7_relativeSplatPath: true }} />
    </>
  );
}

export default App;