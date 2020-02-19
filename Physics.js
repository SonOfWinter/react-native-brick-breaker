import Matter from "matter-js";
import Constants from "./Constants";

const Physics = (entities, { touches, time }) => {
  let engine = entities.physics.engine;

  let racket = entities.racket.body;

  let ball = entities.ball.body;
  //console.log(ball)

  touches.forEach(t => {
    if (t.type === "move") {
      let newRacketX = racket.position.x;
      if (
        (t.delta.pageX < 0 &&
          racket.position.x >= Constants.RACKET_MIN_X_POSITION) ||
        (t.delta.pageX > 0 &&
          racket.position.x <= Constants.RACKET_MAX_X_POSITION)
      ) {
        newRacketX = racket.position.x + t.delta.pageX;
      }

      if (newRacketX < Constants.RACKET_MIN_X_POSITION) {
        newRacketX = Constants.RACKET_MIN_X_POSITION;
      }

      if (newRacketX > Constants.RACKET_MAX_X_POSITION) {
        newRacketX = Constants.RACKET_MAX_X_POSITION;
      }

      Matter.Body.setPosition(racket, { x: newRacketX, y: racket.position.y });
    }
  });

  Matter.Engine.update(engine, time.delta);

  return entities;
};

export default Physics;
