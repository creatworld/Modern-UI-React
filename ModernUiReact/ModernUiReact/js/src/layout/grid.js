/// <reference path="../../react/jquery.min.js" />
/** @jsx React.DOM */
/// <reference path="../react/react-dom.js" />
/// <reference path="../react/react.js" />
var MUGrid = React.createClass({
    componentDidMount:function(){
        $("#container").grid();
    },
    render: function () {
        return <div id={this.props.id}
                    data-columncount={this.props.columncount}
                    data-rowcount={this.props.rowcount}
                    data-columndefine={this.props.columndefine}
                    data-rowdefine={this.props.rowdefine}>
               {
                   React.Children.map(this.props.children, function (child) {
                       return child;
                   })
               }
        </div>
    }
});


