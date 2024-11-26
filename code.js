"use strict";

// Show the custom HTML UI
figma.showUI(__html__, { width: 350, height: 600, title: "Sentiment AI" });

// Handle messages from the HTML UI
figma.ui.onmessage = (msg) => {
  if (msg.type === "generate") {
    // Handle the "GENERATE" button logic
    const feedback = msg.feedback || "No feedback provided";
    const entropy = parseFloat(msg.entropy || 0);
    const temperature = parseFloat(msg.temperature || 0);

    // Send a message to the UI to switch to the new recording page
    figma.ui.postMessage({ type: 'switch-to-new-recording-page' });
  } else if (msg.type === "cancel") {
    // Handle the "Cancel" button click
    figma.closePlugin();
  }
};
