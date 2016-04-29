/// <reference path="../common.js" />
/// <reference path="../react/react.js" />
var MUGroup = React.createClass({
    
    getDefaultProps :function(){
        return {theme:""};
    },
    //getInitialState: function() {
        
    //},
    componentDidMount :function(){
        if(typeof   this.props.getRef  !="undefined")
            this.props.getRef(this);
    },
    render: function () {
        return <div className={this.props.theme+" group"} >
             {
                 React.Children.map(this.props.children, function (child) {
                     return child;
                 })
             }
            </div>;
    }
});


