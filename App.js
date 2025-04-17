import React, { useState } from 'react';

const App = () => {
  const [t, sett] = useState({ m: 0, s: 0 });
  const [iid, setIid] = useState(-1);

  const inc = () => {
    sett(prev => {
      let s = prev.s + 1;
      let m = prev.m;

      if (s === 60) {
        s = 0;
        m += 1;
      }

      return { m, s };
    });
  };

  const st = () => {
    if (iid === -1) {
      setIid(setInterval(inc, 100));
    }
  };

  const stop = () => {
    clearInterval(iid);
    setIid(-1);
  };

  const rs = () => {
    clearInterval(iid);
    setIid(-1);
    sett({ m: 0, s: 0 });
  };

  return (
    <div>
      <div>
        {t.m < 10 ? '0' + t.m : t.m}:{t.s < 10 ? '0' + t.s : t.s}
      </div>
      <button onClick={st}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={rs}>Reset</button>
    </div>
  );
};

export default App;
