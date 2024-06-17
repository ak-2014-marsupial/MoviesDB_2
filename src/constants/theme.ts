export enum Theme {
    LIGHT = "app_light_theme",
    DARK = "app_dark_theme",
    GREEN = "app_green_theme",
}

export const nextTheme: Record<Theme, Theme> = {
    [Theme.LIGHT]: Theme.DARK,
    [Theme.DARK]: Theme.GREEN,
    [Theme.GREEN]: Theme.LIGHT,
}