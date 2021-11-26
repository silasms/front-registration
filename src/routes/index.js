import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "../home/Cadastro/index"
import Login from "../home/Login/index"
import Initial from "../home/Initial";

const RouteList = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Initial />} />
                <Route path="/signup" element={<Cadastro />}/>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteList