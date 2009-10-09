/* ************************************************************************

   Copyright:
     2009 ACME Corporation -or- Your Name, http://www.example.com
     
   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Christian Boulanger (cboulanger)

************************************************************************ */

/* ************************************************************************

#asset(collapsablepanel/*)

************************************************************************ */

/**
 * This is the main class of contribution "collapsablePanel"
 * 
 */
qx.Class.define("collapsablepanel.Panel",
{
  extend : qx.ui.container.Composite,
  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */
  properties :
  {
    opened :
    {
      check : "Boolean",
      init : true,
      apply : "_applyOpened",
      event : "changeOpened"
    },
    
    content :
    {
      check : "qx.ui.core.Widget",
      nullable : true,
      apply : "_applyContent",
      event : "changeContent"
    }
    
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * Create a new collapsable panel
   * 
   * @param label {String} Label to use
   * @param icon {String?null} Icon to use
   */
  construct : function(label, icon) 
  {
    this.base(arguments);
    this.setLayout( new qx.ui.layout.VBox() );
    
    /*
     * bar
     */
    this._atom = new qx.ui.basic.Atom( label, icon );
    this._bar = new qx.ui.menubar.MenuBar();
    this._image = new qx.ui.basic.Image("decoration/tree/open.png");
    this._image.setMargin(5);
    this._bar.addListener("click", this._onToggleOpen, this);
    this._bar.add( this._image );
    this._bar.add( this._atom );
    this._bar.addListener("dblclick", this._onToggleOpen, this);
    this.add( this._bar );
    
    /*
     * content
     */
    this._container = new qx.ui.container.Composite( new qx.ui.layout.Grow() );
    this._container.set({
      decorator : "main",
      padding : 3
    });
    this.add( this._container, { flex : 1} );
    
    /*
     * effect
     */
//    this._container.addListener("appear",function(){
//      this._effect = new qx.fx.effect.core.Scale( this._container.getContentElement().getDomElement() );
//      this._effect.setScaleContent(false);
//    this._effect.setScaleFromCenter(false);    
//    },this);
    
  },
  
  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */
  members :
  {
    _atom  : null,
    _image : null,
    _bar : null,
    _container : null,
    _effect : null,
    _height : null,
    
    /**
     * Apply method for the opened/closed state of the widget
     * @param value {Boolean}
     * @param old {Boolean}
     */
    _applyOpened : function( value, old )
    {
//      /*
//       * don't do anythin until the widget has been rendered
//       */
//      if ( ! this._effect )
//      {
//        return;
//      }
      
      if ( old  )
      {
//        this._heigth = qx.bom.element.Dimension.getHeight( this._container.getContentElement().getDomElement() );
//        this._effect.addListenerOnce("finish", function(){
//          this._image.setSource("decoration/tree/closed.png");
//        },this );
//        this._effect.set({
//          scaleX   : false,
//          scaleTo  : 0,
//          duration : 0.5
//        });
//        this._effect.start();
        this._container.setVisibility("excluded");
        this._image.setSource("decoration/tree/closed.png");
      }
      
      if ( value )
      {
//        this._effect.addListenerOnce("finish", function(){
//          this._image.setSource("decoration/tree/open.png");
//        },this );
//        this._effect.set({
//          scaleX   : false,
//          scaleTo  : 100,
//          duration : 0.5
//        });
//        this._effect.start();        
        this._container.setVisibility("visible");
        this._image.setSource("decoration/tree/open.png");
      }
    },
    
    /**
     * Applies the panel content
     * @param value {qx.ui.core.Widget|null}
     * @param old {qx.ui.core.Widget|null}
     */
    _applyContent : function( value, old )
    {
      if ( old )
      {
        this._container.removeAll();
      }
      if ( value )
      {
        this._container.add( value );
      }
    },
    
    _onToggleOpen : function()
    {
      this.setOpened( ! this.getOpened() ); 
    }
  }
  
});
