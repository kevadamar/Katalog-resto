import PageNotFound from '../views/pages/page-not-found';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import HomeResto from '../views/pages/home-resto';

const routes = {
  '/': HomeResto, // default page
  '/now-playing': HomeResto,
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/404': PageNotFound,
};

export default routes;
