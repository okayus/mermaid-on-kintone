import React from "react";
import { createRoot } from "react-dom/client";

((PLUGIN_ID) => {
  kintone.events.on(
    ["app.record.create.show", "app.record.edit.show"],
    (event) => {
      const headerMenuSpace = kintone.app.record.getHeaderMenuSpaceElement();
      if (!headerMenuSpace) {
        return event;
      }
      const root = createRoot(headerMenuSpace);
      root.render(
        <div>
          <h1>Hello, World!</h1>
          <p>Plugin ID: {PLUGIN_ID}</p>
        </div>
      );
      return event;
    }
  );
})(kintone.$PLUGIN_ID);
