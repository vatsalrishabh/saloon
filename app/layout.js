'use client';
import "./globals.css";
import { Provider } from "react-redux";
import {store} from "../redux/store";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
         <Provider store={store}>
           {children}
        </Provider>
      </body>
    </html>
  );
}
