import { useState } from "react";
import { Button } from "@repo/ui/components/ui/button";

import "@repo/ui/globals.css";
import { CardWithForm } from "@ui/components/ui/CardWithForm";
import { DialogDemo } from "@ui/components/ui/DialogSample";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-2">This is a Vite application</h1>
      <p className="mb-4">
        This shadcn/ui button is shared between Vite, NextJS and any other
        application.
      </p>
      <Button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </Button>
      <CardWithForm />

      <DialogDemo />
    </div>
  );
}

export default App;
