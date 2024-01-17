import { Outlet } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import { UserProvider } from "./context/UserContext";

function App() {

  return (
    // le userProvider permet de fournir les infos du user à tous les enfants de APP (via un context)
    <UserProvider>
      <div> 
          <div>
            <NavBar />
            <Outlet/>
          </div>
        </div>
    </UserProvider>
        
  );
}

export default App;
