"use client"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/app/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Footer from "./Footer"

  

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
        <Sheet>
            <SheetTrigger>
                <Image
                    src="/icons/hamburger.svg"
                    width={30}
                    height={30}
                    alt="menu"
                    className="cursor-pointer"
                />
            </SheetTrigger>
            <SheetContent side="left" className="border-non bg-white dark:bg-black-1">
                <Link href="/" className="cursor-pointer flex item-center gap-1 px-4">
                    <Image
                        src="/icons/Icon.png" 
                        width={34}
                        height={34}
                        alt="Moonlight Logo"
                    />
                    <h1 className="text-26 font-ibm-flex-serif font-bold text-black-1 dark:text-blue-3">
                        Moonlight
                    </h1>
                
                </Link>
                <div className="movilenav-sheet">
                    <SheetClose asChild>
                        <nav className="flex h-full flex-col gap-6 pt-16 text-white dark:text-blue3">
                            {sidebarLinks.map((item) => {
                                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                                return (
                                    <SheetClose asChild key={item.route}>
                                        <Link 
                                            href={item.route}
                                            key={item.label}
                                            className={cn('mobilenav-sheet_close w-full', {'bg-bank-gradient': isActive})}
                                        >
                                            <Image
                                                src={item.imgURL}
                                                alt={item.label}
                                                width={20}
                                                height={20}
                                                className={cn({'brightness-[3] invert-0': isActive})}
                                            />
                                            <p className={cn('text-16 font-semibold text-black-2 dark:text-blue-3', {'text-white dark:text-blue-3': isActive})}>
                                                {item.label}
                                            </p>
                                        </Link>
                                    </SheetClose>
                                )
                            })}
                            USER
                        </nav>
                    </SheetClose>

                    <Footer user={user}/>
                </div>
            </SheetContent>
        </Sheet>

    </section>
  )
}

export default MobileNav