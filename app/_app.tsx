import { AppProps } from "next/app";
import "./globals.css";

// This default export is required in a new `pages/_app.js` file.
const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default MyApp;
