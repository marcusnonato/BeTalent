import React, {useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import Header from '../../components/header';
import {styles} from './styles';

import EmployeList from '../../components/employe-list';
import ListHeader from '../../components/list-header';
import {blackSearchIcon} from '../../assets/images';

function Home() {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Funcionários</Text>
      <View style={{position: 'relative'}}>
        <Image source={blackSearchIcon} style={styles.searchBarIcon} />
        <TextInput
          value={search}
          onChangeText={setSearch}
          style={styles.input}
          placeholder="Pesquisar"
        />
      </View>
      <ListHeader />
      <EmployeList name={search} />
    </View>
  );
}

export default Home;
