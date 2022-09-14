import { styles } from "./styles";
import { ImageBackground } from "react-native";

import backgroundImage from "../../assets/background-galaxy.png";

interface Props {
  children?: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={backgroundImage}
      defaultSource={backgroundImage}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}
