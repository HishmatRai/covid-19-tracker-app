import React, {useState} from 'react';
import {View, Picker, StyleSheet} from 'react-native';

const App = (props) => {
  const [selectedValue, setSelectedValue] = useState('Pakistan');
  return (
    <View style={styles.container}>
      <Picker
      style={[styles.picker]}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
          props.ChangeCounrty(itemValue);
        }}>
        <Picker.Item label="Pakistan" value="Pakistan" style={{backgroundColorL:"#F90000"}}/>
        <Picker.Item label="Afghanistan" value="Afghanistan" />
        <Picker.Item label="India" value="India" />
        <Picker.Item label="Bangladesh" value="Bangladesh" />
        <Picker.Item label="Iran" value="Iran" />
        <Picker.Item label="Turkey" value="Turkey" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  picker: {
    textDecorationLine: 'underline',
    height:50,
    width:300,
    color:"#f90000",
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
  }
});

export default App;