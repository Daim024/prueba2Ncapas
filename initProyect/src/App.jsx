import React from 'react';
import logo from '../src/assets/img/logo.png';
import { useState } from 'react'
import { useEffect } from 'react'
import GoogleLogin from 'react-google-login'
import { gapi } from 'gapi-script'

export default function Login() {

    const clientID = "745779382020-5nu8ntbc75aue8l93mbalq4kag6gukpd.apps.googleusercontent.com";
    const [user, setUser] = useState({});
    const [loggeIn, setLoggetInfo] = useState(false);

    const onSuccess = (response) => {
        setUser(response.profileObj);
        document.getElementsByClassName("btn").hidden = true;
    }
    const onFailure = (response) => {
        console.log("Something went wrong");
    }
    const handleLogout = () => {
        setUser({});
    }
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientID,
            });
        }
        gapi.load("client:auth2", start);
    });

    return (
        <div className="drelative flex flex-row  justify-center min-h-screen overflow-hidden bg-[#0d1839]">
            <div className=' w-full p-6 m-auto bg-white rounded-md shadow-2xl flex flex-row max-w-4xl rounded-3xl'>
                <div className="  w-full p-6 m-auto bg-white rounded-md  lg:w-full ">
                    <img src={logo} />
                </div>

                <div className="  w-full p-6 m-auto bg-white rounded-md  lg:w-full">
                    <h1 className="text-3xl font-semibold text-center text-black uppercase">
                        Inicio de sesion
                    </h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label
                                for="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Correo / nombre de usuario
                            </label>
                            <input
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-[#0d1839] bg-white border rounded-md focus:border-[#ef1347] focus:ring-[#ef1347] focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                for="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Contraseña
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-[#0d1839] bg-white border rounded-md focus:border-[#ef1347] focus:ring-[#ef1347] focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <a
                            href="#"
                            className="text-xs text-[#054a40] hover:underline"
                        >
                            ¿Contraseña olvidada?
                        </a>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#054a40] rounded-md hover:bg-[#ef1347] focus:outline-none focus:bg-[#ef1347] ">
                                Iniciar sesion
                            </button>
                        </div>
                    </form>
                    <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                        <div className="absolute px-5 bg-white">O inicie sesion con</div>
                    </div>
                    <div className="place-content-center flex mt-4 gap-x-2">
                        <GoogleLogin
                            clientId={clientID}
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            /**buttonText="Continuar con Google"*/
                            render={renderProps => (
                                <button class="flex items-center justify-center px-8 p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[#ef1347]"
                                    onClick={renderProps.onClick} disabled={renderProps.disabled}>

                                    <svg width="25px" height="25px" viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none">
                                        <path fill="#4285F4" d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z" />
                                        <path fill="#34A853" d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z" />
                                        <path fill="#FBBC04" d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z" />
                                        <path fill="#EA4335" d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z" />
                                    </svg>

                                </button>
                            )}
                            cookiePolicy={"single_host_origin"}
                        />
                    </div>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        ¿No tienes una cuenta?{" "}
                        <a
                            href="#"
                            className="font-medium text-[#054a40] hover:underline"
                        >
                            Inscribete
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}