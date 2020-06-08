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

export default class CorporateForm extends Component {
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
          <Label>CompanyName Name</Label>
          <Input
            value={formData.companyName}
            onChangeText={(inputValue) => {
              onChangeFormData &&
                onChangeFormData({
                  inputName: 'companyName',
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
            value={formData.corporateBankAccountNumber}
            onChangeText={(inputValue) => {
              onChangeFormData &&
                onChangeFormData({
                  inputName: 'corporateBankAccountNumber',
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
