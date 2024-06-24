import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import GlobalStyle from "@/src/components/globalstyles";
import { NextUIProvider } from "@nextui-org/react";
import "../../styles.css";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NextUIProvider>
          {/* <GlobalStyle /> */}
          <main className="light text-foreground bg-background">

            <Component {...pageProps} />
          </main>
        </NextUIProvider>
      </ThemeProvider>
    </>
  );
}
