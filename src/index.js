import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
var hello = (
    <div>
      <h1 class='greeting'>Hello World!</h1>
      <div class="editable-div" contenteditable="true">
          This is an editable div. You can type here!
      </div>
      <div class="wrs_modal_dialogContainer wrs_modal_desktop wrs_stack" id="wrs_modal_dialogContainer[0]" role="dialog" aria-labeledby="wrs_modal_title[0]" />
      <div class="wrs_modal_title_bar wrs_modal_desktop wrs_stack" id="wrs_modal_title_bar[0]">
        <div class="wrs_modal_title" id="wrs_modal_title[0]">MathType</div>
        <div class="wrs_bottom_left_resizer" data-testid="mtcteditor-resize-button-left"></div>
      </div>
      <div class="wrs_modal_wrapper wrs_modal_desktop wrs_stack" id="wrs_modal_wrapper[0]" >
        <div class="wrs_content_container wrs_modal_desktop wrs_stack" id="wrs_content_container[0]" >
          <div class="wrs_editor wrs_flexEditor wrs_withHand wrs_animated" role="application">
            <div class="wrs_toolbar" >
              <div class="wrs_header" role="tablist" >
                <button role="tab" class="wrs_selected" title="General tab (Alt+1)">
                  <span class="wrs_imageContainer" >
                    <img class="wrs_image" alt="" src="https://www.wiris.net/demo/editor/resources/icons/icons.png?v=7.23.2.9f41c0" draggable="false" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);
root.render(
  hello
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
