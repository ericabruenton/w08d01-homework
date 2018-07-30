import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props)
    this.state = {
      balance: 0
    }
  }  

 handleDepositClick(e) {
    e.preventDefault();
    // set a local variable to the amount entered in the text box.
    const amountDeposited = parseInt(this.inputBox.value);
    // set a local variable to the new balance based off of the original balance + amount
    const amountAfterDeposit = this.state.balance + amountDeposited;
    // set the balance to the newBalance using the setState method 
    this.setState({
      balance: amountAfterDeposit
    })
    // empty out the text box in this component
    this.inputBox.value = '';
  } 

  handleWithdrawClick(e) {
    e.preventDefault();
    const amountWithdrawn = parseInt(this.inputBox.value);
    const amountAfterWithdraw = this.state.balance - amountWithdrawn;
    
    this.setState({
      balance: amountAfterWithdraw
    })

    this.inputBox.value = '';
  } 
  
  render() {
    const balanceClass = 'balance';
      if (this.state.balance === 0) {
        balanceClass += ' zero';
      }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={"balanceClass"}>$0</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input}/>
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="button" value="Withdraw"  onClick={this.handleWithdrawClick}/>
      </div>
    )}
}


export default Account;

//setting a ref property on the text field is one way we can access the data in the field later when we want to know what values to add/subtract from our account.