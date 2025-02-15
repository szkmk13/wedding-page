'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Link, Loader, SendHorizonal, X } from 'lucide-react';
import * as React from 'react';

import { Button, type ButtonProps } from '@/components/extendui/button';
import { cn } from '@/lib/utils';

const useStatus = ({ resloveTo }: { resloveTo: 'success' | 'error' }) => {
    const [status, setStatus] = React.useState('idle');
    const onSubmit = () => {
        setStatus('loading');
        setTimeout(() => {
            setStatus(resloveTo);
        }, 2000);
    };

    return {
        onSubmit,
        status,
    };
};

export const SendingButton: React.FC<ButtonProps> = React.forwardRef<
    HTMLButtonElement,
    ButtonProps
>(({ children, className, ...props }, ref) => {
    const { status, onSubmit } = useStatus({ resloveTo: 'success' });
    return (
        <Button
            ref={ref}
            disabled={status == 'loading'}
            onClick={onSubmit}
            {...props}
            variant={status === 'error' ? 'destructive' : 'default'}
            className={cn('w-32', className)}
        >
            {/* Dodaje do kalendarza
                    <Link target="_blank" href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250919T140000Z%2F20250920T020000Z&details=Do%20zobaczenia&location=Karczma%20%C5%81ab%C4%99d%C5%BA%20Hotel%20Mazury%2C%20ul.%20Marsa%202%2C%2014-200%20I%C5%82awa%2C%20Polska&text=Wesele%20Wiktorii%20i%20Szymona%F0%9F%92%92"></Link> */}
        
            <AnimatePresence mode="wait">
                {status === 'idle' && (
                    <>
                        <motion.span
                            key={crypto.randomUUID()}
                            exit={{
                                opacity: 0,
                                transition: { duration: 0.6 },
                            }}
                            style={{ display: 'flex', alignItems: 'center' }}
                        >
                            {children}
                        </motion.span>
                        <motion.span
                            key={crypto.randomUUID()}
                            exit={{
                                opacity: 0,
                                x: 15,
                                transition: { duration: 0.6, type: 'spring' },
                            }}
                            style={{ display: 'flex', alignItems: 'center' }}
                        >

                            <SendHorizonal className="h-4 w-4 ml-2" />
                        </motion.span>
                    </>
                )}
                {status === 'loading' && (
                    <motion.span
                        key={crypto.randomUUID()}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 100, y: 0, transition: { delay: 0 } }}
                        exit={{ opacity: 0, y: -15, transition: { duration: 0.3 } }}
                    >
                        <Loader className="animate-spin" size="19" />
                    </motion.span>
                )}
                {['success', 'error'].includes(status) && (
                    <motion.span
                        key={crypto.randomUUID()}
                        initial={{ opacity: 0, y: 15, scale: 0 }}
                        animate={{
                            opacity: 100,
                            y: 0,
                            scale: 1,
                            transition: { delay: 0.1, duration: 0.4 },
                        }}
                        exit={{ opacity: 0, y: -15, transition: { duration: 0.3 } }}
                    >
                        {status === 'success' && <Check size="20" />}
                        {status === 'error' && <X size="20" />}
                    </motion.span>
                )}
            </AnimatePresence>
        </Button>
    )
});

SendingButton.displayName = 'SendingButton';