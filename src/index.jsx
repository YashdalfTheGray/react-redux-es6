import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class AppComponent extends React.Component {
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
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Pluralsight Administration"
                        onLeftIconButtonTouchTap={this.handleMenuClick} />
                    <Drawer
                        docked={false}
                        open={this.state.sideNavOpen}
                        onRequestChange={this.handleSideNavStateChange}>
                        <Link to="home"><MenuItem primaryText="Home" /></Link>
                        <Link to="about"><MenuItem primaryText="About" /></Link>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}

injectTapEventPlugin();

ReactDOM.render(
    <AppComponent />,
    document.querySelector('#app')
);
