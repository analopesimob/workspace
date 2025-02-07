import { Heart } from 'lucide-react';

import CarouselDemo from '@/components/carousel-demo';
import { Button } from '@/components/ui/button';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from '@/components/ui/alert-dialog';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

const App = () => {
    return (
        <>
            <div className='flex min-h-screen flex-col items-center justify-center gap-3 bg-slate-500 text-center'>
                <div className='flex items-center justify-center gap-2'>
                    <a href='https://vite.dev' target='_blank'>
                        <img src={viteLogo} className='logo' alt='Vite logo' />
                    </a>
                    <a href='https://react.dev' target='_blank'>
                        <img
                            src={reactLogo}
                            className='logo react'
                            alt='React logo'
                        />
                    </a>
                    <span className='text-4xl'>😍</span>
                </div>
                <h1 className='text-4xl font-semibold text-slate-950'>
                    Seu Primeiro Projetinho React orange
                </h1>

                <div className='flex items-center justify-center gap-96'>
                    <CarouselDemo
                        className='bg-slate-900'
                        images={[
                            'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            'https://images.unsplash.com/photo-1546518071-fddcdda7580a?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            'https://images.unsplash.com/photo-1549275301-c9d60945be6b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        ]}
                    />

                    <CarouselDemo
                        className='bg-slate-900'
                        slideClassName='aspect-square'
                        images={[
                            'https://images.unsplash.com/photo-1549275301-c9d60945be6b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            'https://images.unsplash.com/photo-1546518071-fddcdda7580a?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        ]}
                    />
                </div>

                <div className='card'>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button>
                                Clique Aqui
                                <Heart />
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>
                                    Parabéns! Você fez seu primeiro projeto em
                                    react!
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                    Você clicou no botão e abriu este diálogo.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                <AlertDialogAction>Continuar</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
        </>
    );
};

export default App;
