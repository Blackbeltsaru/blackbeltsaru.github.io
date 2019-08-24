import {Corvus, Application} from 'corvus-engine';

class Sandbox extends Application {
    constructor() {
        super();
    }

    static createApplication() {
        return new Sandbox();
    }
}

const runSandbox = () => {
    Corvus(Sandbox);
}

runSandbox();