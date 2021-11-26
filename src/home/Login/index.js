import { Component } from "react";
import api from "../../services/api"
import { Formik, Form, Field } from "formik";
import { Link } from 'react-router-dom';

export default class Login extends Component{
    constructor(){
        super()
        this.state = {
            connect: false
        }
    }



    handleSubmit = async ({email, password}) => {
        try{
            const response = await api.post("/usuario/login", {
                email,
                password
            })
            this.setState({connect: response.data && true})
        }
        catch (error){
            console.log(error)
        }
    }

    render(){
        return(
            <>
                <Link to="/signup">Registre-se</Link>
                <main className="col-md-4 col-sm-6 my-3 container text-center">
                    <h1>Login</h1>
                <Formik initialValues={{email: "", password: ""}} onSubmit={this.handleSubmit}>
                    <Form>
                        <Field input="email" required name="email" id="email" placeholder="Insira aqui seu email" className="form-control my-1"/>
                        <Field input="password" required name="password" id="password" placeholder="Insira aqui sua senha" className="form-control my-1"/>
                        <button input="submit" className="btn btn-primary">Login</button>
                    </Form>
                </Formik>
                {this.state.connect && <p className="text-success">Logado com sucesso</p>}
                </main>
            </>
        )
    }
}