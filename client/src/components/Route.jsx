const Route = ({route}) => {


    const routeStatus = () => {
        
        if(route.routeStatus === "PENDING"){
            return "Pending";
        }
        if(route.routeStatus === "IN_PROGRESS"){
            return "In Progress";
        }
        if(route.routeStatus === "COMPLETED"){
            return "Completed";
        }
    }

    return ( 
        <>
            <h3>Route {route.id}</h3>
            <p>Status: {routeStatus()}</p>
            <p>Truck: {route.truck.name}</p>
            <p>Deliveries: {route.deliveries}</p>

        </>
     );
}
 
export default Route;