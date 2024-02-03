import { Outlet } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";

const SharedLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Container>
          <Outlet />
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default SharedLayout;
