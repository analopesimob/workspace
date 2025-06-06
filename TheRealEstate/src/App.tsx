import React from 'react';
import Card from './components/ui/card';
import { Scale, House, SearchCheck, LogIn } from 'lucide-react';
import Descricao from './components/ui/descricao';
import Rodape from './components/ui/Rodape';
import Banner from './components/ui/Banner';

const App = () => {
    return (
        <>
            <div className=''>
                <div className='flex max-h-screen justify-between rounded-t-3xl bg-gradient-to-r from-purple-600 to-indigo-700 py-6 text-center lg:px-40'>
                    <div className='flex items-center'>
                        <img src='logo3.png' alt='logo' className='w-10' />
                        <h1 className='flex h-10 items-center text-2xl font-semibold text-white'>
                            The Real Estate
                        </h1>
                    </div>

                    <nav className='hidden items-center space-x-6 md:flex'>
                        <a
                            href='#'
                            className='text-white hover:text-purple-400'
                        >
                            Início
                        </a>
                        <a
                            href='#'
                            className='text-white hover:text-purple-400'
                        >
                            Sobre
                        </a>
                        <a
                            href='#'
                            className='text-white hover:text-purple-400'
                        >
                            Serviços
                        </a>
                        <a
                            href='#'
                            className='text-white hover:text-purple-400'
                        >
                            Contato
                        </a>
                        <a
                            href='#'
                            className='hidden items-center space-x-6 text-white hover:text-purple-400 md:flex'
                        >
                            {<LogIn size={18} className='text-white' />} Entrar
                        </a>
                    </nav>
                </div>

                <div className='flex max-h-screen items-center justify-between gap-12 rounded-b-3xl bg-gradient-to-r from-purple-600 to-indigo-700 px-8 py-12 text-center lg:px-40'>
                    <div className='flex max-w-xl flex-col items-start text-left'>
                        <h1 className='mb-4 text-4xl font-light text-white lg:text-5xl'>
                            Transforme burocracia imobiliária em simplicidade
                            com apenas um clique
                        </h1>
                        <p className='py-6 text-purple-100'>
                            Nossa plataforma utiliza inteligência artificial
                            para gerar contratos imobiliários personalizados,
                            seguros e juridicamente válidos em questão de
                            minutos.
                        </p>
                        <button className='transform rounded-2xl bg-indigo-800 px-6 py-3 font-bold text-white shadow-lg transition-all duration-200 hover:scale-105'>
                            Iniciar teste
                        </button>
                    </div>
                    <img
                        src='contract.png'
                        alt='contract'
                        className='hidden w-80 md:block'
                    />
                </div>
            </div>

            <div className='bg-slate-300 px-8 py-32 lg:px-40'>
                <h2 className='mb-12 text-center text-3xl font-light text-gray-900'>
                    Nossos serviços
                </h2>

                <div className='mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    <Card
                        variant='feature'
                        title='Contratos de Compra e Venda'
                        description='Criamos contratos personalizados para compra e venda de imóveis seguindo todas as normas legais vigentes.'
                        icon={<Scale size={32} className='text-purple-600' />}
                    />
                    <Card
                        variant='feature'
                        title='Contratos de Locação'
                        description='Elaboramos contratos de aluguel completos que protegem os direitos de proprietários e inquilinos.'
                        icon={<House size={32} className='text-purple-600' />}
                    />
                    <Card
                        variant='feature'
                        title='Análise e Correção'
                        description='Revisamos contratos existentes para garantir conformidade legal e sugerir melhorias.'
                        icon={
                            <SearchCheck
                                size={32}
                                className='text-purple-600'
                            />
                        }
                    />
                </div>
            </div>
            <Descricao />
            <Banner />
            <Rodape />
        </>
    );
};

export default App;
