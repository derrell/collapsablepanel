/* ************************************************************************

   Copyright:

   License:

   Authors: Christian Boulanger (cboulanger)

************************************************************************ */

/* ************************************************************************

#asset(collapsablepanel.demo/*)

************************************************************************ */

/**
 * This is the main application class of your custom application "collapsablepanel"
 */
qx.Class.define("collapsablepanel.demo.Application",
{
  extend : qx.application.Standalone,



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     */
    main : function()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */

      /*
       * label
       */
      var label = new qx.ui.basic.Label("<h2>Collapsable Panel Demo</h2>");
      label.setRich(true);
      this.getRoot().add(label, {left: 100, top: 10});
      
      /*
       * main box
       */
      var hbox = new qx.ui.container.Composite( new qx.ui.layout.HBox(10) );
      hbox.set({
        width  : 800,
        height : 400
      });
      this.getRoot().add( hbox, {left: 100, top: 60} );
      
      /*
       * left panel container: modern theme
       */
      var vbox1 = new qx.ui.container.Composite( new qx.ui.layout.VBox(5) );
      vbox1.setPadding(5);
      var scroll1 = new qx.ui.container.Scroll( vbox1 );
      scroll1.setDecorator( "main" );
      hbox.add( scroll1, {flex:1} );
      var numbers = ["First","Second","Third","Fourth","Fifth"];
      for ( var i=0; i< numbers.length; i++)
      {
        var panel = new collapsablepanel.Panel( numbers[i] + " Panel");
        var label = new qx.ui.basic.Label();
        label.setRich(true);
        label.setValue("qooxdoo is a comprehensive and innovative framework for creating rich internet applications (RIAs). Leveraging object-oriented JavaScript allows developers to build impressive cross-browser applications. No HTML, CSS nor DOM knowledge is needed.It includes a platform-independent development tool chain, a state-of-the-art GUI toolkit and an advanced client-server communication layer. It is open source under an LGPL/EPL dual license.");
        panel.add( label );
        vbox1.add(panel, {flex:0} );
        panel.setValue(false);
      }

      var panel = new collapsablepanel.Panel("Panel With Dock Layout", new qx.ui.layout.Dock(5, 5));
      panel.setContentPadding(5);

      var edge = ["north", "east",  "south", "west",   "center"];
      var bg   = ["red",   "green", "blue",  "yellow", "white"];
      for (var i = 0; i < 5; i++)
      {
        var label = new qx.ui.basic.Atom(bg[i]);
        label.setBackgroundColor(bg[i]);
        label.setDecorator("main");
        panel.add(label, {edge : edge[i]} );
      }
      vbox1.add(panel, {flex:0} );
      panel.setValue(false);
      
      /*
       * right panel container: classic theme
       */
      var vbox2 = new qx.ui.container.Composite( new qx.ui.layout.VBox() );
      var scroll2 = new qx.ui.container.Scroll( vbox2 );
      scroll2.setDecorator( "main" );
      hbox.add( scroll2, {flex:1} );
      var numbers = ["First","Second","Third","Fourth","Fifth"];
      for ( var i=0; i< numbers.length; i++)
      {
        var panel = new collapsablepanel.Panel( numbers[i] + " Panel");
        var label = new qx.ui.basic.Label();
        label.setRich(true);
        label.setValue("qooxdoo is a comprehensive and innovative framework for creating rich internet applications (RIAs). Leveraging object-oriented JavaScript allows developers to build impressive cross-browser applications. No HTML, CSS nor DOM knowledge is needed.It includes a platform-independent development tool chain, a state-of-the-art GUI toolkit and an advanced client-server communication layer. It is open source under an LGPL/EPL dual license.");
        label.setPadding(5);
        panel.add( label );
        
        panel.setAppearance("collapsable-panel-classic");
        panel.setGap( 0 );
        panel.setShowSeparator( false );
        
        vbox2.add(panel, {flex:0} );
        panel.setValue(false);
      }

      var panel = new collapsablepanel.Panel("Panel With Dock Layout", new qx.ui.layout.Dock(5, 5));
      panel.setContentPadding(5);

      var edge = ["north", "east",  "south", "west",   "center"];
      var bg   = ["red",   "green", "blue",  "yellow", "white"];
      for (var i = 0; i < 5; i++)
      {
        var label = new qx.ui.basic.Atom(bg[i]);
        label.setBackgroundColor(bg[i]);
        label.setPadding(5);
        panel.add(label, {edge : edge[i]} );
      }
      panel.setValue(false);      
      panel.setAppearance("collapsable-panel-classic");
      panel.setGap( 0 );
      panel.setShowSeparator( false );
      vbox2.add(panel, {flex:0} );
    }
  }
});
