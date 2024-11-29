import TestEnvironment from "jest-environment-puppeteer";
import createJestEnvironment from "./environmentFactory.js";

export default createJestEnvironment(TestEnvironment);
