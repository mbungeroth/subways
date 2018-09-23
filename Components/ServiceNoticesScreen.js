import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import axios from 'axios';
import Notice from './Notice';

class ServiceNoticesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notices: [],
    }
  }

  async componentDidMount() {
    const { data:notices } = await axios.get('http://nycsubways.herokuapp.com/api/notices');
    this.setState({
      notices,
    })
  }

  render() {
    const { notices } = this.state;
    return !notices.length ? <Text>Loading...</Text> : (
      <ScrollView style={styles.page}>
        {notices.map(notice => {
          return (
            <Notice
              key={notice.lines}
              lines={notice.lines}
              type={notice.type}
              info={notice.info}
            />
          )
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  buttons: {
    alignItems: 'center',
    backgroundColor: '#32bcf2',
    margin: 10,
    width: 180,
    height: 40,
    borderRadius: 10,
    marginLeft :50,
    marginRight:50,
  }
});

export default ServiceNoticesScreen;
