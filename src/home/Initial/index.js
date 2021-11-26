import { Link } from "react-router-dom"
import {Component} from "react"

export default class Initial extends Component{
    render(){
        return(
            <main className="col-md-4 col-sm-6 my-3 container text-center">
                <Link to="/login">Ir para a tela de login</Link><br/>
                <Link to="/signup">Ir para a tela de registro</Link>
            </main>
        )
    }
}