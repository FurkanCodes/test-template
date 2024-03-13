import React from "react";
import { RoutePermittedRole } from "src/constants/AppEnums";
// import PortFolioPage from "src/modules/extraPages/Portfolio/PortFolioPage";

const AboutUs = React.lazy(() => import("src/modules/extraPages/AboutUs"));
const ContactUs = React.lazy(
  () => import("src/modules/extraPages/ContactUs"),
);
const KnowledgeBase = React.lazy(
  () => import("src/modules/extraPages/KnowledgeBase"),
);
const Portfolio = React.lazy(
  () => import("src/modules/extraPages/Portfolio"),
);
const PortfolioDetail = React.lazy(
  () => import("src/modules/extraPages/Portfolio/PortFolioPage"),
);
const FAQ = React.lazy(() => import("src/modules/extraPages/FAQ"));
const PricingListing = React.lazy(
  () => import("src/modules/extraPages/Pricing"),
);
const PricingDetail = React.lazy(
  () => import("src/modules/extraPages/Pricing/Detail"),
);
const Blog = React.lazy(() => import("src/modules/extraPages/Blog"));
const BlogDetail = React.lazy(
  () => import("src/modules/extraPages/Blog/BlogDetailPage"),
);
const BlogCreate = React.lazy(
  () => import("src/modules/extraPages/Blog/CreateBlog"),
);

const BlogEditPage = React.lazy(
  () => import("src/modules/extraPages/Blog/EditBlog"),
);

export const extraPagesConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: "/extra-pages/about-us",
    element: <AboutUs />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: "/extra-pages/knowledge-base",
    element: <KnowledgeBase />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: "/extra-pages/blog-details",
    element: <BlogDetail />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/extra-pages/blog-details/:id",
    element: <BlogDetail />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/extra-pages/blog",
    element: <Blog />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/extra-pages/create/blog",
    element: <BlogCreate />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/extra-pages/edit-blog/:id",
    element: <BlogEditPage />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/extra-pages/portfolio/:id",
    element: <PortfolioDetail />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/extra-pages/portfolio",
    element: <Portfolio />,
  },

  {
    permittedRole: RoutePermittedRole.User,
    path: "/extra-pages/faq",
    element: <FAQ />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/extra-pages/contact-us",
    element: <ContactUs />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/extra-pages/pricing-listing",
    element: <PricingListing />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: "/extra-pages/pricing-detail",
    element: <PricingDetail />,
  },
];
