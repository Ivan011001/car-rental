import { useState } from "react";

import Button from "@/components/ui/Button";
import ModalWindow from "@/components/ModalWindow";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Button
        padX={50}
        padY={10}
        onClick={() => {
          setIsModalOpen((prev) => !prev);
        }}
      >
        Hello
      </Button>

      {isModalOpen && (
        <ModalWindow
          onClose={() => {
            setIsModalOpen((prev) => !prev);
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores dolores
          magnam quae. Ullam cum dolore nihil. Eum culpa voluptatibus sequi excepturi.
          Esse fugiat a saepe exercitationem optio? Alias culpa iusto eveniet nam,
          tempora, in facere, obcaecati esse pariatur nisi dolor. Odio sit eligendi nulla
          autem repudiandae similique! Non labore, doloribus cum, deserunt iure dicta
          consectetur sint iusto consequatur fugiat obcaecati vero enim delectus!
          Provident vitae quisquam quas natus architecto at quis dignissimos, nihil fugit
          est molestiae accusamus ex expedita amet eveniet corporis enim sunt ipsam minima
          inventore repellat fuga consequatur quaerat! Cum alias culpa aperiam suscipit
          ducimus velit voluptate aut!
        </ModalWindow>
      )}
    </div>
  );
};

export default HomePage;
