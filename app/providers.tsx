'use client'

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <NextThemesProvider>
                <NuqsAdapter>
                    {children}
                </NuqsAdapter>
            </NextThemesProvider>
        </NextUIProvider>
    )
}