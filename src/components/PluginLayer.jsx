/**
 * PluginLayer Component
 * Renders a single plugin layer using its hook
 */
import React from 'react';

// Added all possible props passed from WorldMap
export const PluginLayer = ({ plugin, enabled, opacity, map, callsign, locator, lowMemoryMode }) => {
  
  // Use 'useLayer' if it exists (for OWM code) 
  // or 'hook' (for older plugins)
  const layerFunc = plugin.useLayer || plugin.hook;

  if (typeof layerFunc === 'function') {
    // We pass map, enabled, and opacity as individual arguments 
    // to match your useLayer = (map, enabled, opacity) signature
    layerFunc(map, enabled, opacity, { callsign, locator, lowMemoryMode });
  } else {
    console.warn(`Plugin ${plugin.metadata?.id} is missing a useLayer or hook function`);
  }
  
  return null;
};

export default PluginLayer;
