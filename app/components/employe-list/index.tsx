import React from 'react';
import {useEffect, useState} from 'react';
import {api} from '../../lib/api';
import EmplyeItem from '../employe-item';
import {FlatList, View} from 'react-native';

export interface IEmployee {
  id: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

export interface ISearch {
  name?: string | '';
}

function EmployeList({name = ''}: ISearch) {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()),
  );

  async function fetchEmployees() {
    try {
      const response = await api.get('/employees');
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <FlatList
      data={filteredEmployees}
      keyExtractor={item => item.id}
      renderItem={item => {
        return <EmplyeItem employee={item.item} />;
      }}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() => <View style={{height: 20}} />}
    />
  );
}

export default EmployeList;
