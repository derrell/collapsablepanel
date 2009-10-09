/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define("collapsablepanel.theme.modern.Appearance",
{
  appearances :
  {
    "collapsable-panel" :
    {
    },

    "collapsable-panel/bar" :
    {
      include : "menubar",
      alias   : "menubar",
      style : function(states)
      {
        return {
          icon        : states.opened ? "decoration/tree/open.png" : "decoration/tree/closed.png",
          paddingLeft : 2
        };
      }
    },
    
    "collapsable-panel/container" :
    {
      style : function(states)
      {
        return {
          decorator : "main"
        };
      }
    }
  }
});