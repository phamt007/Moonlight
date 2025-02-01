"use client"
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Footer from './Footer';
import PlaidLink from './PlaidLink';
import { useEffect } from 'react';

const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();

    function toggleDarkMode(): void {
        const body = document.body;
        body.classList.toggle('dark');
        const theme = body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    }

    function applySavedTheme(): void {
        const body = document.body;
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
        }
    }
    
    useEffect(() => {
        applySavedTheme();
    }, []);
    
    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link href="/" className="mb-12 cursor-pointer flex item-center gap-2">
                    <Image
                        src="/icons/icon.png" 
                        width={50}
                        height={50}
                        alt="Moonlight Logo"
                        className="size-[40px] max-xl:size-14"
                    />
                    <h1 className="sidebar-logo">
                        Moonlight
                    </h1>
                
                </Link>

                {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                    return (
                        <Link 
                            href={item.route}
                            key={item.label}
                            className={cn('sidebar-link', {'bg-bank-gradient dark:bg-dark-gradient': isActive})}
                        >
                            <div className="relative size-6">
                                <Image
                                    src={item.imgURL}
                                    alt={item.label}
                                    fill
                                    className={cn({'brightness-[3] invert-0': isActive})}
                                />
                            </div>
                            <p className={cn('sidebar-label', {'!text-white dark:!text-blue-6': isActive})}>
                                {item.label}
                            </p>
                        </Link>
                    )
                })}

                <PlaidLink user={user}/>

                <button onClick={toggleDarkMode} className= "text-black-1 dark:text-blue-3">Toggle Dark Mode</button>

            </nav>

            <Footer user={user}/>
        </section>
    )
}

export default Sidebar