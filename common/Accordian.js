import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

import {
  Container,
  Header,
  Content,
  Icon,
  Accordion,
  Text,
  View,
  Tab,
  Tabs,
  Button,
} from 'native-base';
import IndivialForm from './IndivialForm';
import CorporateForm from './CorporateForm';

class Accordian extends Component {
  constructor(props) {
    super(props);
    const {dataArray} = this.props;
    this.state = {
      dataArray: dataArray.map((data, index) => ({...data, index})),
      currentAccordionOpenIndex: 0,
    };
    this.onChangeFormData = this.onChangeFormData.bind(this);
    this._renderContent = this._renderContent.bind(this);
    this._renderHeader = this._renderHeader.bind(this);
  }

  _renderHeader(item, expanded) {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#A9DAD6',
        }}>
        <Text style={{fontWeight: '600'}}> {item.title}</Text>
        {expanded ? (
          <Icon style={{fontSize: 18}} name="remove-circle" />
        ) : (
          <Icon style={{fontSize: 18}} name="add-circle" />
        )}
      </View>
    );
  }

  onChangeFormData({inputName, inputValue, formIndex, tabIndex, formKey}) {
    this.setState((state) => {
      debugger;
      const {dataArray} = state;
      if (dataArray[formIndex][formKey]) {
        const formData = {
          ...dataArray[formIndex][formKey],
          [inputName]: inputValue,
        };
        dataArray[formIndex][formKey] = formData;
        return {dataArray};
      } else {
        const newDataArray = {
          ...dataArray[formIndex],
          [formKey]: {[inputName]: inputValue},
        };
        dataArray[formIndex] = newDataArray;

        return {dataArray};
      }
    });
  }

  _renderContent(item) {
    console.log('item', item);
    return (
      <View
        style={{
          padding: 10,
        }}>
        <Tabs>
          <Tab heading="Individual">
            <IndivialForm
              formIndex={item.index}
              tabIndex={0}
              formKey={'indivialForm'}
              formData={item.indivialForm || {}}
              onChangeFormData={this.onChangeFormData}
            />
          </Tab>
          <Tab heading="Corporate Form ">
            <CorporateForm
              formIndex={item.index}
              tabIndex={1}
              formKey={'corporateForm'}
              formData={item.corporateForm || {}}
              onChangeFormData={this.onChangeFormData}
            />
          </Tab>
        </Tabs>
      </View>
    );
  }

  render() {
    const {currentAccordionOpenIndex, dataArray} = this.state;
    return (
      <>
        <View style={{margin: 50}}>
          <Button
            full
            onPress={() => {
              this.setState((state) => {
                const {dataArray} = state;
                dataArray.push({title: 'Owner ' + (dataArray.length + 1)});
                return {
                  dataArray: dataArray.map((d, index) => ({...d, index})),
                };
              });
            }}>
            <Text>Click To Add Owner</Text>
          </Button>
        </View>

        <Accordion
          dataArray={dataArray}
          animation={true}
          expanded={true}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
        />
      </>
    );
  }
}

export default Accordian;
