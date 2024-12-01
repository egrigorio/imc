import { useState } from "react";
import React from "react";
import api from "../api/api";

function IMC() {
    const [Peso, setPeso] = useState(0);
    const [Altura, setAltura] = useState(0);
    const [Resultado, setResultado] = useState({ imc: null, estado: null });

    const siglas = {
        pn: 'Peso Normal',
        bp: 'Baixo Peso',
        ep: 'Excesso de Peso',
        ob: 'Obesidade',
        oe: 'Obesidade Extrema',
    };

    const getIMC = async () => {
        const enviar = { peso: Peso, altura: Altura };
        console.log(enviar);
        try {
            const response = await api.get('/imc', { params: enviar });
            setResultado(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-red-900">
            <div className="bg-base-100 shadow-md rounded-lg p-6 w-96">
                <h1 className="text-2xl font-bold text-center mb-4 card-title">
                    Calcule seu IMC
                </h1>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Peso (kg):
                    </label>
                    <input
                        type="number"
                        value={Peso}
                        onChange={(e) => setPeso(parseFloat(e.target.value))}
                        className="w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Ex: 70"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Altura (m):
                    </label>
                    <input
                        type="number"
                        value={Altura}
                        onChange={(e) => setAltura(parseFloat(e.target.value))}
                        className="w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Ex: 1.75"
                    />
                </div>

                <button
                    onClick={getIMC}
                    className="w-full bg-red-500 text-white font-medium py-2 rounded-md hover:bg-red-600 transition duration-200"
                >
                    Calcular
                </button>

                {Resultado.imc && (
                    <div className="mt-6 bg-gray-100 p-4 rounded-md">
                        <h2 className="text-lg font-bold text-gray-700">
                            Resultado:
                        </h2>
                        <p className="text-sm text-gray-700 mt-2">
                            <strong>IMC:</strong> {Resultado.imc}
                        </p>
                        <p className="text-sm text-gray-700 mt-1">
                            <strong>Estado:</strong> {siglas[Resultado.estado]}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default IMC;