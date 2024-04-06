import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";
import Layout from "@/components/layout";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("@popperjs/core/dist/umd/popper.min.js");
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
