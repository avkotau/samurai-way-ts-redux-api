import Preloader from "components/common/Preloader/Preloader";
import React, { ComponentType, Suspense } from "react";

export function withSuspense<T>(Component: ComponentType<T>) {

    return (props: T) => {
        return <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
    }
}

