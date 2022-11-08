import Users from '../views/admin/users/Users.vue';
import ShowUser from '../views/admin/users/Show.vue';

import Vehicles from '../views/admin/vehicles/Vehicles.vue';
import editVehicle from '../views/admin/vehicles/Edit.vue';

import Trips from '../views/admin/trips/Trips.vue';
import ShowTrip from '../views/admin/trips/Show.vue';

const devPrefix = '/admin'

const adminRoutes = [
    {
        path: `${devPrefix}/users`,
        name: 'users',
        component: Users
    },
    {
        path: `${devPrefix}/user/1/show`,
        name: 'showUser',
        component: ShowUser
    },
    {
        path: `${devPrefix}/vehicles`,
        name: 'vehicles',
        component: Vehicles
    },
    {
        path: `${devPrefix}/vehicle/1/edit`,
        name: 'editVehicle',
        component: editVehicle
    },
    {
        path: `${devPrefix}/trips`,
        name: 'trips',
        component: Trips
    },
    {
        path: `${devPrefix}/trip/1/show`,
        name: 'showTrip',
        component: ShowTrip
    },
]

export default adminRoutes;
