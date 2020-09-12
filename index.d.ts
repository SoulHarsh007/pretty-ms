declare namespace prettyMilliseconds {
  interface Options {
    readonly secondsDecimalDigits?: number;
    readonly millisecondsDecimalDigits?: number;
    readonly keepDecimalsOnWholeSeconds?: boolean;
    readonly compact?: boolean;
    readonly unitCount?: number;
    readonly verbose?: boolean;
    readonly colonNotation?: boolean;
  }
}
export function prettyMS(
  milliseconds: number,
  options?: prettyMilliseconds.Options
): string;
