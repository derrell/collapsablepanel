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
      style : function(states)
      {
        return {decorator : "pane", padding: [5, 10]};
      }  
    },

    "collapsable-panel/bar" :
    {
      include : "atom",
      alias   : "atom",
      style : function(states)
      {
        return {
          icon : states.opened ? "decoration/tree/open.png" : "decoration/tree/closed.png"
        };
      }
    },
    
    "collapsable-panel/container" : "widget"
  }
});