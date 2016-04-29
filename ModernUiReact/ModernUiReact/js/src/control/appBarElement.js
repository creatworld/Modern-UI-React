/// <reference path="../common.js" />
/// <reference path="../react/react.js" />
//appBar内容载体
var MUAppBarElement = React.createClass({
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
        return <div  className={this.props.theme+" appBarElement"} onClick={this.props.click} >
            {
                React.Children.map(this.props.children, function (child) {
                    console.log(child);
                    return child;
                })
            }
            </div>
    }
});


