import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Header from '../../components/header';
import {styles} from './styles';

import EmployeList from '../../components/employe-list';
import ListHeader from '../../components/list-header';

function Home() {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Funcionários</Text>
      <TextInput
        value={search}
        onChangeText={setSearch}
        style={styles.input}
        placeholder="Pesquisar"
      />
      <ListHeader />
      <EmployeList name={search} />
    </View>
  );
}

export default Home;
