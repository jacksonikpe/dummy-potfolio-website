import react from "react";
import Theme from "../styles/theme";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <>
      <Theme>
        {loading ? <Loader loading={loading} /> : <Component {...pageProps} />}
      </Theme>
    </>
  );
}
