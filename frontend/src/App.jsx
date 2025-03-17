import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { PATHS } from "./router/paths";
// PAGES
import { Homepage } from "./pages/Homepage";
import { Boxespage } from "./pages/Boxespage"; // Poprawiono "Boxespage" na "BoxesPage"
import { Itemspage } from "./pages/Itemspage";   // Poprawiono "Itemspage" na "ItemsPage"
import { Errorpage } from "./pages/Errorpage";
import { Settingspage } from "./pages/Settingspage";
import { OneBoxPage } from "./pages/OneBoxPage";
import { MainPopup } from "./components/popups/MainPopup";

// Tworzenie routera
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <MainPopup />
        <Outlet />
      </>
    ),
    children: [
      { path: PATHS.HOME, element: <Homepage /> },
      { path: PATHS.BOXES, element: <Boxespage /> },
      { path: PATHS.ITEMS, element: <Itemspage /> },
      { path: PATHS.SETTINGS, element: <Settingspage /> },
      { path: PATHS.BOX_PAGE, element: <OneBoxPage /> }
    ],
    errorElement: <Errorpage />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} future={{ v7_startTransition: true, v7_relativeSplatPath: true }} />
    </>
  );
}

export default App;