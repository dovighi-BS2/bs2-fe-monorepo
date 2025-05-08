#!/bin/sh
# Gerar arquivo de host do nginx com a variável API_ENDPOINT
echo "Generating nginx file..."
cd ..
cat /docker-app/default.conf  > /etc/nginx/conf.d/default.conf
echo "Running nginx..."
# Executa nginx
chown -R app:app /etc/nginx/
chmod 755 -R /etc/nginx/
nginx -g "daemon off;"