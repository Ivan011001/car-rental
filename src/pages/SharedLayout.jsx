import { Outlet } from "react-router-dom";

import Header from "@/components/Header";
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
    </>
  );
};

export default SharedLayout;
