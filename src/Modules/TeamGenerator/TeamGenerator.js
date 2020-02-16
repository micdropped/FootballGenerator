import React, {Component} from 'react';
import Faker from 'faker';

export default class TeamGenerator extends Component {

    constructor() {
        super();
        this.state = {
            ...this.getPlayersFromLocalStoreage()
        }
    }

    getPlayersFromLocalStoreage() {
        const savedPlayers = JSON.parse(localStorage.getItem('currentTeam'));
        console.log(savedPlayers);
        return savedPlayers;
    }

    generateTeam() {
        const players = [];
        for(let i=0; i<11; i++) {
            players.push({
                name: Faker.name.findName()
            })
        }
        this.setState({
            players
        })
    }

    getPlayerList() {
        return this.state.players.map((player) => <li>{player.name}</li>);
    }

    saveTeam() {
        localStorage.setItem('currentTeam', JSON.stringify(this.state));
    }

    render() {
        return (
            <div>
                <button
                    onClick={() => this.generateTeam()}
                >GenerateTeam</button>
                <ul>{this.getPlayerList()}</ul>
                <button onClick={() => this.saveTeam()}>Save</button>
            </div>
        )
    }

}