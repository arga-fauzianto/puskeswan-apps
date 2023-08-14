const mainColors = {
    yellow1: "#FAC213",
    yellow2: "#FFD93D",
    dark1: "#212529",
    dark2: "#6C757D",
    light: "#F8F9FA",
    grey: "#EDEEF0",
    dark3: "#E9E9E9",
    red1: "#DC3545",
    green1: "#198754",
    black2: 'rgba(0, 0, 0, 0.5)'

}

export const colors = {
    primary: mainColors.yellow1,
    secondary: mainColors.yellow2,
    tertiary: mainColors.dark2,
    foutery: mainColors.dark1,
    fivetery: mainColors.red1,
    sixtiary: mainColors.green1,
    disable: mainColors.dark2,
    grow: mainColors.light,

    text: {
        primary: mainColors.dark1,
        secondary: mainColors.dark2,
        menuInActive: mainColors.dark2,
        menuActive: mainColors.dark1,
    },

    button: {
        primary: {
            background: mainColors.yellow2,
            text: 'white'
        },
        secondary: {
            background: mainColors.light,
            text: mainColors.dark1
        },
        disable: {
          background: mainColors.grey,
          text: mainColors.dark3
        }
      },

      border: mainColors.dark2,
      loadingBackground: mainColors.black2,
};
