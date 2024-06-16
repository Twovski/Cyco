import { DISCORD_OPTIONS } from "#libs/config/discord";
import { SapphireClient } from "@sapphire/framework";
import { envParseString } from "@skyra/env-utilities";

export async function login() {
    const client = new SapphireClient(DISCORD_OPTIONS);
    const token = envParseString('DISCORD_TOKEN');
    return client.login(token);
}