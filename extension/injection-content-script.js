/**
 * This content script injects the script (which is a different script) for
 * instrumenting web audio calls into a frame. We inject a different script
 * instead of using this same one for instrumentation since content scripts
 * actually cannot override native globals like web audio methods. This script
 * runs at the start of every frame (before any other scripts run) of a tab
 * since, of course, any frame can use web audio.
 */


// Execute the instrumentation script by attaching then removing a script tag.
var scriptTag = document.createElement('script');
scriptTag.src = chrome.extension.getURL('tracing.js');
(document.head || document.documentElement).appendChild(scriptTag);
scriptTag.remove();


// Connect with the background page so that it can relay web audio updates to
// the panel JS.
var backgroundPageConnection = chrome.runtime.connect({
  'name': 'init_frame'
});


// TODO: Respond to messages from the background page.
backgroundPageConnection.onMessage.addListener(function(message) {
  var messageType = message['type'];
});


// Listen to messages from the page. Relay them to the background script.
window.addEventListener('message', function(event) {
  if (event.source != window) {
    // We are not interested in messages from other windows.
    return;
  }

  var message = event.data;
  if (!message || message['tag'] != 'webAudioExtension') {
    // This message is not relevant to this extension.
    return;
  }

  switch (message['type']) {
    case 'new_context':
      // A new AudioContext has been created.
    case 'add_node':
      // A node has been added to the audio graph.
    case 'add_edge':
      // An edge has been added to the audio graph.
    case 'remove_edge':
      // An edge has been removed from the audio graph.

      // We do not need the tag that identifies this message as from this
      // extension if we are communicating with the background page. Prefer a
      // smaller message (to serialize).
      delete message['tag'];
      backgroundPageConnection.postMessage(message);
      break;
  }
});

// Indicate that this content script is ready to receive messages.
backgroundPageConnection.postMessage({'type': 'listeners_ready'});