import React from 'react'
import { Text, View, FlatList, ScrollView, RefreshControl } from 'react-native'
import { List, ListItem, ButtonGroup } from 'react-native-elements'
import moment from 'moment'
import JobItemContainer from './JobItemContainer'
import handleLoading from './HOC/handleLoading'

const JobList = ({ loading, refreshing = false, data, onRefresh, onItemPress, onItemLongPress }) => {
  if (data === undefined) {
    return <Text>No User Found</Text>;
  } else {
    return (
      <ScrollView
        refreshControl={(
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />          
        )}>
      <List>
        <FlatList
        data={data}
        renderItem={({item}) => 
          <JobItemContainer
            item={item}
          />
        }
        keyExtractor={item => item.id}
        />
      </List>
      </ScrollView>
      );
  }
}

export default handleLoading(JobList);