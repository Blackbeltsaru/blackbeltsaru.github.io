class Sandbox extends CApplication {
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