import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/header';
import {styles} from './styles';
import SearchBar from '../../components/search-bar';

function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Funcionários</Text>
      <SearchBar />
    </View>
  );
}

export default Home;
