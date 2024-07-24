module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        // ssl: env.bool('DATABASE_SSL', false) && {
        //   ca: env('DATABASE_SSL_CA') && require('fs').readFileSync(env('DATABASE_SSL_CA')).toString(),
        //   rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        //   sslmode: 'require',
        // },
        ssl: env.bool('DATABASE_SSL', false) && {
            ca: env('DATABASE_SSL_CA_BASE64') && Buffer.from(env('DATABASE_SSL_CA_BASE64'), 'base64').toString('ascii'),
            rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      debug: false,
    },
  });