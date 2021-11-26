import { Component } from "react"
import { Formik, Form, Field } from "formik"
import api from "../../services/api"
import { Link } from "react-router-dom"

export default class Cadastro extends Component{
    constructor() {
        super()
        this.state = {
            message: ""
        }
    }


    handleSubmit = async ({ email, nome, password }) => {
        try{
            const response = await api.post("/usuario/signup", {
                "name": nome,
                "email": email,
                "password": password
            })
            this.setState({message: response.data})
        }
        catch (error){
            console.log(error)
        }
    }

    render(){
        return(
            <>
                <Link to="/login">Ir para a tela de login</Link>
                <main className="col-md-4 col-sm-6 my-3 container text-center">
                    <h1>Tela de cadastro</h1>
                <Formik initialValues={{email: "", nome: "", password: ""}} onSubmit={this.handleSubmit}>
                    <Form className="m-5">
                        <h5 className="my-3">Nome: </h5>
                        <Field input="text" required placeholder="Insira aqui seu nome" name="nome" id="nome" className="form-control my-1"/>
                        <h5 className="my-3">Email: </h5>
                        <Field input="email" required placeholder="Insira aqui seu email" name="email" id="email" className="form-control my-1"/>
                        <h5 className="my-3">Senha: </h5>
                        <Field input="password" required placeholder="Insira aqui sua senha" name="password" id="password" className="form-control my-1"/>
                        <button type="submit" className="btn btn-primary">Cadastrar</button>
                    </Form>
                </Formik>
                {this.state.message && <p className="text-success">{this.state.message}</p>}
                </main>
            </>
        )
    }
}