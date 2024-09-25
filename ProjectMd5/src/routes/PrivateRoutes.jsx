
import React from "react";
import LoadLazy from "../components/LoadLazy";

const AdminIndex = React.lazy(() => import("../page/admin/AdminIndex"));
const Dashboard = React.lazy(() => import("../page/admin/dashboard"));
const Product = React.lazy(() => import("../page/admin/product"));


const PrivateRoutes = [
    {
        path:"/admin",
        element: <LoadLazy children={<AdminIndex/>} />,
        children: [
            {
                index: true,
                element: <LoadLazy children={<Dashboard/>} />
            },{
                path: "product",
                element: <LoadLazy children={<Product/>} />
            }
        ]
    }
]

export default PrivateRoutes;