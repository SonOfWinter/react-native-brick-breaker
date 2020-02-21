import Matter from "matter-js";
import Constants from "./Constants";

const Physics = (entities, { touches, time }) => {
  let engine = entities.physics.engine;
  Matter.Engine.update(engine, time.delta);

  return entities;
};

export default Physics;
