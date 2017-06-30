import React from 'react'
import { Text, View } from 'react-native'
import { List, ListItem, ButtonGroup } from 'react-native-elements'
import moment from 'moment'

const JobItem = ({ item, onItemEdit, onItemDelete }) => {
  return (<View>
            <ListItem
              title={item.title}
              rightTitle={moment(item.createAt).fromNow()}
              subtitle={item.description}
              onPress={() => onItemEdit(item)}
            />
            <ButtonGroup
              onPress={(index)=> {
                switch(index) {
                  case 0:
                    onItemEdit(item)
                    break;
                  case 1:
                    onItemDelete(item)
                    break;
                  default:
                    console.error('Unsupport operation. Index: ' + index)
                }
              }}
              buttons={['Edit', 'Delete', 'Share']}
              containerStyle={{height: 35}} />                
          </View>
  )
}

export default JobItem;