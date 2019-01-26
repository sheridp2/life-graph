import React, { Component } from "react";
import { reduxForm } from "redux-form";
import EntryForm from "./EntryForm";
import EntryReview from "./EntryReview";

class EntryNew extends Component {
  state = { showEntryReview: false };

  renderContent() {
    if (this.state.showEntryReview) {
      return (
        <EntryReview
          onCancel={() => this.setState({ showEntryReview: false })}
        />
      );
    }
    return (
      <EntryForm
        onEntrySubmit={() => this.setState({ showEntryReview: true })}
      />
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "entryForm"
})(EntryNew);
