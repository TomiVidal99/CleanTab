interface Style {
    fs: string,
    ff: string,
    fst: string,
    color: string
}

interface Config {
    styles: {
        time: Style,
        date: {
            fs: string,
            ff: string,
            fst: string,
            color: string
        },
        description: {
            fs: string,
            ff: string,
            fst: string,
            color: string
        },
        weather: {
            fs: string,
            ff: string,
            fst: string,
            color: string
        }
    }
}

export type {
    Config,
    Style
}
