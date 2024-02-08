import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";

const inter = Inter( { subsets: [ "latin" ] } );

export const metadata = {
  title: "Khan Bio Tech",
  description: "Khan Bio tech is a biotechnology company that specializes in the development of new drugs and medical devices.",
};

export default function RootLayout( { children } ) {
  return (
    <html lang="en">
      <body className={ inter.className }>{ children }</body>
      <PrelineScript />
    </html>
  );
}
