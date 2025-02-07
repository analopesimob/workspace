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
            <div className='flex min-h-screen flex-col items-center justify-center gap-3 bg-orange-500 text-center'>
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
                <h1 className='text-4xl font-semibold text-orange-950'>
                    Seu Primeiro Projetinho React
                </h1>
				<CarouselDemo />
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
