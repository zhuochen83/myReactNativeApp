import React from 'react'
import { Text, FlatList, ScrollView, ActivityIndicator } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import moment from 'moment'

export default ({ loading, data, onItemPress, onItemLongPress }) => {
  if (loading) {
    return <ActivityIndicator 
            style={{width: '100%', height: '100%'}}
            size='large'/>;
  } else if (data === undefined) {
    return <Text>No User Found</Text>;
  } else {
    return (
      <ScrollView>
      <List>
        <FlatList
        data={data}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            rightTitle={moment(item.createAt).fromNow()}
            subtitle={item.description}
            onPress={() => onItemPress(item)}
            onLongPress={() => onItemLongPress(item)}
          />
        )}
        keyExtractor={item => item.id}
        />
      </List>
      </ScrollView>
      );
  }
}