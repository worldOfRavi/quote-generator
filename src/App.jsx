import BackgroundVideo from "./components/BackgroundVideo";
import Footer from "./components/Footer";
import QuoteContainer from "./components/QuoteContainer";

export default function App() {
  return (
    <div>
      <BackgroundVideo />
      <main className="h-[90vh] relative flex flex-col justify-center items-center ">
        <QuoteContainer />
      </main>
      <Footer />
    </div>
  );
}
