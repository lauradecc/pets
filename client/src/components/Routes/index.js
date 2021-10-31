import { Route, Switch } from "react-router";
import * as PATHS from "./../../utils/paths";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import AnimalsPage from "../pages/AnimalsPage/AnimalsPage";
import EmergencyFormPage from "../pages/EmergencyFormPage/EmergencyFormPage";
import FaqPage from "../pages/FaqPage/FaqPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import CalendarPage from "../pages/CalendarPage/CalendarPage";
import PetDetailsPage from "../pages/PetDetailsPage/PetDetailsPage"

const Routes = () => {
    return (
        <Switch>
            <Route exact path={PATHS.HOME_PAGE} render={() => <HomePage />} />
            <Route exact path={PATHS.LOGIN_PAGE} render={() => <LoginPage />} />
            <Route exact path={PATHS.ANIMALS_PAGE} render={() => <AnimalsPage />}/>
            <Route exact path={PATHS.EMERGENCY_FORM_PAGE} render={() => <EmergencyFormPage />} />
            <Route exact path={PATHS.PET_DETAILS_PAGE} render={() => <PetDetailsPage />} />
            <Route exact path={PATHS.FAQ_PAGE} render={() => <FaqPage />} />
            <Route exact path={PATHS.BLOG_PAGE} render={() => <BlogPage />} />
            <Route exact path={PATHS.CALENDAR_PAGE} render={() => <CalendarPage/>} />
        </Switch>
    );
};

export default Routes;
