import Header from "./Header";
import Footer from "./Footer";

export default function App({ children }) {
  return (
    <>
    <Header />

    <div id="main">
      {children}
    </div>
    
    <Footer />
    </>
  );
}