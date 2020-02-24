import { Dimensions } from "react-native";

export default Constants = {
  MAX_WIDTH: Dimensions.get("screen").width,
  MAX_HEIGHT: Dimensions.get("screen").height,
  
  WALL_HEIGHT: Dimensions.get("screen").height,
  WALL_WIDTH: Dimensions.get("screen").height / 52,

  RACKET_WIDTH: Dimensions.get("screen").width / 4,
  RACKET_HEIGHT: Dimensions.get("screen").height / 52,
  RACKET_Y_POSITION: Dimensions.get("screen").height - (Dimensions.get("screen").height / 9),
  RACKET_START_X_POSITION: Dimensions.get("screen").width / 2,
  RACKET_MIN_X_POSITION: (Dimensions.get("screen").width / 8) + (Dimensions.get("screen").height / 52),
  RACKET_MAX_X_POSITION: Dimensions.get("screen").width - (Dimensions.get("screen").width / 8) - (Dimensions.get("screen").height / 52),

};
