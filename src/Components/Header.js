import React, {Component} from "react";


class Header extends Component {



    render() {
        return (
            <div className="row justify-content d-flex flex-row mr-0 ml-0 mb-2">

                <div className="col-2 text-center d-none d-sm-block">
                    <img src="/logo.png" className="img-fluid" alt="logo"/>
                </div>
                <div className="col-8 col-sm-6">
                    <div className="row">
                        <div className="col-12 col-sm-9">


                        <b>Nombre Elección</b>
                        <br/>
                        Nombre Organización
                        <br/>
                        Estado : <span className="badge badge-success">Abierta</span>

                            </div>

                        <div className="col-12 col-sm-3">

                        <a className="btn btn-outline-dark btn-sm mt-2" href="/">Cambiar Elección</a>

                        </div>
                    </div>
                </div>

                <div className="col-4 text-right">
                    Usuario

                    <button className="btn btn-outline-dark ml-2">Salir</button>
                </div>

            </div>
        )
    }
}

export default Header;