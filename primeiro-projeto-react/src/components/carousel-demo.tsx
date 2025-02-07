import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';

const CarouselDemo = ({ 
	className = 'bg-orange-900',
	slideClassName = '',
	images = [
		'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1546518071-fddcdda7580a?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	]
}: { 
	className?: string;
	slideClassName?: string;
	images?: string[];
}) => {
    return (
        <Carousel
            className={cn(
                'w-full max-w-xs rounded-3xl px-3 py-4',
				className
            )}
        >
            <CarouselContent>
				{images.map((image, index) => {
					return (
						<CarouselItem data-slide={index}
							key={index}>
							<Card className='overflow-hidden rounded-3xl border-none bg-transparent'>
								<CardContent
									className={cn('flex aspect-[9/16] items-center justify-center bg-cover p-6', slideClassName)}
									style={{
										backgroundImage: `url(${image})`
									}}
								/>
							</Card>
						</CarouselItem>

					);
				})}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default CarouselDemo;
