import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";
import Layout from "@/components/layout";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
