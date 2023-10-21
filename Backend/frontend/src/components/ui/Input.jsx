import { forwardRef } from "react";

export const Input= forwardRef((props, ref) =>{ //la referencia es el input completo

  return (
    <input type="text" className="bg-zinc-800 px-3 py-2 block my-2 w-full"
      {...props} ref={ref}
    />
  )
});
