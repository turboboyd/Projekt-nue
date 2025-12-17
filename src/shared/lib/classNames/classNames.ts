type Mods = Record<string, boolean | string>;

export default function classNames(
    styles: string,
    mods: Mods = {},
    additional: string[] = [],
): string {
    return [
        styles,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
