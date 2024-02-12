"use client";
import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline";
const MoonBackground = () => {
  return (
    <div>
      <Suspense fallback={<div>Please wait a second</div>}>
        <Spline scene="https://prod.spline.design/ZtBcLmcO2vga8kQP/scene.splinecode" />
      </Suspense>
    </div>
  );
};

export default MoonBackground;
