export interface Config {
    [key: string]: Style | generalConfiguration,
    time: Style,
    date: Style,
    description: Style,
    weather: Style,
    background: Style,
    general: generalConfiguration
}

export interface Style {
    [key: string]: string | undefined,
    '--fs'?: string,
    '--fw'?: string,
    '--fst'?: string,
    '--ff'?: string,
    '--fc'?: string,
    '--bg'?: string,
}

export interface generalConfiguration {
    [key: string]: string | boolean,
    locale: string,
    key: string,
    query: string,
    queryCheckbox: boolean,
    background: string,
    location: string,
    locationCheckbox: boolean,
    weatherDescriptionCheckbox: boolean,
    dateFormat: string,
    dateFormatCheckbox: boolean,
}
