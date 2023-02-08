import React, { useState } from 'react'
import { FlatList, TextInput } from 'react-native'


import {Header} from '../../components/Header'



export const HomeScreen = ({}) => {

    const [items, setItems] = useState([])
    const [query, setQuery] = useState('')

    return (
        <React.Fragment>
        <Header withProfile/>
        <TextInput />
        {/* <FlatList
        data={items}
        keyExtractor={(item)=>`${item.name}_${item.price}`}
        renderItem={}
        /> */}

        </React.Fragment>
    )
}