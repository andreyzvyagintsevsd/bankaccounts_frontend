import React, { Component } from "react";
import { Account } from "../../models/Account";
import Wizard from "../wizard/Wizard";
import { ItemsListHeader } from "./ItemsListHeader";
import { ItemsTable } from "./Table";
import { getDefaultAccount } from "./helpers";
import { CellButton } from "./CellButton";
import { ItemsListProps, ItemsListState } from "./ItemsListInterfaces";

export default class ItemsList extends Component<ItemsListProps, ItemsListState> {
  constructor(props: ItemsListProps) {
    super(props);

    this.state = {
      show: false,
      selectedItem: getDefaultAccount(),
      minAccount: "",
      maxAccount: ""
    };
  }

  public componentDidMount() {
    return (this.props.getAccountList && this.props.getAccountList("", ""))
        || (this.props.getBanks && this.props.getBanks());
  }

  public render() {
    if (!this.props.itemsList) { return null; }

    return <div style={{margin: "40px 100px 40px 100px" }}>
      <ItemsListHeader create={() => this.setState({ selectedItem: getDefaultAccount(), show: true })}
          filter={(min, max) => this.props.getAccountList && this.props.getAccountList(min, max)}/>
      <ItemsTable
          cellButton={() => <CellButton editAccount={(row) => this.setState({ selectedItem: row, show: true })} />}
          deleteAccount={this.props.deleteAccount}
          itemsList={this.props.itemsList}  />
      <Wizard
        show={this.state.show}
        item={this.state.selectedItem}
        updateAccount={(item: Account) => this.props.updateAccount && this.props.updateAccount(item)}
        onClose={() => this.setState({ show: false })}
        isEditing={this.state.selectedItem && this.state.selectedItem.id > 0 }
        branches={this.props.branches}
        banks={this.props.banks}
        onBankSelected={() => this.props.getBranches && this.props.getBranches(name)}
        />
      </div>;
  }
}