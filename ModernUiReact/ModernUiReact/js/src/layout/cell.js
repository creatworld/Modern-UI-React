/** @jsx React.DOM */
/// <reference path="../react/react-dom.js" />
/// <reference path="../react/react.js" />
var MUCell = React.createClass({
    render: function () {
        return   <div 
        data-row={this.props.row}
        data-column={this.props.column}
        data-rowspan={this.props.rowspan}
        data-columnspan={this.props.columnspan}
        style={this.props.style}
        >
                     {
                     React.Children.map(this.props.children, function (child) {
                     return child;
                     })
                     }
        </div>
    }
});

