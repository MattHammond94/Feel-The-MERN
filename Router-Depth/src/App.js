import { 
  createBrowserRouter,
  Route, 
  NavLink, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

// pages:
import Home from './pages/Home';
import About from './pages/About';

// Layouts:
import RootLayout from './layouts/RootLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
)

function App() {
  return(
    <RouterProvider router={router} />
  )
}

// ----- The Below is now considered outdated as of V6.4+ ------
// function App() {
//   return (

//     <BrowserRouter>
//       <header>
//         <nav>
//           <h1>JobBoard</h1>
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="about">About</NavLink>
//         </nav>
//       </header>
//       <main>
//         <Routes>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//         </Routes>
//       </main>
//     </BrowserRouter>
//   );
// }

export default App
