/** @noSelfInFile */
type CallerIdDataTypes = "name" | "num" | "all" | "ANI" | "DNIS" | "RDNIS";
type ReadStatusValues = "OK" | "ERROR" | "HANGUP" | "INTERRUPTED" | "SKIPPED" | "TIMEOUT"
type DialStatusValues = "CANCEL" | "ANSWER" | "NOANSWER" | "BUSY" | "CONGESTION" | "CHANUNAVAIL"

interface CalleridMethods {
  get: () => string;
  set: (str: string) => void;
}

/** @noSelf **/
declare namespace app {
  export function dial(str: string): void;
  export function playback(str: string): void;
  export const hangup: () => void;
  export const record: (name: string, sillence: number, maxDuration: number, opt: string) => void;
  export const ringing: () => void;
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
  export const MixMonitor: (str: string, options?: string, command?: string) => void;
  export const read: (varName: string, fileName: string, maxDigits?: number, options?: string, attempts?: number, timeout?: number) => void

}

type ExtensionType = {
  [key: string]: { [key: string]: (context: string, exten: string) => void };
};

/** @noSelf **/
declare namespace channel {
  export const CALLERID: (type: CallerIdDataTypes) => CalleridMethods;
  export const EXTEN: { get: () => string };
  export const PJSIP_HEADER: (a: string, b: string) => CalleridMethods;
  export const READSTATUS: { get: () => ReadStatusValues };
  export const UNIQUEID: { get: () => string };
  export const MONITOR_FILENAME: { set: (str: string ) => void }
  export const DIALSTATUS: { get: () => DialStatusValues };
}
