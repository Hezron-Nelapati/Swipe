import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'Bowl', uri: 'https://cdn.pixabay.com/photo/2016/07/08/14/12/bowl-1504422__480.jpg' },
  { id: 2, text: 'Italy', uri: 'https://cdn.pixabay.com/photo/2015/10/28/13/05/italy-1010518__480.jpg' },
  { id: 3, text: 'Book', uri: 'https://cdn.pixabay.com/photo/2016/08/04/09/30/book-1568667__480.jpg' },
  { id: 4, text: 'Sample', uri: 'https://cdn.pixabay.com/photo/2018/01/23/18/44/sample-3102116__480.jpg' },
  { id: 5, text: 'Synagouge', uri: 'https://cdn.pixabay.com/photo/2017/03/24/16/43/synagogue-2171526__480.jpg' },
  { id: 6, text: 'Boletus Edulis', uri: 'https://cdn.pixabay.com/photo/2019/11/02/00/24/boletus-edulis-4595459__480.jpg' },
  { id: 7, text: 'Microscope', uri: 'https://cdn.pixabay.com/photo/2019/09/21/07/02/microscope-4493188__480.jpg' },
  { id: 8, text: 'Autumn', uri: 'https://cdn.pixabay.com/photo/2017/08/13/19/43/autumn-2638332__480.jpg' },
];

const renderCard = (item) => {
    return(
      <Card
        key={item.id}
      >
       
        
        <Card.Image source={{uri: item.uri}} />
        <Card.Divider />
        <Card.Title
          style={{
            fontSize: 20,
            textAlign: 'left'
          }}
        >{item.text}</Card.Title>
        <Text style={{marginBottom: 10}}>
          I can customize the card further
        </Text>
        <Button
          icon={{ name: 'code' }}
          backgroundColor="#03a9f4"
          title="View Now!"
        >
        </Button>
      </Card>
    );
  }

const renderNoMoreCards = () => {
  return (
    <Card>
      <Card.Title
        style={{
            fontSize: 20,
            textAlign: 'left'
          }}
      >"All Done!"</Card.Title>
      <Text style={{marginBottom: 10}}>
          There's no more content here!
        </Text>
        <Button
          backgroundColor="#03a9f4"
          title="Get more!"
        >
        </Button>
    </Card>
  );
}

export default function App() {

  return (
    <View style={styles.container}>
      <Deck 
        data={DATA}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
   // paddingHorizontal: 10
  },
});
