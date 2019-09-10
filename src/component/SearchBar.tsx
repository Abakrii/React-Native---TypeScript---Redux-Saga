import React, { Component } from 'react'
import {TextInput, StyleSheet} from 'react-native';

interface Props {
    searchDeals: any,
    searchTerm: string,
}


class SearchBar extends Component<Props> {
    constructor(props: Props){
        super(props)
    }
 
    
    handleChange: any = (searching: string) => {
        this.props.searchDeals(searching)
    }


    render() {
        return (
            <TextInput
                placeholder="Search All Deals"
                style={styles.input}
                value = {this.props.searchTerm}
                onChangeText={this.handleChange}
            />
        )
    }
}
const styles = StyleSheet.create({
    input:{
        height: 40,
        marginHorizontal: 16,
    }
})

export default SearchBar
