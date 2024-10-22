import React from "react";

interface AppProps {
  pluginId: string;
}

const App: React.FC<AppProps> = ({ pluginId }) => {

  const handleSubmit = () => {
    const configSetting = { config: pluginId };
    kintone.plugin.app.setConfig(
      { config: JSON.stringify(configSetting) },
      function () {
        alert("設定が保存されました。");
        window.location.href = "../../flow?app=" + kintone.app.getId();
      },
    );
  };

  return (
    <div>
      <p>Plugin ID: {pluginId}</p>
      <button onClick={handleSubmit}>設定を保存</button>
    </div>
  );
};

export default App;
