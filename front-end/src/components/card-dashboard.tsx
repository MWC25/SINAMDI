'use client';
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { TrendingDownIcon, TrendingUpIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function CardDashboard({
    description,
    title,
    trending,
    details,
}: Readonly<{
    description: string;
    title: string | number;
    trending?: string;
    details?: string;
}>) {
    return (
        <Card className="h-fit w-full lg:w-[440px]">
            <CardHeader className="relative">
                <CardDescription>{description}</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                    {title}
                </CardTitle>
                <div className="absolute right-4 top-4">
                    {trending ? (
                        <Badge
                            variant="outline"
                            className="flex gap-1 rounded-lg text-xs">
                            {trending[0] === '-' ? (
                                <TrendingDownIcon className="size-3" />
                            ) : (
                                <TrendingUpIcon className="size-3" />
                            )}
                            {trending}
                        </Badge>
                    ) : null}
                </div>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1 text-sm">
                {trending ? (
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        Tendência de {trending[0] === '-' ? 'queda' : 'aumento'}{' '}
                        esse mês{' '}
                        {trending[0] === '-' ? (
                            <TrendingDownIcon className="size-3" />
                        ) : (
                            <TrendingUpIcon className="size-3" />
                        )}
                    </div>
                ) : null}
                <div className="text-muted-foreground">{details}</div>
            </CardFooter>
        </Card>
    );
}
