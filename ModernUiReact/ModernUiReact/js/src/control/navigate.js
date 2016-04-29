/// <reference path="../common.js" />
/// <reference path="../react/react.js" />
var MUNavigate = React.createClass({
  
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

    ddClick:function(){
        console.log("a");
    },

    itemClick:function(e,f,g){
     
        var selectedItem=$(e.target).parent();
        if(selectedItem.children(".d-menu").length<1)
        {
            console.log(selectedItem);
        
            return;
        }
            

        var that=this;
        var speed=150;
        
        var open=function(menu){
            menu.slideDown(speed,function(){
   
            });

            if(typeof that.props.frameOpen !="undefined")
            {
                that.props.frameOpen(e.target);
            }
        }

        var close=  function (menu){
            menu.slideUp(speed,function(){

            });
            if(typeof that.props.frameClose !="undefined")
            {
                that.props.frameClose(e.target);
            }
        }

        var menu=$(selectedItem.children(".d-menu")[0]);
        var toggle=$(selectedItem.children(".dropdown-toggle")[0]);
        if(menu.css("display")=="block")
        {
            //toggle.removeClass("active-toggle");
            //close(menu);
        }
        else
        {
            toggle.addClass("active-toggle");
            open(menu);
        }

    },

    getChildren:function(children){
        var that=this;
        if(children.length<1)
            return;
        return  <ul className="d-menu" style={{display:"none"}}>
                    {
                        children.map(function(item){
                            return <li data-name={item.name} data-value={item.value} >
                                       <a  onClick={that.itemClick} className={item.children.length>0?"dropdown-toggle":""}>{item.name}</a>
                            {that.getChildren(item.children)}
                            </li>
                        })
                    }
            </ul>;


},
    render: function () {
        var that=this;
        console.log(this.props.data);
        return <ul className="navigate">
                    {
                        this.props.data.map(function(item){
                            return <li data-name={item.name} data-value={item.value} onClick={that.itemClick}>
                                 
                                <a  className={item.children.length>0?"dropdown-toggle":""}>{item.name}</a>
                                {that.getChildren(item.children)}
                            </li>
                        })
                    }
            </ul>;
    }
});


