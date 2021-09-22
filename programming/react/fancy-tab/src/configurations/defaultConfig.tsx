import {Config} from "../types/Config";

export const defaultConfig: Config = {
    time: {
        "--fs": '16vmin',
        "--fst": 'normal',
        "--ff": 'Chivo',
        "--fw": '300',
        "--fc": '#000000',
    },
    date: {
        "--fs": '10vmin',
        "--ff": 'Tahoma',
        "--fst": 'italic',
        "--fw": '300',
        "--fc": '#000000',
    },
    description: {
        "--fs": '2.5vmin',
        "--ff": 'Chivo',
        "--fst": 'italic',
        "--fw": '300',
        "--fc": '#000000',
    },
    weather: {
        "--fs": '2vmin',
        "--ff": 'Chivo',
        "--fst": 'italic',
        "--fw": '300',
        "--fc": '#000000',
    },
    background: {
        "--bg": '#dedede' 
    },
    general: {
        locale: 'en-US',
        key: '',
        query: '',
        queryCheckbox: true,
        location: '',
        locationCheckbox: false,
        weatherDescriptionCheckbox: true,
        dateFormat: 'automatic',
        dateFormatCheckbox: true,
        units: 'metric'
    }
}
