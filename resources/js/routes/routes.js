import {useAuthStore} from "@/store/auth";

const AuthenticatedLayout = () => import('../layouts/Authenticated.vue')
const GuestLayout = ()  => import('../layouts/Guest.vue');

const ValenWebLayout = ()  => import('../layouts/Valenweb.vue');
const ProductsIndex  = ()  => import('../views/admin/products/Index.vue');
const ProductsCreate  = ()  => import('../views/admin/products/Create.vue');
const ProductsEdit  = ()  => import('../views/admin/products/Edit.vue');

function requireLogin(to, from, next) {
    const auth = useAuthStore()
    let isLogin = false;
    isLogin = !!auth.authenticated;

    if (isLogin) {
        next()
    } else {
        next('/backoffice/login')
    }
}

function guest(to, from, next) {
    const auth = useAuthStore()
    let isLogin;
    isLogin = !!auth.authenticated;

    if (isLogin) {
        next('/')
    } else {
        next()
    }
}

export default [
    {
        path: '/',
        // redirect: { name: 'login' },
        component: ValenWebLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('../views/home/index.vue'),
            },
            {
                path: 'products',
                name: 'public-products.index',
                component: () => import('../views/products/index.vue'),
                props: true
            },
            {
                path: 'order/:id',
                name: 'order.index',
                component: () => import('../views/order/index.vue')
            },
            {
                path: 'products/:id',
                name: 'public-products.details',
                component: () => import('../views/products/details.vue'),
            },
            {
                path: 'category/:id',
                name: 'category-products.index',
                component: () => import('../views/category/products.vue'),
            },
            {
                path: 'contact',
                name: 'contact.index',
                component: () => import('../views/contact/contact.vue'),
            },
            {
                path: 'about',
                name: 'about.index',
                component: () => import('../views/about/about.vue'),
            },
            {
                path: 'car',
                name: 'car.index',
                component: () => import('../views/car/car.vue'),
            },
            {
                path: 'login',
                name: 'auth.login'
            }

        ]
    },
    {
        path: '/backoffice',
        redirect: { name: 'auth.login' },
        component: GuestLayout,
        children: [
            {
                path: 'login',
                name: 'auth.login',
                component: () => import('../views/login/Login.vue'),
                beforeEnter: guest,
            },
            {
                path: 'register',
                name: 'auth.register',
                component: () => import('../views/register/index.vue'),
                beforeEnter: guest,
            },
            {
                path: 'forgot-password',
                name: 'auth.forgot-password',
                component: () => import('../views/auth/passwords/Email.vue'),
                beforeEnter: guest,
            },
            {
                path: 'reset-password/:token',
                name: 'auth.reset-password',
                component: () => import('../views/auth/passwords/Reset.vue'),
                beforeEnter: guest,
            }
        ]
    },
    {
        path: '/backoffice/admin',
        component: AuthenticatedLayout,
        name: 'admin',
        redirect: {
             name: 'products.index'
        },
        beforeEnter: requireLogin,
        children: [
            {
                name: 'admin.index',
                path: '',
                component: () => import('../views/admin/index.vue'),
                meta: { breadCrumb: 'Admin' }
            },
            {
                name: 'profile.index',
                path: 'profile',
                component: () => import('../views/admin/profile/index.vue'),
                meta: { breadCrumb: 'Profile' }
            },
            {
                name: 'products.index',
                path: 'products',
                component: ProductsIndex,
                meta: { breadCrumb: 'Products' }
            },
            {
                name: 'products.create',
                path: 'products/create',
                component: ProductsCreate,
                meta: { breadCrumb: 'Add new product' }
            },
            {
                name: 'products.edit',
                path: 'products/edit/:id',
                component: ProductsEdit,
                meta: { breadCrumb: 'Edit product' }
            },
            {
                name: 'categories.index',
                path: 'categories',
                component: () => import('../views/admin/categories/Index.vue'),
                meta: { breadCrumb: 'Category' }
            },
            {
                name: 'categories.create',
                path: 'categories/create',
                component: () => import('../views/admin/categories/Create.vue'),
                meta: { breadCrumb: 'Add new Category' }
            },
            {
                name: 'categories.edit',
                path: 'categories/edit/:id',
                component: () => import('../views/admin/categories/Edit.vue'),
                meta: { breadCrumb: 'Edit Category' }
            },
            {
                name: 'categorygroupers.index',
                path: 'categorygroupers',
                component: () => import('../views/admin/categorygroupers/Index.vue'),
                meta: { breadCrumb: 'Category Groupers' }
            },
            {
                name: 'categorygroupers.create',
                path: 'categorygroupers/create',
                component: () => import('../views/admin/categorygroupers/Create.vue'),
                meta: { breadCrumb: 'Add new category croupers' }
            },
            {
                name: 'categorygroupers.edit',
                path: 'categorygroupers/edit/:id',
                component: () => import('../views/admin/categorygroupers/Edit.vue'),
                meta: { breadCrumb: 'Edit Category Groupers' }
            },
            {
                name: 'colors.index',
                path: 'colors',
                component: () => import('../views/admin/colors/Index.vue'),
                meta: { breadCrumb: 'Categories' }
            },
            {
                name: 'colors.create',
                path: 'colors/create',
                component: () => import('../views/admin/colors/Create.vue'),
                meta: { breadCrumb: 'Add new category' }
            },
            {
                name: 'colors.edit',
                path: 'colors/edit/:id',
                component: () => import('../views/admin/colors/Edit.vue'),
                meta: { breadCrumb: 'Edit Size' }
            },
            {
                name: 'sizes.index',
                path: 'sizes',
                component: () => import('../views/admin/sizes/Index.vue'),
                meta: { breadCrumb: 'Sizes' }
            },
            {
                name: 'sizes.create',
                path: 'sizes/create',
                component: () => import('../views/admin/sizes/Create.vue'),
                meta: { breadCrumb: 'Add new Size' }
            },
            {
                name: 'sizes.edit',
                path: 'sizes/edit/:id',
                component: () => import('../views/admin/sizes/Edit.vue'),
                meta: { breadCrumb: 'Edit Size' }
            },
            {
                name: 'permissions.index',
                path: 'permissions',
                component: () => import('../views/admin/permissions/Index.vue'),
                meta: { breadCrumb: 'Permissions' }
            },
            {
                name: 'permissions.create',
                path: 'permissions/create',
                component: () => import('../views/admin/permissions/Create.vue'),
                meta: { breadCrumb: 'Create Permission' }
            },
            {
                name: 'permissions.edit',
                path: 'permissions/edit/:id',
                component: () => import('../views/admin/permissions/Edit.vue'),
                meta: { breadCrumb: 'Permission Edit' }
            },
            {
                name: 'roles.index',
                path: 'roles',
                component: () => import('../views/admin/roles/Index.vue'),
                meta: { breadCrumb: 'Roles' }
            },
            {
                name: 'roles.create',
                path: 'roles/create',
                component: () => import('../views/admin/roles/Create.vue'),
                meta: { breadCrumb: 'Create Role' }
            },
            {
                name: 'roles.edit',
                path: 'roles/edit/:id',
                component: () => import('../views/admin/roles/Edit.vue'),
                meta: { breadCrumb: 'Role Edit' }
            },
            {
                name: 'users.index',
                path: 'users',
                component: () => import('../views/admin/users/Index.vue'),
                meta: { breadCrumb: 'Users' }
            },
            {
                name: 'users.create',
                path: 'users/create',
                component: () => import('../views/admin/users/Create.vue'),
                meta: { breadCrumb: 'Add New' }
            },
            {
                name: 'users.edit',
                path: 'users/edit/:id',
                component: () => import('../views/admin/users/Edit.vue'),
                meta: { breadCrumb: 'User Edit' }
            },
        ]
    },
    {
        path: "/:pathMatch(.*)*",
        name: 'NotFound',
        component: () => import("../views/errors/404.vue"),
    },
];
