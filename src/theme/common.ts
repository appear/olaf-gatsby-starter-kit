export type FontSize = "0.75" | "0.8125" | "0.875" | "1" | "1.5"

export interface CommonTheme {
  fontSize: FontSize[]
}

export const COMMON_THEME: CommonTheme = {
  fontSize: ["0.75", "0.8125", "0.875", "1", "1.5"], // 12px, 13px, 14px, 16px, 24px
}
