/// <reference path="../react/react.js" />
var MUTextBox = React.createClass({
    getDefaultProps :function(){
        return {
            placeholder:"",
            type:"text",
            helper:""
        };
    },
    getInitialState: function() {
        return {
            enable:true,
            readOnly:false,
            state:""
        };
    },

    clear:function(){
        $(this.refs.textBox).val("");
        this.refs.textBox.focus();
    },
    showPassword:function(){
        $(this.refs.textBox).attr("type","text");
    },
    hidePassword:function(){
        $(this.refs.textBox).attr("type","password");
    },
    componentDidMount :function(){
        if(typeof   this.props.getRef  !="undefined")
            this.props.getRef(this);
    },
    render: function () {
        var dom="";

        if(this.props.helper=="clear")
        {
            dom=     <div className={"textbox "+this.state.state}>
        <input ref="textBox" placeholder={this.props.placeholder} type={this.props.type} style={{marginRight: '55px'}}></input>
        <button className="button helper" onClick={this.clear} tabIndex="-1"><span className="mif-cross"></span></button>
        </div>;
    }
else if(this.props.helper=="reveal"){
    dom=     <div className={"textbox "+this.state.state}>
      <input ref="textBox" placeholder={this.props.placeholder} type={this.props.type} style={{marginRight: '55px'}}></input>
      <button className="button helper" onMouseDown={this.showPassword} onMouseUp={this.hidePassword}  tabIndex="-1"><span className="mif-looks"></span></button>
      </div>;
}
else
{
    dom=     <div className={"textbox "+this.state.state}>
              <input ref="textBox" placeholder={this.props.placeholder} type={this.props.type} style={{marginRight: '55px'}}></input>
              {this.props.sub}
              </div>;
}

return dom;
}
});


