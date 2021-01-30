import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Button, Modal, StyleSheet } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';

export default function product() {

  // version 3

  // state.
  const [total, setTotal] = useState(0);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(''); //for modal 
  const [products, setProducts] = useState(PRODUCTS);
  const [isVisble, setIsVisib] = useState(false);

  const renderProduct = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          borderBottomWidth: 1,
          borderBottomColor: '#F5F5F5',
          flexDirection: 'row',
          alignItems: 'center',
          height: 70,
          padding: 10
        }}>

        <View style={{ flex: 1 }}>
          <Text style={{
            fontSize: 14,
            fontWeight: 'bold'
          }}>
            {'Name: ' + item.name}
          </Text>
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}>

          <Text style={{ color: 'grey' }}>
            {'Price: ' + item.price + '$'}
          </Text>

          <TouchableOpacity
            onPress={() => {
              setTotal(total => total + item.price)
            }}>

            <Text
              style={{
                color: 'blue',
                fontSize: 12, fontWeight: 'bold'
              }}>
              {'Buy'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const addElement = () => {
    setProducts(
      products => [
        ...products, {
          name: name,
          price: price
        }]
    );
  }

  const remElement = () => {

  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item, indx) => String(indx)}
        />
      </View>

      <View style={{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white',
        borderTopColor: '#a1a1a1',
        borderTopWidth: 1
      }}>

        <Text
          style={{
            color: 'blue',
            fontSize: 12, fontWeight: 'bold'
          }}>
          {'Add'}
        </Text>

        <Text
          style={{
            color: 'blue',
            fontSize: 12, fontWeight: 'bold'
          }}>
          {'Remove'}
        </Text>
      </View>

      <View style={styles.container}>
        <Modal
          animationType={"fade"}
          transparent={false}
          visible={isVisble}
          onRequestClose={() => setIsVisib(false)}>
          {/*All views of Modal*/}
          <View style={styles.modal}>
            <Text> {"Modal is open!"}</Text>
            {/* add function */}

            <Button
              title="Click To Close Modal"
              onPress={() => {
                setIsVisib(isVisble => !isVisble)
              }}
            />

            <TextInput
              placeholder="add name of the product"
              onChangeText={setName}
            />
            <TextInput
              placeholder="add price of the product"
              onChangeText={setPrice}
            />
            <TouchableOpacity
              onPress={addElement}
            >
              <Text>
                {'Add element'}
              </Text>
            </TouchableOpacity>

          </View>
        </Modal>

        {/*Button will change state to true and view will re-render*/}
        <Button
          title="add"
          onPress={() => setIsVisib(true)}
        />
      </View>

      <View
        style={{
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 16,
          backgroundColor: 'white',
          borderTopColor: '#a1a1a1',
          borderTopWidth: 1
        }}>
        <Text>
          {'Total:'}
        </Text>

        <Text
          style={{
            color: 'grey'
          }}>
          {'total'}
        </Text>
      </View>
    </View>
  );
};

const PRODUCTS = [{
  name: 'TV',
  price: 111
}, {
  name: 'Playstation',
  price: 222
}, {
  name: 'X-Box',
  price: 333
}];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#00BCD4",
    height: 300,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 80,
    marginLeft: 40,

  },
  text: {
    color: '#3f2949',
    marginTop: 10
  }
});  