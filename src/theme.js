import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
    deepOrange500, deepOrange700,
    indigoA200, indigoA400
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: deepOrange500,
        primary2Color: deepOrange700,
        accent1Color: indigoA200,
        accent2Color: indigoA400
    }
});

export default muiTheme;
