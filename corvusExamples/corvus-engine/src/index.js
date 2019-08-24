import Application from './Corvus/Core/Application.js';
import EntryPoint from './Corvus/EntryPoint.js';
import CorvusKey from './Corvus/Core/KeyCodes.js';
import CorvusMouseButton from './Corvus/Core/MosueButtonCodes.js';
import WindowAnimator from './test/renderer/WindowContext.js';


class Sandbox extends Application {
    constructor() {
        super();
    }

    static createApplication() {
        return new Sandbox();
    }
}

const runSandbox = () => {
    EntryPoint(Sandbox);
}

runSandbox();