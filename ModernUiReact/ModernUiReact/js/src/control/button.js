/// <reference path="../react/react.js" />
var MUButton = React.createClass({
    getDefaultProps :function(){
        return {
            theme:"",
            //rounded,cycle
            shape:"",
            effect:"",
            icon:"",
        };
    },
    getInitialState: function() {
        return {
            enable:true
        };
    },
    componentDidMount :function(){
        if(typeof   this.props.getRef  !="undefined")
            this.props.getRef(this);
    },
    render: function () {
        if(this.state.enable)
            return <button style={this.props.style} className={this.props.theme+ " button "+this.props.shape+" "+this.props.effect} onClick={this.props.click}><span className={this.props.icon}></span>{this.props.text}</button>;
    else
        return  <button style={this.props.style} className={this.props.theme+ " button "+this.props.shape+" "+this.props.effect} disabled onClick={this.props.click}><span className={this.props.icon}></span>{this.props.text}</button>;
    }
});


