import { LoggerFormatOptions, LoggerStyleBackground, LoggerStyleEffect, LoggerStyleText } from "@sapphire/plugin-logger";
import { bgBlackBright, bgCyanBright, bgGreenBright, bgRedBright, bgYellowBright, bold } from "colorette";

export const LOGGER_OPTIONS: LoggerFormatOptions = {
    info: {
        timestamp: {
            color: {
                background: LoggerStyleBackground.BlackBright,
                effects: [LoggerStyleEffect.Bold]
            },
            formatter: (timestamp: string) => bold(bgBlackBright(' ')) + timestamp + bold(bgBlackBright(' '))
        },
        infix: bold(bgCyanBright(' INFORMATION ')) + "〢",
        message: { text: LoggerStyleText.CyanBright }
    },
    debug: {
        timestamp: {
            color: {
                background: LoggerStyleBackground.BlackBright,
                effects: [LoggerStyleEffect.Bold]
            },
            formatter: (timestamp: string) => bold(bgBlackBright(' ')) + timestamp + bold(bgBlackBright(' '))
        },
        infix: bold(bgGreenBright(' DEBUG ')) + "〢",
        message: {
            text: LoggerStyleText.GreenBright
        }
    },
    error: {
        timestamp: {
            color: {
                background: LoggerStyleBackground.BlackBright,
                effects: [LoggerStyleEffect.Bold]
            },
            formatter: (timestamp: string) => bold(bgBlackBright(' ')) + timestamp + bold(bgBlackBright(' '))
        },
        infix: bold(bgRedBright(' ERROR ')) + "〢",
        message: {
            text: LoggerStyleText.RedBright
        }
    },
    warn: {
        timestamp: {
            color: {
                background: LoggerStyleBackground.BlackBright,
                effects: [LoggerStyleEffect.Bold]
            },
            formatter: (timestamp: string) => bold(bgBlackBright(' ')) + timestamp + bold(bgBlackBright(' '))
        },
        infix: bold(bgYellowBright(' WARN ')) + "〢",
        message: { text: LoggerStyleText.YellowBright }
    },
    fatal: {
        timestamp: {
            color: {
                background: LoggerStyleBackground.RedBright,
                effects: [LoggerStyleEffect.Bold],
            },
            formatter: (timestamp: string) => bold(bgRedBright(' ')) + timestamp + bold(bgRedBright(' '))
        },
        infix: bold(bgBlackBright(' FATAL ')) + "〢",
        message: { text: LoggerStyleText.Black }
    },
}