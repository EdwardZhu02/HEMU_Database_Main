#!/bin/bash
conda activate HEMUdb_new

fuser -k 8001/tcp # kill uwsgi listening at port 8001
touch /data1/hemu_log/hemu_uwsgi.log
uwsgi --ini /data1/middleware_config/hemu_uwsgi.ini # restart uwsgi
# The main django project runs at port 8000.
fuser -k 8001/tcp && uwsgi --ini /data1/middleware_config/hemu_uwsgi.ini

sudo rm /etc/nginx/nginx.conf && sudo cp /data1/middleware_config/nginx.conf /etc/nginx/nginx.conf
sudo service nginx reload # restart nginx

sudo rm /etc/rinetd.conf && sudo cp /data1/middleware_config/rinetd.conf /etc/rinetd.conf
sudo systemctl restart rinetd # restart rinetd

fuser -k 3000/tcp # kill npx server (JBrowse) listening at port 3000
cd /data1/JBrowse && nohup sudo npx serve .>/data1/hemu_log/jbrowse_npx.log & exit # restart npx server
# This command should end with an Exit/1 status. However, this doesn't matter.

sudo rm /var/lib/gems/2.7.0/gems/sequenceserver-2.0.0/views/layout.erb && sudo cp /data1/tmp_dev/layout.erb /var/lib/gems/2.7.0/gems/sequenceserver-2.0.0/views/layout.erb
fuser -k 4567/tcp
nohup sequenceserver > /data1/hemu_log/sequenceserver.log & exit

# Start shiny server
sudo rm /etc/shiny-server/shiny-server.conf && sudo cp /data1/middleware_config/shiny-server.conf /etc/shiny-server/shiny-server.conf
sudo systemctl restart shiny-server


celery -A HEMU_Database_Main status
#cd /data1/HEMU_Database_Main/ && nohup celery -A HEMU_Database_Main worker -l info>/data1/hemu_log/celery.log && exit
# Celery 已使用supervisor托管
cd /data1/middleware_config && supervisord -c supervisord.conf

nohup celery -A tasks flower --address=0.0.0.0 --port=5566 > /data1/hemu_log/flower_celery.log 2>&1 &


# Wangyu server
nohup python -m notebook --allow-root>/data1/jupyter_server_log.log & exit
sudo systemctl restart rstudio-server
sudo rstudio-server verify-installation
install.packages("shiny", INSTALL_opts = "--no-lock")
nohup sudo docker run --rm -p 8002:8787 -e PASSWORD=rstudio -e USER=rstudio1 rocker/rstudio>/data1/rstudio_server_log.log &
docker run -d -p 8003:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer

nohup docker run -e PASSWORD=rstudio1 -e USER=rstudio1 -p 8004:8787 heliumdatastage/rstudio-server:1>/data1/rstudio_server_log2.log &