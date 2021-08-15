import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {openCommentModal} from '../../redux/actions/commentModal';

const CommentBtn = ({onPress}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      // onPress={() => dispatch(openCommentModal())}
      onPress={() => onPress()}>
      <View style={{flexDirection: 'row'}}>
        <Icon
          name="chatbubble-outline"
          color="#eee"
          size={16}
          // style={{marginBottom: 8}}
        />
        <Text
          style={{
            color: '#eee',
            fontSize: 12,
            marginLeft: 8,
            // marginTop: 2,
            fontFamily: 'Helvetica-Medium',
          }}>
          1.2K Comments
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CommentBtn;

const styles = StyleSheet.create({});
