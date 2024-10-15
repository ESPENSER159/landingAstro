import { useLottie } from "lottie-react";
import AI from "../../lottie/AI.json";

const App = () => {
  const options = {
    animationData: AI,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default App;