import React from 'react';
import {Input, Menu} from "semantic-ui-react";


export default class Filter extends React.Component {
    state = {activeItem: 'all'}

    handleItemClick = (e, {name}) => {
        const {setFilter} = this.props;
        this.setState({activeItem: name});
        setFilter(name)
    }

    render() {
        const {activeItem} = this.state;
        return (
            <Menu secondary>
                <Menu.Item
                    name='all'
                    active={activeItem === 'all'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='popular'
                    active={activeItem === 'popular'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='price to low'
                    active={activeItem === 'price to low'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='price to high'
                    active={activeItem === 'price to high'}
                    onClick={this.handleItemClick}
                />

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...'/>
                    </Menu.Item>
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        )
    }
}