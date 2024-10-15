import { useLottie } from "lottie-react";
import Face from "../../lottie/faceAnimation";

const App = () => {
  const options = {
    animationData: Face,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default App;