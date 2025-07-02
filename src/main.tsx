import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Layout } from "./ui/Layout";
import { ProductCard } from "./ui/ProductCard";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <ProductCard
        title="iPhone 16 Pro 128 ГБ"
        origin="Китай"
        price={34900}
        imageUrl="https://avatars.mds.yandex.net/get-mpic/5335973/2a0000019217c02f515c38a59b8a3fa6b300/optimize"
      />
    </Layout>
  </StrictMode>,
);
