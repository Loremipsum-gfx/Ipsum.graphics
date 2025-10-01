"use client";
import 'odometer/themes/odometer-theme-default.css'
import React, { useEffect, useRef } from 'react';

const Stat = ({ number }) => {
  const odometerRef = useRef(null);

  useEffect(() => {
    if (!odometerRef.current) return;

    import('odometer').then((OdometerModule) => {
      const Odometer = OdometerModule.default;
      const odo = new Odometer({
        el: odometerRef.current,
        value: 0,
        format: '(ddd).dd',
        theme: 'default',
        duration: 3000,
      });

      odo.update(number);
    });
  }, [number]);

  return (
    <div className="odometer ml-2 md:ml-0" ref={odometerRef}></div>
  );
};

export default Stat;
