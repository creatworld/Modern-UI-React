/// <reference path="../common.js" />
/// <reference path="../react/react.js" />
var MUPage = React.createClass({
  
    getDefaultProps :function(){
        return {theme:"blue"};
    },
    getInitialState: function() {
        return{show:false}
    },
    componentDidMount :function(){
        if(typeof   this.props.getRef  !="undefined")
            this.props.getRef(this);

        var frame=$(this.refs.frame);
        var loading=$(this.refs.loading);
        frame.attr("src",this.props.url).load(function(){
            loading.hide();
        });
    },
    render: function () {
        var that=this;
        return <div style={{width:"100%",height:"100%"}}>
              <div ref="loading" className={this.props.theme+" page loading"}>
                  <span className="mif-spinner4 mif-ani-spin mif-3x icon"></span>
              </div>
               <iframe ref="frame" width="100%" height="100%"  frameBorder="no"></iframe>
        </div>;
}
});


