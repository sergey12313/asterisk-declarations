/** @noSelfInFile */
type CallerIdDataTypes = "name" | "num" | "all" | "ANI" | "DNIS" | "RDNIS";

interface CalleridMethods {
  get: () => string;
  set: (str: string) => void;
}

/** @noSelf **/
declare namespace app {
  export function dial(str: string): void;
  export function playback(str: string): void;
  export const hangup: () => void;
  export const set: (str: string) => void;
  export const answer: () => void;
  export const musiconhold: (str?: string) => void;
  export const transfer: (str: string) => void;
  export const playtones: (str: string) => void;
  export const wait: (time: number) => void;
  export const noop: (str: string) => void;
  export const MP3Player: (str: string) => void;
  export const queue: (str: string) => void;
  export const SayDigits: (num: number,) => void;
  export const SayNumber: (num: number, gender: 'f' | 'm' | 'c') => void;
  export const SayAlpha: (str: string) => void;
  export const SayPhonetic: (str: string) => void;

}

type ExtensionType = {
  [key: string]: { [key: string]: (context: string, exten: string) => void };
};

/** @noSelf **/
declare namespace channel {
  export const CALLERID: (type: CallerIdDataTypes) => CalleridMethods;
  export const EXTEN: { get: () => string };
  export const PJSIP_HEADER: (a: string, b: string) => CalleridMethods;
}
