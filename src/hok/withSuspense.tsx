import Preloader from "components/common/Preloader/Preloader";
import React, { ComponentType, Suspense } from "react";
import { RouteComponentProps } from "react-router-dom";

export function withSuspense<T>(Component: ComponentType<T & RouteComponentProps>) {

    return (props: T & RouteComponentProps) => {
        return <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
    }
}

