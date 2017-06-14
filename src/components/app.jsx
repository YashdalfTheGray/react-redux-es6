import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import muiTheme from '../theme';

console.log(muiTheme);

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sideNavOpen: false
        };

        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleSideNavStateChange = this.handleSideNavStateChange.bind(this);
    }

    handleMenuClick() {
        this.setState({ sideNavOpen: true });
    }

    handleSideNavStateChange(isOpen) {
        this.setState({ sideNavOpen: isOpen });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar
                        title="Pluralsight Administration"
                        onLeftIconButtonTouchTap={this.handleMenuClick} />
                    <Drawer
                        docked={false}
                        open={this.state.sideNavOpen}
                        onRequestChange={this.handleSideNavStateChange}>
                        <MenuItem primaryText="Home" />
                        <MenuItem primaryText="About" />
                    </Drawer>
                    <div className="list horizontal" style={{ margin: '16px' }}>
                        <RaisedButton label="Primary" primary />
                        <RaisedButton label="Secondary" secondary />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
