interface Style {
    fs?: string,
    ff?: string,
    fst?: string,
    color?: string,
    background?: string
}

interface Config {
    styles: {
        time: Style,
        date: Style,
        description: Style,
        weather: Style,
        background: Style
    }
}

export type {
    Config,
    Style
}
