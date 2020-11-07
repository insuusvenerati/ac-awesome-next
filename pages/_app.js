import "semantic-ui-css/semantic.min.css";
import { FilterContextProvider } from "../context/FilterContext";
import { VillagerContextProvider } from "../context/VillagerContext";

function MyApp({ Component, pageProps }) {
  return (
    <VillagerContextProvider>
      <FilterContextProvider>
        <Component {...pageProps} />
      </FilterContextProvider>
    </VillagerContextProvider>
  );
}

export default MyApp;
