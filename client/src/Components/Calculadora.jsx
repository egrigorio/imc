import React, { useEffect, useState } from "react";

function Calculadora() {
    const [Texto, setTexto] = useState("0");    
    const [Valor, setValor] = useState(0);
    const [Operador, setOperador] = useState('')

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key >= '0' && e.key <= '9') {
                handleClick({ target: { value: e.key } });
            } else if (['+', '-', '*', '/'].includes(e.key)) {
                handleUnico({ target: { value: e.key } });
            } else if (e.key === 'Enter') {
                handleUnico({ target: { value: '=' } });
            } else if (e.key === 'Backspace' || e.key === 'Delete') {
                handleDelete();
            } else if (e.key === '.') {
                handleClick({ target: { value: '.' } });
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [Texto, Valor, Operador]);

    const handleUnico = (e) => {
        const value = e.target.value;
        if (value === '=') {            
            const current = parseFloat(Texto);
            let result = 0;
            switch (Operador) {
                case '+':
                    result = Valor + current;
                    break;
                case '-':
                    result = Valor - current;
                    break;
                case '*':
                    result = Valor * current;
                    break;
                case '/':
                    result = Valor / current;
                    break;
                default:
                    return;
            }
            setTexto(result.toString());
            setValor(0);
            setOperador('');
        } else {
            setOperador(value);
            setValor(parseFloat(Texto));
            setTexto('0');
        }
    };

    const handleClick = (e) => {
        const value = e.target.value;
        if (Texto === "0") {
            setTexto(value);
        } else {
            setTexto(Texto + value);
        }
    };

    const handleDelete = () => {
        if (Texto.length > 1) {
            setTexto(Texto.slice(0, -1));
        } else {
            setTexto("0");
        }
    };

    const BtnUnico = ({ valor }) => (
        <button onClick={handleUnico} value={valor} className="btn join-item">{valor}</button>
    );

    const Btn = ({ valor }) => (
        <button onClick={handleClick} value={valor} className="btn join-item">{valor}</button>
    );

    return (
        <div className="bg-red-900 flex justify-center items-center h-screen">
            <div className="card bg-base-100 w-96 shadow-xl">            
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Calculadora</h2>
                    <div className="bg-base-200 flex px-3 py-3 rounded w-64">
                        <p>
                            {Texto}
                        </p>
                    </div>
                    <div className="card-actions flex flex-col">                        
                        <div className="join gap-8 flex flex-row">
                            {[1, 2, 3].map((valor) => (
                                <Btn key={valor} valor={valor} />
                            ))}
                            <BtnUnico valor={'+'} />
                        </div>    
                        <div className="join gap-8 flex flex-row">
                            {[4, 5, 6].map((valor) => (
                                <Btn key={valor} valor={valor} />
                            ))}
                            <BtnUnico valor={'-'} />
                        </div>    
                        <div className="join gap-8 flex flex-row">
                            {[7, 8, 9].map((valor) => (
                                <Btn key={valor} valor={valor} />
                            ))}
                            <BtnUnico valor={'*'} />
                        </div>    
                        <div className="join gap-8 flex flex-row">
                            <Btn key={0} valor={0} />                            
                            <BtnUnico key={'C'} valor={'C'} />
                            <BtnUnico key={'='} valor={'='} />                            
                            <BtnUnico valor={'/'} />
                        </div>    
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default Calculadora;