import React from "react";
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp;
