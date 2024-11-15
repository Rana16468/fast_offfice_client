import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

function App() {
 
  const queryClient = new QueryClient();
  return (
    <>
     <Toaster/>
        <QueryClientProvider client={queryClient}>
             <RouterProvider router={router}></RouterProvider>
       </QueryClientProvider>
    
     
    </>
  )
}

export default App
