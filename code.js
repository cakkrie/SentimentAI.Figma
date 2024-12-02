"use strict";
// Show the custom HTML UI
figma.showUI(__html__, { width: 350, height: 600, title: "Sentiment AI" });

// Handle messages from the HTML UI
figma.ui.onmessage = (msg) => {
  if (msg.type === "generate") {
    const feedback = msg.feedback || "No feedback provided";
    const entropy = parseFloat(msg.entropy || 0);
    const temperature = parseFloat(msg.temperature || 0);
  } else if (msg.type === "cancel") {
    figma.closePlugin();
  } 
};
