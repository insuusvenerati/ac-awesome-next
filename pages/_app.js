import "semantic-ui-css/semantic.min.css";
import { FilterContextProvider } from "../context/FilterContext";

function MyApp({ Component, pageProps }) {
  return (
    <FilterContextProvider>
      <Component {...pageProps} />
    </FilterContextProvider>
  );
}

export default MyApp;
