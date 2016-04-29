/// <reference path="../common.js" />
/// <reference path="../react/react.js" />
var MUAccordion = React.createClass({
  
    getDefaultProps :function(){
        return {theme:""};
    },
    //getInitialState: function() {
        
    //},
    headClick:function(e){
        var that=this;
        var speed=150;
        var activeClass="active "+this.props.theme;
        var open=function(frame){
            var content = frame.children('.content');
            content.slideDown(speed,function(){
                frame.addClass(activeClass);
            });

            if(typeof that.props.frameOpen !="undefined")
            {
                that.props.frameOpen(e.target);
            }
        }

        var close=  function (frame){
            var content = frame.children('.content');
            content.slideUp(speed,function(){
                frame.removeClass(activeClass);
            });
            if(typeof that.props.frameClose !="undefined")
            {
                that.props.frameClose(e.target);
            }
        }

        var selectedItem=$(e.target);
  
        var frame = selectedItem.parent();

        if (frame.hasClass('disabled')) {return false;}

        if  (!frame.hasClass(activeClass)) {
            open(frame);
        } else {
            close(frame);
        }
    },
    componentDidMount :function(){
        if(typeof   this.props.getRef  !="undefined")
            this.props.getRef(this);
    },
    render: function () {
        var that=this;
        return <div ref="accordion"  className="accordion">
            {
                React.Children.map(this.props.children, function (child) {
                    return <div className={"frame "+(child.props.expend?("active "+that.props.theme):"")}>
                                       <div onClick={that.headClick} className="heading ">{child.props.head}</div>
                                <div className="content">
                                    {child}
                                </div>
                            </div>;
                })
            }
            </div>;
    }
});


