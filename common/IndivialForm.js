import React, {Component} from 'react';
import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
} from 'native-base';

export default class IndivialForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      onSubmitIndivialForm,
      onChangeFormData,
      formIndex = 0,
      tabIndex = 0,
      formKey = '',
      formData = {},
    } = this.props;

    return (
      <Form>
        <FormItem floatingLabel>
          <Label>Customer Name</Label>
          <Input
            value={formData.customerName}
            onChangeText={(inputValue) => {
              onChangeFormData &&
                onChangeFormData({
                  inputName: 'customerName',
                  inputValue,
                  formIndex,
                  tabIndex,
                  formKey,
                });
            }}
          />
        </FormItem>
        <FormItem floatingLabel last>
          <Label>Bank Account Number</Label>
          <Input
            value={formData.bankAccountNumber}
            onChangeText={(inputValue) => {
              onChangeFormData &&
                onChangeFormData({
                  inputName: 'bankAccountNumber',
                  inputValue,
                  formIndex,
                  tabIndex,
                  formKey,
                });
            }}
          />
        </FormItem>
      </Form>
    );
  }
}
