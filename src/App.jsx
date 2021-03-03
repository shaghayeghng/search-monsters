import React ,{Component} from 'react';
import CardList from './Components/CardList';
import SearchField from './Components/SearchField';
import {robots} from './Robots';
import './app.css';

// class App extends React.Component
class App extends Component {

    state = {searchTerm: '', robots: robots};

    //event handler
    onSearchChange = (event) => {
        this.setState({ searchTerm : event.target.value });
    };

    render() {
        const { robots, searchTerm} = this.state;
        const filterRobots = robots.filter((robot) => {
            return robot.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        });
        return (
            <div className="app">
                <h1>ROBOTs</h1>
                <SearchField onSearchChanged={this.onSearchChange} />
                <CardList robots={filterRobots} />
            </div>
        );
    };
};

export default App;