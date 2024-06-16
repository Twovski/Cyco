import '#utils/start/setup';
import { initContainer } from '#utils/start/container';
import { login } from "#utils/start/login";

async function main() {
    initContainer();
    await login();
}

main();