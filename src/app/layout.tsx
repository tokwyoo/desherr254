import type {Metadata} from "next";
import "./globals.css";
import {Patrick_Hand as CustomFont} from 'next/font/google'
import Link from "next/link";

const font = CustomFont({
    weight: '400',
    subsets: ['latin'],
})


export const metadata: Metadata = {
    title: "Desherr254",
    description: "",
};

export default function RootLayout({children,}:
    Readonly<{children: React.ReactNode; }>){
    return (
        <html lang="en" className={font.className}>

        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>

        <body>

        {/*================================================================
        PANTALLA COMPLETA, DOS ELEMENTOS -> CAJA PRINCIPAL Y FOOTER
        ================================================================*/}
        <div className="flex flex-col h-screen items-center justify-center">

            {/*================================================================
            CAJA PRINCIPAL CON HEADER Y SIDEBAR+MAIN
            ================================================================*/}
            <div className="flex flex-col w-5/6 lg:w-1/2 border rounded-lg h-1/2 lg:h-2/3 overflow-hidden">

                {/*================================================================
                HEADER
                ================================================================*/}
                <header className="border-b text-center">
                    <h2 className="font-bold text-2xl p-2">Desherr254</h2>
                </header>

                {/*================================================================
                SIDEBAR+MAIN
                ================================================================*/}
                <div className="flex flex-row flex-1 overflow-hidden">

                    {/*================================================================
                    SIDEBAR
                    ================================================================*/}
                    <aside className="flex flex-col w-auto max-w-1/3 lg:min-w-1/6 p-4 overflow-y-auto">
                        <nav>
                            <ul>
                                <li className="mb-2"><Link href="/" className="hover:text-blue-600 cursor-pointer">Home</Link></li>
                                <li className="mb-2"><Link href="/about" className="hover:text-blue-600 cursor-pointer">About Me</Link></li>
                                <li className="mb-2"><Link href="/art" className="hover:text-blue-600 cursor-pointer">Art</Link></li>
                                <li className="mb-2"><Link href="/mods" className="hover:text-blue-600 cursor-pointer">Mods</Link></li>
                                <li className="mb-2"><Link href="/songs" className="hover:text-blue-600 cursor-pointer">Songs</Link></li>
                                <li className="mb-2"><Link href="/friends" className="hover:text-blue-600 cursor-pointer">Friends</Link></li>
                                <li className="mb-2"><Link href="/socials" className="hover:text-blue-600 cursor-pointer">Socials</Link></li>
                                <li className="mb-2"><Link href="/credits" className="hover:text-blue-600 cursor-pointer">Credits</Link></li>
                            </ul>
                        </nav>
                    </aside>

                    {/*================================================================
                    MAIN
                    ================================================================*/}
                    <main className="flex-1 p-4 overflow-y-auto">
                        {children}
                    </main>

                </div>
            </div>

            {/*================================================================
            FOOTER
            ================================================================*/}
            <footer className="text-center p-6 flex-shrink-0">
                &copy; Copyright 2025 Desherr254
            </footer>

        </div>
        </body>
        </html>
    );
}
