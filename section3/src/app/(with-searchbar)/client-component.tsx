"use client";

import ServerComponent from "./server-component";

export default function ClientComponent() {
  console.log("client-log");
  return (
    <div>
      client component
      <ServerComponent />
    </div>
  );
}
