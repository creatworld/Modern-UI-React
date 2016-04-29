/// <reference path="../common.js" />
/// <reference path="../react/react.js" />
var MUAppBar = React.createClass({
    
    getDefaultProps :function(){
        return {theme:"blue"};
    },
    //getInitialState: function() {
        
    //},
    componentDidMount :function(){
        if(typeof   this.props.getRef  !="undefined")
            this.props.getRef(this);
    },
    render: function () {
        return <div className={this.props.theme+" appBar"}>{
            React.Children.map(this.props.children, function (child) {
                return child;
            }
        )
        }</div>;
    }
});


