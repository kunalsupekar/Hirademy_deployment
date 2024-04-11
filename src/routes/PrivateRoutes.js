import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from '../resources/slugs';
import LoadingComponent from '../dashboardcomponents/loading';
import ProfilePage from './side-components/profile/ProfilePage'; 
const DashboardComponent = lazy(() => import('./dashboard'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
                <Route exact path={SLUGS.Profile} render={() => <ProfilePage />} />
                <Route exact path={SLUGS.test} render={() => <div>test</div>} />
                <Route exact path={SLUGS.Mentorship} render={() => <div>Mentorship</div>} />
                <Route exact path={SLUGS.Internship} render={() => <div>interships</div>} />
                <Route exact path={SLUGS.settings} render={() => <div>settings</div>} />
                <Route exact path={SLUGS.subscription} render={() => <div>subscription</div>} />
                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
