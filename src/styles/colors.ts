

type commonColorsTypes = {
    primary : string,
    secondary : string,
    third : string
}

type colorsType = {
    darkTheme : {} & commonColorsTypes,
    lightTheme : {} & commonColorsTypes,
}& Record<string, commonColorsTypes>;


export const colors : colorsType = {
    darkTheme : {
        primary :'#fff',
        secondary : '#fff6',
        third : '#000',
    },

    lightTheme : {
        primary : '#000',
        secondary : '#0006',
        third : '#fff',
    }
}