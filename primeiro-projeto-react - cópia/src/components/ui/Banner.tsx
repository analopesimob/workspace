import React from 'react';

const Banner: React.FC = () => {
    return (
        <div className='flex flex-col lg:flex-row py-20 intems-center lg:px-40'>
            <div className='flex w-full items-center justify-center '>
                <img src='Images/AI.png' alt='Imagem de exemplo' className='max-w-xl' />
            </div>

            <div className='flex flex-col items-start text-lg bg-slate-300 py-8 px-4 '>
                <h1 className='mb-4 text-3xl font-bold'>
                    Revolucione seus Negócios Imobiliários!
                </h1>
                <p className='mb-4'>
                    Transforme semanas de burocracia em apenas minutos com nosso
                    sistema de contratos por IA. Economize tempo e dinheiro
                    enquanto se concentra no que realmente importa: VENDER MAIS!
                    
                </p>
                <p className=''>
                    Enquanto os concorrentes ainda estão preparando documentos,
                    você já estará fechando sua próxima venda. Eficiência que se
                    converte diretamente em lucro! 
                </p>
            </div>
        </div>
    );
};

export default Banner; 
