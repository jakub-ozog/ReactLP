import React from "react";
import {Navigation} from "./utils";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <Navigation/>
        </QueryClientProvider>
    )
}

export default App;
