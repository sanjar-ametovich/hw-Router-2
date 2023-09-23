import {BrowserRouter, Route, Routes} from "react-router-dom";
import Router from "./pages/Router.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Router/>}/>
                <Route path="/users" element={<Router/>}/>
                <Route path="/users/:id" element={<Router/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
