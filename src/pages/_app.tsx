import { Layout } from "@/components/Layout";
import "../globals.css";
const App = ({ Component, pageProps, router }) => {
  return (
    <div>
      <Layout locale={router.query.locale}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};
export default App;
