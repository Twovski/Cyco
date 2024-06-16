import { LogLevel } from "@sapphire/framework";
import { ClientOptions, GatewayIntentBits } from "discord.js";
import { LOGGER_OPTIONS } from "#config/logger";

export const DISCORD_OPTIONS: ClientOptions = {
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMembers
    ],
    logger: {
        level: LogLevel.Info,
        format: LOGGER_OPTIONS
    },
    allowedMentions: { repliedUser: false },
    disableMentionPrefix: true,
    loadMessageCommandListeners: true,
    loadDefaultErrorListeners: true
}