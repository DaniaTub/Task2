import React, { useState } from 'react'
import {
  Text, View, TouchableOpacity, Button,
  Modal, StyleSheet, Alert
} from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function product() {

  // state.
  const [total, setTotal] = useState(0);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(''); //for modal 
  const [products, setProducts] = useState(PRODUCTS);
  const [isVisble, setIsVisib] = useState(false);

  const renderProduct = ({ item, index }) => {
    return (
      <TouchableOpacity
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

          <TouchableOpacity
            onPress={() => remElement(index)}
          >
            <Icon name="trash" size={30} color="#900" />
          </TouchableOpacity>

        </View>
      </TouchableOpacity>
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

    // turn off the modal.
    setIsVisib(false);
  }

  const remElement = (index) => {
    Alert.alert(
      null,
      'Are you sure do you want to delete an item?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'OK', onPress: () => {
            const clonedProducts = [...products];
            clonedProducts.splice(index, 1);
            setProducts(clonedProducts);
          }
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {
        products.length > 0 && <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item, indx) => String(indx)}
        />
      }

      {
        products.length === 0 && (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{
            textAlign: 'center',
            color: 'red',
            fontSize: 20
          }}>
            {'No Products'}
          </Text>
        </View>)
      }

      <View style={{ alignSelf: 'flex-end' }}>
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
          {total}
        </Text>
      </View>

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
            placeholder="name"
            onChangeText={setName}
            style={{
              height: 60,
              borderWidth: 1,
              borderRadius: 8,
              marginBottom: 16,
              width: '100%'
            }}
          />
          <TextInput
            placeholder="price"
            onChangeText={setPrice}
            keyboardType='numeric'
            style={{
              height: 60,
              borderWidth: 1,
              borderRadius: 8,
              marginBottom: 16,
              width: '100%'
            }}
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