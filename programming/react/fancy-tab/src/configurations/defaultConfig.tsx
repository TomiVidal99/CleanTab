import {Config} from "../types/Config";

export const defaultConfig: Config = {
    time: {
        "--fs": '20vmin',
        "--fst": 'normal',
        "--ff": 'Chivo',
        "--fw": '300',
        "--fc": '#000000',
    },
    date: {
        "--fs": '15vmin',
        "--ff": 'Chivo',
        "--fst": 'italic',
        "--fw": '300',
        "--fc": '#000000',
    },
    description: {
        "--fs": '10vmin',
        "--ff": 'Chivo',
        "--fst": 'italic',
        "--fw": '300',
        "--fc": '#000000',
    },
    weather: {
        "--fs": '4vmin',
        "--ff": 'Chivo',
        "--fst": 'italic',
        "--fw": '300',
        "--fc": '#000000',
    },
    background: {
        "--bg": '' 
    },
    general: {
        locale: 'en-US',
        key: '',
        query: '',
        queryCheckbox: true,
        background: '#dddddd',
        location: '',
        locationCheckbox: false,
        weatherDescriptionCheckbox: true,
        dateFormat: 'automatic',
        dateFormatCheckbox: true
    }
}
