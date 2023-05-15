
import HomePage from '../pages/home.f7';
import AboutPage from '../pages/about.f7';
import FormPage from '../pages/form.f7';

import LeftPage1 from '../pages/left-page-1.f7';
import LeftPage2 from '../pages/left-page-2.f7';
import DynamicRoutePage from '../pages/dynamic-route.f7';
import RequestAndLoad from '../pages/request-and-load.f7';
import NotFoundPage from '../pages/404.f7';
import Typelist from '../pages/type/list.f7';
import TypelistDetailList from '../pages/type/detail.f7';
import TypelistAjoutList from '../pages/type/ajout.f7';
import TypeUpdateList from '../pages/type/modificationType.f7';
import TachesModificationtache from '../pages/Taches/ModificationTache.f7';
import TachesAjoutList from '../pages/Taches/ajout.f7';
import Listeslist from '../pages/Listes/liste.f7';
import ListesAjoutList from '../pages/Listes/ajout.f7';
import ListesDetailList from '../pages/Listes/detail.f7';
import ListesUpdateList from '../pages/Listes/modification.f7';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/type/',
    component: Typelist,
  },
  {
    path: '/type/detail/:idType',
    component: TypelistDetailList,
  },
  {
    path: '/type/ajout/',
    component: TypelistAjoutList,
  },
  {
    path: '/type/modificationType/:id_type',
    component: TypeUpdateList ,
  },
  {
    path: '/form/',
    component: FormPage,
  },

  {
    path: '/left-page-1/',
    component: LeftPage1,
  },
  {
    path: '/left-page-2/',
    component: LeftPage2,
  },

  {
    path: '/Taches/ajout/:id_liste',
    component: TachesAjoutList ,
  },
  {
    path: '/Taches/ModificationTache/',
    component: TachesModificationtache ,
  },
  {
    path: '/Listes/',
    component: Listeslist  ,
  },
  {
    path: '/Listes/ajout/',
    component: ListesAjoutList ,
  },
  {
    path: '/Listes/detail/:id_liste',
    component: ListesDetailList ,
  },
  {
    path: '/Listes/modification/:id_liste',
    component: ListesUpdateList ,
  },
  
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },

  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;