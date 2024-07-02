
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import Introduction from "@/components/Introduction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="site-wrapper">
      <header className="grid site-header">
        <h1 className="visually--hidden">
          David Christian Jones, User Interface Engineer.
        </h1>
        <Logo />
      </header>
      <main className="site-main" role="main">
        <div className="layout layout--home">
          <Hero />
          <div className="inner-wrapper">
            <div className="inner-action">
              <Logo />
            </div>
            <Introduction />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
