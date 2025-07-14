import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout(
    './layout/BaseLayout.tsx',
    [
      index('routes/home.tsx'),
      route('misc', 'routes/misc.tsx'),
      ...prefix(
        'municipal-council',
        [
          index('routes/municipal_council/home.tsx'),
          route('members', 'routes/municipal_council/members/home.tsx'),
          route('members/:memberId', 'routes/municipal_council/members/detail.tsx'),
          route('reports', 'routes/municipal_council/reports/home.tsx'),
          route('reports/:reportId', 'routes/municipal_council/reports/detail.tsx'),
        ],
      ),
      ...prefix(
        'virtual-townhall',
        [
          index('routes/virtual_townhall/home.tsx'),
          route('administrative-processes', 'routes/virtual_townhall/admin_processes.tsx'),
        ],
      ),
      ...prefix(
        'communal-life',
        [
          index('routes/communal_life/home.tsx'),
          route('graveyard', 'routes/communal_life/graveyard.tsx'),
          ...prefix(
            'associations',
            [
              index('routes/communal_life/associations/home.tsx'),
              route(':associationId', 'routes/communal_life/associations/detail.tsx'),
            ],
          ),
          ...prefix(
            'news',
            [
              index('routes/communal_life/news/home.tsx'),
              route(':newsId', 'routes/communal_life/news/detail.tsx'),
              route('latest', 'routes/communal_life/news/latest.tsx'),
              route('upcoming', 'routes/communal_life/news/upcoming.tsx'),
              route('history', 'routes/communal_life/news/history.tsx'),
            ],
          ),
          ...prefix(
            'multipurpose-room',
            [
              index('routes/communal_life/multipurpose_room/home.tsx'),
              ...prefix(
                'bookings',
                [
                  index('routes/communal_life/multipurpose_room/bookings/home.tsx'),
                  route('add', 'routes/communal_life/multipurpose_room/bookings/add.tsx'),
                  route(':bookingId', 'routes/communal_life/multipurpose_room/bookings/detail.tsx'),
                  route(':bookingId/edit', 'routes/communal_life/multipurpose_room/bookings/edit.tsx'),
                ]
              ),
            ],
          ),
        ],
      ),
      ...prefix(
        'services',
        [
          index('routes/services/home.tsx'),
          route('sitomap', 'routes/services/sitomap.tsx'),
          route('schooling', 'routes/services/schooling.tsx'),
          ...prefix(
            'cleaning',
            [
              index('routes/services/cleaning/home.tsx'),
              route('rules', 'routes/services/cleaning/rules.tsx'),
              route('reports', 'routes/services/cleaning/reports/home.tsx'),
              route('reports/:reportId', 'routes/services/cleaning/reports/detail.tsx'),
            ],
          ),
        ],
      ),
    ],
  ),
] satisfies RouteConfig;
