import React, { Component } from 'react';
import 'bootstrap';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: '',
            value2: '',
            list: []
        };
    }

    onChangeValue2 = event => {
        this.setState({ value2: event.target.value });
    };

    onChangeValue = event => {
        this.setState({ value1: event.target.value });
    };

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Doing
  </div>
                <div className="card-body">

                    {this.state.list.map((e, index) => <div key={e} className="card bg-light mb-3">
                        <div className="card-header">{e.split("///")[0]}</div>
                        <div className="card-body">
                            <p className="card-text">{e.split("///")[1]}</p>
                            <button type="button" className="btn btn-primary"  onClick={() => this.onRemoveItem(index)}>
                        Borrar</button>
                        </div>
                    </div>)}

                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Add task
</button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Create task</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                                            <input type="text" className="form-control" id="recipient-name" value={this.state.value1} onChange={this.onChangeValue} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Description:</label>
                                            <textarea className="form-control" id="message-text" value={this.state.value2} onChange={this.onChangeValue2}></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" disabled={!(this.state.value2 && this.state.value1)} onClick={this.onAddItem} className="btn btn-primary" data-dismiss="modal">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onRemoveItem = i => {
        this.setState(state => {
          const list = state.list.filter((item, j) => i !== j);
          return {
            list,
          };
        });
      };

    onAddItem = () => {
        this.setState(state => {
            let r = this.state.value1 + "///" + this.state.value2;
            const list = state.list.concat(r);
            return {
                list,
                value: '',
            };
        });
    };
}



export default ToDo;