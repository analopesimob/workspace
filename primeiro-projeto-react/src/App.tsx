import React from 'react';
import Card from './components/ui/card';

const App = () => {
    return (
        <>
            <div className='flex max-h-screen justify-between px-52 py-6 text-center'>
                <div className='flex items-center'>
                    <img src='logo3.png' alt='logo' className='w-10' />
                    <h1 className='flex h-10 items-center text-2xl font-semibold text-white'>
                        The Real Estate
                    </h1>
                    <h1> </h1>
                </div>
            </div>

            <div className='flex max-h-screen items-center justify-between gap-12 px-52 py-2 text-center'>
                <div className='flex max-w-xl flex-col items-start text-left'>
                    <h1 className='mb-4 text-5xl font-light text-white'>
                        Transforme burocracia imobiliária em simplicidade com
                        apenas um clique
                    </h1>
                    <p className='py-6 text-white'>
                        Nossa plataforma utiliza inteligência artificial para
                        gerar contratos imobiliários personalizados, seguros e
                        juridicamente válidos em questão de minutos.
                    </p>
                    <button className='transform rounded bg-gradient-to-r from-cyan-800 to-blue-800 px-4 py-2 font-bold text-white shadow-lg transition-all duration-200 hover:scale-105'>
                        Iniciar teste
                    </button>
                </div>
                <img src='contract.png' alt='contract' className='w-80' />
            </div>

            <div className='relative flex w-full items-center border-t border-gray-900 py-1'>
                <div className='flex flex-1 items-center justify-center space-x-2 text-white'>
                    <svg
                        className='h-5 w-5'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                    ></svg>
                    <span className='text-sm font-medium'>
                        Contrato de compra e venda
                    </span>
                </div>

                <div className='h-10 border-l border-gray-700'></div>

                {/* Segunda seção */}
                <div className='flex flex-1 items-center justify-center space-x-2 text-white'>
                    <svg
                        className='h-5 w-5'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                    ></svg>
                    <span className='text-sm font-medium'>
                        Contrato de locação
                    </span>
                </div>

                <div className='h-10 border-l border-gray-700'></div>

                <div className='flex flex-1 items-center justify-center space-x-2 text-white'>
                    <svg
                        className='h-5 w-5'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                    ></svg>
                    <span className='text-sm font-medium'>
                        Correção de contrato
                    </span>
                </div>
            </div>
            <div className='relative flex w-full items-center border-t border-gray-800 py-1'></div>
            <div className='mb-4 flex max-h-screen items-center justify-center gap-12 py-16 text-center text-3xl font-light text-white'>
                Nossos serviços:
            </div>


            <div className='flex max-h-screen flex-col items-center justify-center'>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    <Card
                        title='Card 1'
                        description='Teste'
                    />
                    <Card
                        title='Card 2'
                        description='Teste '
                    />
                    <Card
                        title='Card 3'
                        description='Teste'
                    />
                </div>
            </div>
        </>
    );
};

export default App;
