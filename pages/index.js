import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="index.css" />
        <meta name="theme-color" content="#000000" />
        <title>Asim - Home</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <h1>
        Hi I'm{" "}
        <span tabIndex="0" className="name" title="pronounced ah-sim">
          Asim
        </span>
      </h1>
    </header>
  );
}

function Main() {
  return (
    <div className="intro">
      <p>i like all things web dev</p>
      <p>i'm still getting better at it tho</p>
      <p>hit me up if you have questions</p>
      <p>i don't really have anything to talk about tho</p>
      <p>check back in later when i do</p>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/asimshamim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>the only social i'm givin out ⟶ </span>
          <svg
            width="24"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            fill="currentColor"
            color="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>LinkedIn icon</title>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
          </svg>
        </a>
      </div>
    </footer>
  );
}
