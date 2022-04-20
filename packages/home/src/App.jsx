import React, { useState, lazy, Suspense } from 'react';
// import Input from 'otherComponents/Input';
const Button = lazy(() => import('sharedComponents/Button'));
const Input = lazy(() => import('otherComponents/Input'));

export default function App() {
  const [open, setOpen] = useState();

  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <div>
      <Suspense fallback={<div>Olá</div>}>
        <Button onClick={handleToggle}>Toggle</Button>
        <Input placeholder="Type here" />
      </Suspense>
      {open ? <strong>on</strong> : <strong>off</strong>}
    </div>
  );
}
