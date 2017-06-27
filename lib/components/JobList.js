import React from 'react'
import { Text, FlatList, ScrollView } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import moment from 'moment'
import handleLoading from './HOC/handleLoading'

const JobList = ({ loading, data, onItemPress, onItemLongPress }) => {
  if (data === undefined) {
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

export default handleLoading(JobList);