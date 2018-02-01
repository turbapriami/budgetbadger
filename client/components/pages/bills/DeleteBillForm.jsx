import React, { Component } from 'react';
import {Button,Form, Heading, Header, Layer} from 'grommet';
import EditBillForm from '../bills/EditBillForm.jsx';
import { gql, graphql } from 'react-apollo';

class DeleteBillForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(e) {
    this.props.mutate({
      variables: {id: this.props.bill.id}
    })
    .then(({ data }) => {
      console.log('successfully deleted Bill', data);
      this.props.handleDeleteBillFormToggle();
    })
    .catch((error) => {
      console.log('there was an error sending the delete bill query', error);
    });
  }

  render() {
    if (this.props.deleteBillFormToggle) {
      return (
        <Layer 
          closer='true'
          onClose={this.props.handleDeleteBillFormToggle}
          flush="true"
          overlayClose="true"
        >
        <Form style={{padding:'10%'}}>
          <Header>
            <Heading tag='h3' strong='true'>Are you sure you want to delete this bill?</Heading>
          </Header>
            <Button label='Cancel'
              primary={true}
              onClick={this.props.handleDeleteBillFormToggle} 
              style={{backgroundColor:'#49516f', color:'white', width: '130px', fontSize:'20px', padding:'6px 20px', border:'none'}}
            />
            <Button label='Delete'
              primary={true}
              onClick={this.handleDeleteClick} 
              style={{backgroundColor:'#49516f', color:'white', width: '130px', fontSize:'20px', padding:'6px 20px', border:'none'}}
            />
        </Form>
      </Layer>)
    } else { 
      return (<div></div>)
    }
  }
}

const deleteBill = gql`
  mutation deleteBill($id: Int!) {
    deleteBill(id: $id)
  }`;

export default graphql(deleteBill)(DeleteBillForm);