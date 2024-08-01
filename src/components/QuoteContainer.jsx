import { TbRefresh } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

function QuoteContainer() {
  const [quote, setQuote] = useState([
    { quote: "Click on Refresh Button ", author: "Author Name" },
  ]);
  const [loading, setLoading] = useState(false);

  async function generateQuotes() {
    const category = "happiness";
    // const apiKey = "/8dg23S4dvR8beZ04xbfPw==MwHtyTtAnkSbrC95";
    const apiKey = import.meta.env.VITE_APIKEY;
    setLoading(true);
    axios
      .get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        headers: { "X-Api-Key": apiKey },
        contentType: "application/json",
      })
      .then((response) => {
        console.log(response.data);
        setQuote(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "Error: ",
          error.response ? error.response.data : error.message
        );
        setLoading(false);
      });
  }

  useEffect(() => {
    // generateQuotes();
  }, []);

  const twiterPost = () => {
    window.open(
      `https://x.com/intent/post?text="${quote[0].quote}" - ${quote[0].author}`
    );
  };

  return (
    <div className="self-center m-auto shadow-lg bg-sky-400 bg-opacity-10 rounded-md h-[50vh] w-[90vw] md:w-[70vw] lg:w-[60vw] flex flex-col justify-between items-center p-4">
      <div className="flex h-60 md:h-80 w-full p-4 quote-text text-white text-center text-xl md:text-2xl justify-center items-center">
        {loading ? (
          <ClipLoader
            color={"#ffffff"}
            loading={loading}
            // cssOverride={override}
            size={70}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <span>{quote[0].quote}</span>
        )}
      </div>

      <div className="w-full md:w-[80%] m-auto flex flex-col md:flex-row justify-between items-center p-4 text-white gap-4">
        <div className="flex justify-center">
          <h1 className="font-medium text-lg px-5 py-2.5 mb-2 text-center">
            {quote[0].author}
          </h1>
        </div>
        <div className="flex gap-4 md:gap-7">
          <button
            onClick={generateQuotes}
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2 transition-colors"
            aria-label="Generate new quote"
          >
            <TbRefresh />
          </button>
          <button
            onClick={twiterPost}
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2 transition-colors"
            aria-label="Share on Twitter"
          >
            <FaXTwitter />
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuoteContainer;
