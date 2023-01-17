import Image from "next/image";
import styles from "@/styles/About.module.css";

const about = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vero
        eius itaque velit error, doloremque, aut voluptas assumenda provident
        repellat magnam magni ipsa exercitationem corrupti. Reiciendis facilis
        maiores a cum?
      </p>
      <Image src="/images/charizard.png" width="300" height="300" alt="Foto de um pokemon" />
    </div>
  );
};

export default about;
