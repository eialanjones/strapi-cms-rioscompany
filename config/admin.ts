export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4edaee3abd49a694e5c453f1134b417c'),
  },
});
