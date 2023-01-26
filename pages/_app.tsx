import React, { useState } from "react";
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { theme, theme2, themeLight, themeDark } from '../config/theme';
import createEmotionCache from '../config/createEmotionCache';
import Header from "../components/Header";
import '../styles/globals.css'
import Link from 'next/link';
//import { stack as Menu } from 'react-burger-menu';
//import { scaleDown as Menu } from 'react-burger-menu';
import { scaleRotate as Menu } from 'react-burger-menu';
import SettingsIcon from '@mui/icons-material/Settings';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [currentTheme, setCurrentTheme] = useState(themeDark);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };
  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={currentTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <div id="outer-container">
          <Menu
            right
            pageWrapId={'page-wrap'}
            outerContainerId={'outer-container'}
            customBurgerIcon=<SettingsIcon/>
            isOpen={isMenuOpen}
            onStateChange={handleStateChange}
          >
            <Link href="/settings" className="menu-item" onClick={handleCloseMenu}>Settings</Link>
            <Link href="/" className="menu-item" onClick={handleCloseMenu}>Home</Link>
            <Link href="/" className="menu-item" onClick={handleCloseMenu}>User Info</Link>
            <Link href="/" className="menu-item" onClick={handleCloseMenu}>Server Logs</Link>
          </Menu>
          <div id="page-wrap">
            <div className="appPane">
              <div className="appContent">
                <Component {...pageProps} onToggleTheme={() => setCurrentTheme(currentTheme == themeLight ? themeDark : themeLight)}/>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}
