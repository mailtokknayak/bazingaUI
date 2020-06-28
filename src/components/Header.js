import React, {Component} from "react";
import {connect} from "react-redux";

class Header extends Component {
    render() {
        return (
            <div className="row">
                <h1>Bazinga Cart Application</h1>
                <hr/>
                <div className="col-md-4">{`${this.props.products.length} products found.`}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        products: state.products.items
    });
export default connect(mapStateToProps)(Header);
