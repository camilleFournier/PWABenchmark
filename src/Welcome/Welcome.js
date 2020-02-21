import React, { Component } from 'react';
import { Button, Grid } from '@material-ui/core';

import './Welcome.css';

export class Welcome extends Component {
    state = {
        clickCount: 0,
        welcomes: ["Hello !", "Bonjour !", "Hola !", "Hi", "Konnichiwa !", "Hej !"],
        welcomeText: "Hello !"
    }

    onClick = (e) => {
        this.setState({ clickCount: this.state.clickCount + 1 });
    }

    changeWelcome = () => {
        const newWelcome = this.state.welcomes[Math.floor(Math.random()*this.state.welcomes.length)];
        this.setState({ welcomeText: newWelcome });
    }

    componentDidMount = () => {
        setInterval(this.changeWelcome, 17);
    }

    render() {
		return (
			<Grid className="welcome" container direction="column" justify="center" alignItems="center">
                <p>{this.state.welcomeText}</p>
                <Button variant="contained" onClick={this.onClick}>How many times did you click me?</Button>
                <p>{this.state.clickCount}</p>
            </Grid>
		);
	}
}