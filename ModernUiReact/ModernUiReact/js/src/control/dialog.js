/// <reference path="../common.js" />
/// <reference path="../react/react.js" />
var MUDialog = React.createClass({
  
    getDefaultProps :function(){
        return {theme:""};
    },
    getInitialState: function() {
        return{show:false}
    },
    componentDidMount :function(){
        if(typeof   this.props.getRef  !="undefined")
            this.props.getRef(this);
    },
    closeDialog:function(){
        this.setState({show:false});
    },
    render: function () {
        var that=this;
        return <div  className={this.state.show?"mask":""}>
            <div className={this.state.show?"dialog show":"dialog hide"}>
                <h1>dialog</h1>
                <p>一张网页，要经历怎样的过程，才能抵达用户面前？ 一位新人，要经历怎样的成长，才能站在技术之巅？ 探寻这里的秘密； 体验这里的挑战； 成为这里的主人； 加入百度，加入网页搜索，你，可以影响世界。</p>
        {
            React.Children.map(this.props.children, function (child) {
                return child;
            })
        }
        <span onClick={this.closeDialog} className="dialog-close-button"></span>
        </div>
        </div>;
    }
});


