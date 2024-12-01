import React from "react";

function Index() {
    return (
        <>
            <div className="bg-red-900 flex items-center justify-center h-screen">
                <div className="flex flex-col gap-5">
                    <a href='calculadora' className="btn btn-wide">Calculadora</a>
                    <a href="imc" className="btn btn-wide">IMC</a>
                </div>
            </div>
        </>
        
    )
}

export default Index